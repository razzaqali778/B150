terraform {
  backend "s3" {
    bucket         = "replace-me-terraform-state"
    key            = "prod/terraform.tfstate"
    region         = "us-east-1"
    dynamodb_table = "replace-me-terraform-locks"
    encrypt        = true
  }
}

locals {
  name = "prod"
  tags = {
    Environment = "prod"
    ManagedBy   = "terraform"
  }
}

module "network" {
  source               = "../../modules/network"
  name                 = local.name
  vpc_cidr             = "10.20.0.0/16"
  public_subnet_cidrs  = ["10.20.1.0/24", "10.20.2.0/24"]
  private_subnet_cidrs = ["10.20.11.0/24", "10.20.12.0/24"]
  availability_zones   = ["us-east-1a", "us-east-1b"]
  tags                 = local.tags
}

module "security" {
  source               = "../../modules/security"
  name                 = local.name
  assume_role_service  = "ecs-tasks.amazonaws.com"
  tags                 = local.tags
}

module "ecs" {
  source = "../../modules/compute/ecs"
  name   = "${local.name}-cluster"
  tags   = local.tags
}

module "app_bucket" {
  source     = "../../modules/data/s3"
  name       = "${local.name}-app-assets-example"
  kms_key_id = module.security.kms_key_arn
  tags       = local.tags
}
