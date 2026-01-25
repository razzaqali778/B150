terraform {
  backend "s3" {
    bucket         = "replace-me-terraform-state"
    key            = "staging/terraform.tfstate"
    region         = "us-east-1"
    dynamodb_table = "replace-me-terraform-locks"
    encrypt        = true
  }
}

locals {
  name = "staging"
  tags = {
    Environment = "staging"
    ManagedBy   = "terraform"
  }
}

module "network" {
  source               = "../../modules/network"
  name                 = local.name
  vpc_cidr             = "10.10.0.0/16"
  public_subnet_cidrs  = ["10.10.1.0/24", "10.10.2.0/24"]
  private_subnet_cidrs = ["10.10.11.0/24", "10.10.12.0/24"]
  availability_zones   = ["us-east-1a", "us-east-1b"]
  tags                 = local.tags
}

module "security" {
  source              = "../../modules/security"
  name                = local.name
  assume_role_service = "ecs-tasks.amazonaws.com"
  tags                = local.tags
}

module "ecs" {
  source = "../../modules/compute/ecs"
  name   = "${local.name}-cluster"
  tags   = local.tags
}

module "ecr" {
  source = "../../modules/data/ecr"
  name   = "${local.name}-backend"
  tags   = local.tags
}

module "alb" {
  source            = "../../modules/compute/alb"
  name              = local.name
  vpc_id            = module.network.vpc_id
  public_subnet_ids = module.network.public_subnet_ids
  tags              = local.tags
}

resource "aws_security_group" "service" {
  name        = "${local.name}-service-sg"
  description = "Service security group"
  vpc_id      = module.network.vpc_id

  ingress {
    from_port       = 3000
    to_port         = 3000
    protocol        = "tcp"
    security_groups = [module.alb.security_group_id]
  }

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }

  tags = local.tags
}

module "backend_service" {
  source             = "../../modules/compute/ecs-service"
  name               = "${local.name}-api"
  cluster_arn        = module.ecs.cluster_id
  subnet_ids         = module.network.private_subnet_ids
  security_group_ids = [aws_security_group.service.id]
  target_group_arn   = module.alb.target_group_arn
  container_image    = "${module.ecr.repository_url}:latest"
  container_port     = 3000
  aws_region         = var.aws_region
  environment = {
    APP_ENV             = "staging"
    DEPLOYMENT_STRATEGY = "rolling"
  }
  tags = local.tags
}

module "app_bucket" {
  source     = "../../modules/data/s3"
  name       = "${local.name}-app-assets-example"
  kms_key_id = module.security.kms_key_arn
  tags       = local.tags
}
