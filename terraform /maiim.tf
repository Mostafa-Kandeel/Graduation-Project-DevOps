
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

#s3 bucket
resource "aws_s3_bucket" "adels3" {
  bucket = "adels3bucket2025"

  tags = {
    Name = "adel_bucket"
  }
}

#iam role for ec2
resource "aws_iam_role" "ec2_role" {
  name = "ec2_role"

  assume_role_policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Action = "sts:AssumeRole"
        Effect = "Allow"
        Principal = {
          Service = "ec2.amazonaws.com"
        }
      },
    ]
  })
}

#s3 access policy 
resource "aws_iam_policy" "s3_access_policy" {
  name = "s3_access_policy"
  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Action = [
          "s3:ListBucket",
          "s3:GetObject",
          "s3:PutObject"
        ]
        Effect = "Allow"
        Resource = [
          aws_s3_bucket.adels3.arn,
          "${aws_s3_bucket.adels3.arn}/*"
        ]
      },
    ]
  })
}

#attach policy to role
resource "aws_iam_role_policy_attachment" "attach_s3_policy" {
  role       = aws_iam_role.ec2_role.name
  policy_arn = aws_iam_policy.s3_access_policy.arn
}

#intence profile
resource "aws_iam_instance_profile" "ec2_instance_profile" {
  name = "ec2_instance_profile"
  role = aws_iam_role.ec2_role.name
}

#auto scaling group
resource "aws_launch_configuration" "asc" {
  name                 = "asc-launch-config"
  image_id             = "ami-0182f373e66f89c85"
  instance_type        = "t2.micro"
  iam_instance_profile = aws_iam_instance_profile.ec2_instance_profile.name
  security_groups      = [aws_security_group.app_sg.id]

  lifecycle {
    create_before_destroy = true
  }
  user_data = <<-EOF
    #!/bin/bash
    yum update -y
    yum install -y python3
    echo "Hello, World from ASG , $(hostname -f) " > /home/ec2-user/index.html
    cd /home/ec2-user
    python3 -m http.server 80 &
    EOF
}

resource "aws_autoscaling_group" "asg" {
  name                      = "asg-group"
  max_size                  = 3
  min_size                  = 1
  desired_capacity          = 2
  launch_configuration      = aws_launch_configuration.asc.name
  vpc_zone_identifier       = [aws_subnet.priv_subnet1.id, aws_subnet.priv_subnet2.id]
  target_group_arns         = [aws_lb_target_group.tggroup.arn]
  health_check_type         = "ELB"
  health_check_grace_period = 300

  tag {
    key                 = "Name"
    value               = "ASG-Instance"
    propagate_at_launch = true
  }
}
resource "aws_instance" "bastion" {
  ami                    = "ami-0182f373e66f89c85"
  instance_type          = "t2.micro"
  subnet_id              = aws_subnet.public_subnet1.id
  availability_zone      = "us-east-1a"
  vpc_security_group_ids = [aws_security_group.bastion_sg.id]

  tags = {
    Name = "BastionHost"
  }
}

