variable "name" {
  type        = string
  description = "Name prefix for network resources."
}

variable "vpc_cidr" {
  type        = string
  description = "CIDR block for the VPC."
}

variable "public_subnet_cidrs" {
  type        = list(string)
  description = "CIDR blocks for public subnets."
}

variable "private_subnet_cidrs" {
  type        = list(string)
  description = "CIDR blocks for private subnets."
}

variable "availability_zones" {
  type        = list(string)
  description = "Availability zones to spread subnets across."
}

variable "tags" {
  type        = map(string)
  description = "Tags applied to resources."
  default     = {}
}
