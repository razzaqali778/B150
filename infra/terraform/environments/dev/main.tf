terraform {
  backend "s3" {
    bucket         = "replace-me-terraform-state"
    key            = "dev/terraform.tfstate"
    region         = "us-east-1"
    dynamodb_table = "replace-me-terraform-locks"
    encrypt        = true
  }
}

locals {
  name = "dev"
  tags = {
    Environment = "dev"
    ManagedBy   = "terraform"
  }
}

module "network" {
  source               = "../../modules/network"
  name                 = local.name
  vpc_cidr             = "10.0.0.0/16"
  public_subnet_cidrs  = ["10.0.1.0/24", "10.0.2.0/24"]
  private_subnet_cidrs = ["10.0.11.0/24", "10.0.12.0/24"]
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
