# Create a VPC
resource "aws_vpc" "vpc" {
  cidr_block = "var.vpc_cidr"
  tags = {
    Name = "main_vpc"
  }
}
#-------------------------------------------------------
# Create Public Subnets
resource "aws_subnet" "public_subnet1" {
    vpc_id            = aws_vpc.vpc.id
    cidr_block        = "var.public_subnet_cidr_a"
    availability_zone = "${var.aws_region}a"
    
    tags = {
        Name = "public_subnet_a"
    }
}

resource "aws_subnet" "public_subnet2" {
    vpc_id = aws_vpc.vpc.id
    cidr_block = "var.public_subnet_cidr_b"
    availability_zone = "${var.aws_region}b"
    tags = {
        Name = "public_subnet_b"
    } 
}
#-------------------------------------------------------
# Create Private Subnets
resource "aws_subnet" "private_subnet1" {
    vpc_id = aws_vpc.vpc.id
    cidr_block = "var.private_subnet_cidr_a"
    availability_zone = "${var.aws_region}a"
    tags = {
        Name = "private_subnet_a"
    }
}
resource "aws_subnet" "private_subnet2" {
    vpc_id = aws_vpc.vpc.id
    cidr_block = "var.private_subnet_cidr_b"
    availability_zone = "${var.aws_region}b"
    tags = {
        Name = "private_subnet_b"
    }
}
#-------------------------------------------------------
# Create Elastic IP for NAT Gateway
resource "aws_eip" "nat-eip" {
    domain = "vpc"
}

# Create NAT Gateway
resource "aws_nat_gateway" "nat-gw" {
    allocation_id = aws_eip.nat-eip.id
    subnet_id     = aws_subnet.public_subnet1.id
    tags = {
        Name = "nat-gateway"
    } 
}

#-------------------------------------------------------
# Create Internet Gateway
resource "aws_internet_gateway" "igw" {
    vpc_id = aws_vpc.vpc.id
    tags = {
        Name = "internet-gateway"
}
}
#-------------------------------------------------------
# Create Route Tables
resource "aws_route_table" "public_rt" {
  vpc_id = aws_vpc.vpc.id
  route {
    cidr_block = "0.0.0.0/0"
    gateway_id = aws_internet_gateway.igw.id
    }
    tags = {
        Name = "public-route-table"
  }
}

resource "aws_route_table" "private_rt" {
  vpc_id = aws_vpc.vpc.id
    route {
      cidr_block = "0.0.0.0/0"
      nat_gateway_id = aws_nat_gateway.nat-gw.id
    }

        tags = {
            Name = "private-route-table"
    }
}
#------------------------------------------------------- 
# Associate Route Tables with public Subnets
resource "aws_route_table_association" "public_rt_assoc1" {
    for_each = {
      "subnet1" = aws_subnet.public_subnet1.id
      "subnet2" = aws_subnet.public_subnet2.id
      }
      subnet_id = each.value
      route_table_id = aws_route_table.public_rt.id   
}

# Associate Route Tables with private Subnets
resource "aws_route_table_association" "private_rt_assoc1" {
    for_each = {
      "subnet1" = aws_subnet.private_subnet1.id
      "subnet2" = aws_subnet.private_subnet2.id
     }
    subnet_id = each.value
    route_table_id = aws_route_table.private_rt.id
}
#-------------------------------------------------------

resource "aws_eip" "bastion_eip" {
  instance = aws_instance.bastion.id
  domain   = "vpc"

  tags = {
    Name = "bastion_eip"
  }
}
#bastion host
resource "aws_instance" "bastion" {
  ami                    = data.aws_ami.ubuntu.id
  instance_type          = "t3.micro"
  subnet_id              = aws_subnet.public_subnet2.id
  vpc_security_group_ids = [aws_security_group.bastion_sg.id]
  key_name               = "my-new-key-bastion"

  tags = {
    Name = "Bastion_Host"
  }
}


# Security Groups
resource "aws_security_group" "bastion_sg" {
  name   = "bastion_sg"
  vpc_id = aws_vpc.vpc.id

  ingress {
    from_port   = 22
    to_port     = 22
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }
  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }

  tags = {
    Name = "bastion_sg"
  }
}
#-------------------------------------------------------

#load balancer
resource "aws_lb" "alb" {
  name               = "app-lb"
  internal           = true
  load_balancer_type = "application"
  subnets            = [aws_subnet.private_subnet1.id, aws_subnet.private_subnet2.id]
  security_groups    = [aws_security_group.alb_sg.id]
}
# target group for ALB
resource "aws_lb_target_group" "tggroup" {
  name     = "targetgroup"
  port     = 80
  protocol = "HTTP"
  vpc_id   = aws_vpc.vpc.id
  health_check {
    port     = 80
    protocol = "HTTP"
    path     = "/"
  }
}

resource "aws_lb_listener" "listener" {
  load_balancer_arn = aws_lb.alb.arn
  port              = 80
  protocol          = "HTTP"

  default_action {
    type             = "forward"
    target_group_arn = aws_lb_target_group.tggroup.arn
  }
}

#Security Groups
resource "aws_security_group" "alb_sg" {
  name   = "alb_sg"
  vpc_id = aws_vpc.vpc.id

  ingress {
    from_port   = 80
    to_port     = 80
    protocol    = "tcp"
    cidr_blocks = [aws_vpc.vpc.cidr_block]
  }
  ingress {
  from_port   = 443
  to_port     = 443
  protocol    = "tcp"
  cidr_blocks = ["0.0.0.0/0"]
}
  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }

  tags = {
    Name = "alb_sg"
  }
}
#-------------------------------------------------------
