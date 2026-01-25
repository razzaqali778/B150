resource "aws_vpc" "this" {
  cidr_block           = var.vpc_cidr
  enable_dns_hostnames = true
  enable_dns_support   = true
  tags = merge(var.tags, { Name = "${var.name}-vpc" })
}

resource "aws_internet_gateway" "this" {
  vpc_id = aws_vpc.this.id
  tags   = merge(var.tags, { Name = "${var.name}-igw" })
}

resource "aws_subnet" "public" {
  for_each = toset(var.public_subnet_cidrs)

  vpc_id                  = aws_vpc.this.id
  cidr_block              = each.key
  map_public_ip_on_launch = true
  availability_zone       = element(var.availability_zones, index(var.public_subnet_cidrs, each.key))

  tags = merge(var.tags, { Name = "${var.name}-public-${index(var.public_subnet_cidrs, each.key)}" })
}

resource "aws_subnet" "private" {
  for_each = toset(var.private_subnet_cidrs)

  vpc_id                  = aws_vpc.this.id
  cidr_block              = each.key
  map_public_ip_on_launch = false
  availability_zone       = element(var.availability_zones, index(var.private_subnet_cidrs, each.key))

  tags = merge(var.tags, { Name = "${var.name}-private-${index(var.private_subnet_cidrs, each.key)}" })
}
