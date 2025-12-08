# Create a VPC
resource "aws_vpc" "vpc" {
  cidr_block = var.vpc_cidr
  tags = {
    Name = "main_vpc"
  }
}
#-------------------------------------------------------
# Create Public Subnets
resource "aws_subnet" "public_subnet1" {
    vpc_id            = aws_vpc.vpc.id
    cidr_block        = var.public_subnet_cidr_a
    availability_zone = "${var.aws_region}a"
    
    tags = {
        Name = "public_subnet_a"
    }
}

resource "aws_subnet" "public_subnet2" {
    vpc_id = aws_vpc.vpc.id
    cidr_block = var.public_subnet_cidr_b
    availability_zone = "${var.aws_region}b"
    tags = {
        Name = "public_subnet_b"
    } 
}
#-------------------------------------------------------
# Create Private Subnets
resource "aws_subnet" "private_subnet1" {
    vpc_id = aws_vpc.vpc.id
    cidr_block = var.private_subnet_cidr_a
    availability_zone = "${var.aws_region}a"
    tags = {
        Name = "private_subnet_a"
    }
}
resource "aws_subnet" "private_subnet2" {
    vpc_id = aws_vpc.vpc.id
    cidr_block = var.private_subnet_cidr_b
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
resource "aws_security_group" "bastion_sg" {
  name        = "bastion_sg"
  description = "Security group for bastion host"
  vpc_id      = aws_vpc.vpc.id
  
  ingress {
    description = "SSH from my IP only"
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
resource "aws_instance" "bastion" {
  ami                    = data.aws_ami.ubuntu.id
  instance_type          = "t2.micro"
  subnet_id              = aws_subnet.public_subnet2.id
  vpc_security_group_ids = [aws_security_group.bastion_sg.id]
  key_name               = "key-pair2"
  
  tags = {
    Name = "Bastion_Host"
  }
}

resource "aws_eip" "bastion_eip" {
  instance = aws_instance.bastion.id
  domain   = "vpc"
  
  tags = {
    Name = "bastion_eip"
  }
}
#-------------------------------------------------------
# ALB Security Group alb_sg
resource "aws_security_group" "alb_sg" {
  name        = "alb_sg"
  description = "Security group for Application Load Balancer"
  vpc_id      = aws_vpc.vpc.id
  
  ingress {
    description = "HTTP from internet"
    from_port   = 80
    to_port     = 80
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }
  
  ingress {
    description = "HTTPS from internet"
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
# Security Group for Web Instances
resource "aws_security_group" "web_sg" {
  name        = "web_sg"
  description = "Security group for web application instances"
  vpc_id      = aws_vpc.vpc.id
  
  ingress {
    description     = "HTTP from ALB"
    from_port       = 80
    to_port         = 80
    protocol        = "tcp"
    security_groups = [aws_security_group.alb_sg.id]
  }
  
  ingress {
    description     = "SSH from Bastion Host"
    from_port       = 22
    to_port         = 22
    protocol        = "tcp"
    security_groups = [aws_security_group.bastion_sg.id]
  }
  
  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }
  
  tags = {
    Name = "web_sg"
  }
}

#-------------------------------------------------------
# EC2 Instances in private subnet
resource "aws_instance" "app_instance" {
  for_each = {
    "instance1" = aws_subnet.private_subnet1.id
    "instance2" = aws_subnet.private_subnet2.id
  }
  
  ami                    = data.aws_ami.ubuntu.id
  instance_type          = "t2.micro"
  subnet_id              = each.value
  vpc_security_group_ids = [aws_security_group.web_sg.id]
  key_name               = "key-pair2"
  iam_instance_profile   = aws_iam_instance_profile.ec2_profile.name
  user_data              = base64encode(data.template_file.user_data.rendered)
  
  tags = {
    Name = "app-${each.key}"
  }
}

#-------------------------------------------------------
# S3 bucket
resource "aws_s3_bucket" "app_storage" {
    bucket = "lanwavewebsite-storage-bucket-2025"
    tags = {
        Name = "app_storage_bucket"
    }
}

#-------------------------------------------------------
# ECR Repository for store images
resource "aws_ecr_repository" "app_repo" {
  name = "my-app-repo"

  image_scanning_configuration {
    scan_on_push = true
  }
  
  tags = {
    Name = "app-ecr-repo"
  }
}
#-------------------------------------------------------
# ECR Repository Policy to allow ec2 access ECR
resource "aws_ecr_repository_policy" "app_repo_policy" {
  repository = aws_ecr_repository.app_repo.name

  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Sid    = "AllowEC2PullPush"
        Effect = "Allow"
        Principal = {
          AWS = aws_iam_role.ec2_ecr_role.arn
        }
        Action = [
          "ecr:GetDownloadUrlForLayer",
          "ecr:BatchGetImage",
          "ecr:BatchCheckLayerAvailability",
          "ecr:PutImage",
          "ecr:InitiateLayerUpload",
          "ecr:UploadLayerPart",
          "ecr:CompleteLayerUpload",
          "ecr:GetAuthorizationToken"
        ]
      }
    ]
  })
}
#-------------------------------------------------------
# Lifecycle policy to clean up old images
resource "aws_ecr_lifecycle_policy" "app_lifecycle" {
  repository = aws_ecr_repository.app_repo.name

  policy = jsonencode({
    rules = [
      {
        rulePriority = 1
        description  = "Keep last 5 images"
        selection = {
          tagStatus   = "any"
          countType   = "imageCountMoreThan"
          countNumber = 5
        }
        action = {
          type = "expire"
        }
      }
    ]
  })
}

#-------------------------------------------------------
# IAM Role for EC2 to access ECR AND S3
resource "aws_iam_role" "ec2_ecr_role" {
  name = "ec2_ecr_role"

  assume_role_policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Action = "sts:AssumeRole"
        Effect = "Allow"
        Principal = {
          Service = "ec2.amazonaws.com"
        }
      }
    ]
  })
}
#-------------------------------------------------------
# Attach AmazonEC2ContainerRegistryReadOnly Policy
resource "aws_iam_role_policy_attachment" "ecr_read_only" {
  role       = aws_iam_role.ec2_ecr_role.name
  policy_arn = "arn:aws:iam::aws:policy/AmazonEC2ContainerRegistryReadOnly"
}
#-------------------------------------------------------
# Custom ECR Push Policy
resource "aws_iam_policy" "ecr_push_policy" {
  name = "ecr_push_policy"
  
  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Sid    = "ECRPushPermissions"
        Effect = "Allow"
        Action = [
          "ecr:PutImage",
          "ecr:InitiateLayerUpload",
          "ecr:UploadLayerPart",
          "ecr:CompleteLayerUpload",
          "ecr:BatchCheckLayerAvailability",
          "ecr:GetDownloadUrlForLayer",
          "ecr:BatchGetImage"
        ]
        Resource = aws_ecr_repository.app_repo.arn
      },
      {
        Sid    = "ECRGetAuthorizationToken"
        Effect = "Allow"
        Action = [
          "ecr:GetAuthorizationToken"
        ]
        Resource = "*"
      }
    ]
  })
}
#-------------------------------------------------------
resource "aws_iam_role_policy_attachment" "ecr_push_attachment" {
  role       = aws_iam_role.ec2_ecr_role.name
  policy_arn = aws_iam_policy.ecr_push_policy.arn
}
#-------------------------------------------------------
# S3 Access Policy للـ EC2
resource "aws_iam_policy" "ec2_s3_access_policy" {
  name = "ec2_s3_access_policy"
  
  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Sid    = "ListBucket"
        Effect = "Allow"
        Action = [
          "s3:ListBucket"
        ]
        Resource = aws_s3_bucket.app_storage.arn
      },
      {
        Sid    = "ObjectAccess"
        Effect = "Allow"
        Action = [
          "s3:GetObject",
          "s3:PutObject",
          "s3:DeleteObject"
        ]
        Resource = "${aws_s3_bucket.app_storage.arn}/*"
      }
    ]
  })
}
#-------------------------------------------------------
resource "aws_iam_role_policy_attachment" "ec2_s3_attachment" {
  role       = aws_iam_role.ec2_ecr_role.name
  policy_arn = aws_iam_policy.ec2_s3_access_policy.arn
}

# IAM Instance Profile للـ EC2
resource "aws_iam_instance_profile" "ec2_profile" {
  name = "ec2_ecr_profile"
  role = aws_iam_role.ec2_ecr_role.name
}


