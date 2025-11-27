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

resource "aws_eip" "bastion_eip" {
  instance = aws_instance.bastion.id
  domain   = "vpc"

  tags = {
    Name = "bastion_eip"
  }
}
#-------------------------------------------------------
#bastion host
resource "aws_instance" "bastion" {
  ami                    = data.aws_ami.ubuntu.id
  instance_type          = "t3.micro"
  subnet_id              = aws_subnet.public_subnet2.id
  vpc_security_group_ids = [aws_security_group.bastion_sg.id]
  key_name               = "key-pair2"


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
#create instance in each private subnet
resource "aws_instance" "app_instance" {
  for_each = {
    "instance1" = aws_subnet.private_subnet1.id
    "instance2" = aws_subnet.private_subnet2.id
  }
  
  ami                    = data.aws_ami.ubuntu.id
  instance_type          = "t3.micro"
  subnet_id              = each.value
  vpc_security_group_ids = [aws_security_group.instance_sg.id]
  key_name               = "key-pair2"
  
  tags = {
    Name = "app-${each.key}"
  }
}

# security group for app instances
resource "aws_security_group" "instance_sg" {
    name        = "instance_sg"
    description = "Security group for private subnet instances"
    vpc_id      = aws_vpc.vpc.id
    
    ingress {
        from_port   = 22
        to_port     = 22
        protocol    = "tcp"
        cidr_blocks = [aws_vpc.vpc.cidr_block]  
    }
    
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
        cidr_blocks = [aws_vpc.vpc.cidr_block]
    }
    
    egress {
        from_port   = 0
        to_port     = 0
        protocol    = "-1"
        cidr_blocks = ["0.0.0.0/0"]
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
  name        = "targetgroup"
  port        = 80
  protocol    = "HTTP"
  vpc_id      = aws_vpc.vpc.id
  target_type = "ip"

  health_check {
    port                = 80
    protocol            = "HTTP"
    path                = "/"
    interval            = 30
    timeout             = 5
    healthy_threshold   = 2
    unhealthy_threshold = 2
    matcher             = "200"
  }

  tags = {
    Name = "ecs-target-group"
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
# Application Security Group

resource "aws_security_group" "app_sg" {
  name   = "app_sg"
  vpc_id = aws_vpc.vpc.id

  ingress {
    from_port       = 80
    to_port         = 80
    protocol        = "tcp"
    security_groups = [aws_security_group.alb_sg.id] # only ALB can reach app
  }

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }

  tags = {
    Name = "app_sg"
  }
}
#-------------------------------------------------------
# S3 bucket
resource "aws_s3_bucket" "app_storage" {
    bucket = "lanwave-website-storage-bucket-2025"
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

# Policy to allow ECS tasks to pull/push images
resource "aws_ecr_repository_policy" "app_repo_policy" {
  repository = aws_ecr_repository.app_repo.name

  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Effect = "Allow"
        Principal = "*"
        Action = [
          "ecr:GetDownloadUrlForLayer",
          "ecr:BatchGetImage",
          "ecr:BatchCheckLayerAvailability",
          "ecr:PutImage",
          "ecr:InitiateLayerUpload",
          "ecr:UploadLayerPart",
          "ecr:CompleteLayerUpload"
        ]
      }
    ]
  })
}

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
# IAM Roles for ECS
# ECS Task Execution Role
resource "aws_iam_role" "ecs_task_execution_role" {
  name = "ecs_task_execution_role"

  assume_role_policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Action = "sts:AssumeRole"
        Effect = "Allow"
        Principal = {
          Service = "ecs-tasks.amazonaws.com"
        }
      },
    ]
  })
}

# ECS Task Role
resource "aws_iam_role" "ecs_task_role" {
  name = "ecs_task_role"

  assume_role_policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Action = "sts:AssumeRole"
        Effect = "Allow"
        Principal = {
          Service = "ecs-tasks.amazonaws.com"
        }
      },
    ]
  })
}

# Attach ECR policies to execution role
resource "aws_iam_role_policy_attachment" "ecs_task_execution_role_policy" {
  role       = aws_iam_role.ecs_task_execution_role.name
  policy_arn = "arn:aws:iam::aws:policy/service-role/AmazonECSTaskExecutionRolePolicy"
}

# Custom policy for ECR access
resource "aws_iam_policy" "ecr_access_policy" {
  name = "ecr_access_policy"
  
  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Action = [
          "ecr:GetAuthorizationToken",
          "ecr:BatchCheckLayerAvailability",
          "ecr:GetDownloadUrlForLayer",
          "ecr:GetRepositoryPolicy",
          "ecr:DescribeRepositories",
          "ecr:ListImages",
          "ecr:DescribeImages",
          "ecr:BatchGetImage",
          "ecr:GetLifecyclePolicy",
          "ecr:GetLifecyclePolicyPreview",
          "ecr:ListTagsForResource",
          "ecr:DescribeImageScanFindings"
        ]
        Effect   = "Allow"
        Resource = "*"
      },
      {
        Action = [
          "ecr:GetDownloadUrlForLayer",
          "ecr:BatchGetImage",
          "ecr:BatchCheckLayerAvailability"
        ]
        Effect   = "Allow"
        Resource = aws_ecr_repository.app_repo.arn
      }
    ]
  })
}

resource "aws_iam_role_policy_attachment" "ecr_access_attachment" {
  role       = aws_iam_role.ecs_task_execution_role.name
  policy_arn = aws_iam_policy.ecr_access_policy.arn
}

# S3 access policy for ECS Task Role
resource "aws_iam_policy" "s3_access_policy" {
  name = "s3_access_policy"
  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Action = [
          "s3:ListBucket"
        ]
        Effect   = "Allow"
        Resource = aws_s3_bucket.app_storage.arn
      },
      {
        Action = [
          "s3:GetObject",
          "s3:PutObject"
        ]
        Effect   = "Allow"
        Resource = "${aws_s3_bucket.app_storage.arn}/*"
      }
    ]
  })
}


resource "aws_iam_role_policy_attachment" "s3_access_attachment" {
  role       = aws_iam_role.ecs_task_role.name
  policy_arn = aws_iam_policy.s3_access_policy.arn
}

#-------------------------------------------------------
# ECS Cluster
resource "aws_ecs_cluster" "app_cluster" {
  name = "app-cluster"

  setting {
    name  = "containerInsights"
    value = "enabled"
  }

  tags = {
    Name = "app-ecs-cluster"
  }
}

# ECS Task Definition
resource "aws_ecs_task_definition" "app_task" {
  family                   = "app-task"
  network_mode             = "awsvpc"
  requires_compatibilities = ["FARGATE"]
  cpu                      = 256
  memory                   = 512
  execution_role_arn       = aws_iam_role.ecs_task_execution_role.arn
  task_role_arn            = aws_iam_role.ecs_task_role.arn

  container_definitions = jsonencode([
    {
      name      = "app-container"
      image     = "${aws_ecr_repository.app_repo.repository_url}:latest"
      cpu       = 256
      memory    = 512
      essential = true
      portMappings = [
        {
          containerPort = 80
          hostPort      = 80
          protocol      = "tcp"
        }
      ]
      logConfiguration = {
        logDriver = "awslogs"
        options = {
          awslogs-group         = "/ecs/app-task"
          awslogs-region        = var.aws_region
          awslogs-stream-prefix = "ecs"
        }
      }
    }
  ])

  tags = {
    Name = "app-task-definition"
  }
}

# ECS Service
resource "aws_ecs_service" "app_service" {
  name            = "app-service"
  cluster         = aws_ecs_cluster.app_cluster.id
  task_definition = aws_ecs_task_definition.app_task.arn
  desired_count   = 2
  launch_type     = "FARGATE"

  network_configuration {
    subnets         = [aws_subnet.private_subnet1.id, aws_subnet.private_subnet2.id]
    security_groups = [aws_security_group.app_sg.id]
    assign_public_ip = false
  }

  load_balancer {
    target_group_arn = aws_lb_target_group.tggroup.arn
    container_name   = "app-container"
    container_port   = 80
  }

  depends_on = [
    aws_lb_listener.listener
  ]

  tags = {
    Name = "app-ecs-service"
  }
}

#-------------------------------------------------------
# CloudWatch Log Group للـ ECS
resource "aws_cloudwatch_log_group" "ecs_logs" {
  name = "/ecs/app-task"
  retention_in_days = 7

  tags = {
    Name = "ecs-app-logs"
  }
}
