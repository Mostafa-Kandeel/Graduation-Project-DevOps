# Create a VPC
resource "aws_vpc" "vpc" {
  cidr_block = "var.vpc_cidr"
  tags = {
    Name = "main_vpc"
  }
}

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
# Create Internet Gateway
resource "aws_internet_gateway" "igw" {
    vpc_id = aws_vpc.vpc.id
    tags = {
        Name = "internet-gateway"
}
}
# Create Route Tables
resource "aws_route_table" "pulic-rt" {
  vpc_id = aws_vpc.vpc.id
  route {
    cidr_block = "var.public_subnet_cidr_a"
    gateway_id = aws_internet_gateway.igw.id
    }
  route {
    cidr_block = "var.public_subnet_cidr_b"
    gateway_id = aws_internet_gateway.igw.id
  }
    tags = {
        Name = "public-route-table"
  }
}

resource "aws_route_table" "private-rt" {
  vpc_id = aws_vpc.vpc.id
    route {
      cidr_block = "var.private_subnet_cidr_a"
      nat_gateway_id = aws_nat_gateway.nat-gw.id
    }
    route {
        cidr_block = "var.private_subnet_cidr_b"
        nat_gateway_id = aws_nat_gateway.nat-gw.id
    }
        tags = {
            Name = "private-route-table"
    }
}
    
# Associate Route Tables with public Subnets
resource "aws_route_table_association" "public-rt-assoc1" {
    subnet_id      = aws_subnet.public_subnet1.id
    route_table_id = aws_route_table.pulic-rt.id   
}
resource "aws_route_table_association" "public-rt-assoc2" {
    subnet_id      = aws_subnet.public_subnet2.id
    route_table_id = aws_route_table.pulic-rt.id   
}
# Associate Route Tables with private Subnets
resource "aws_route_table_association" "private-rt-assoc1" {
    subnet_id      = aws_subnet.private_subnet1.id
    route_table_id = aws_route_table.private-rt.id
}
resource "aws_route_table_association" "private-rt-assoc2" {
    subnet_id      = aws_subnet.private_subnet2.id
    route_table_id = aws_route_table.private-rt.id
}

