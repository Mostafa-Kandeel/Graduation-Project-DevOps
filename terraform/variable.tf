variable "aws_region" {
  description = "AWS region"
  type        = string
  default     = "us-east-1"
}

variable "vpc_cidr" {
  description = "CIDR block for VPC"
  type        = string
  default     = "10.0.0.0/16"
  
}

variable "public_subnet_cidr_a" {
  description = "CIDR block for public subnet in AZ a"
  type        = string
  default     = "10.0.1.0/24"
}

variable "public_subnet_cidr_b" {
  description = "CIDR block for public subnet in AZ b"
  type        = string
  default     = "10.0.2.0/24"
}

variable "private_subnet_cidr_a" {
  description = "CIDR block for private subnet in AZ a"
  type        = string
  default     = "10.0.10.0/24"
}

variable "private_subnet_cidr_b" {
  description = "CIDR block for private subnet in AZ b"
  type        = string
  default     = "10.0.11.0/24"
}