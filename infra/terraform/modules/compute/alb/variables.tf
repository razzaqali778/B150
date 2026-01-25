variable "name" {
  type        = string
  description = "Name prefix for ALB resources."
}

variable "vpc_id" {
  type        = string
  description = "VPC ID for the ALB."
}

variable "public_subnet_ids" {
  type        = list(string)
  description = "Public subnet IDs for the ALB."
}

variable "ingress_cidrs" {
  type        = list(string)
  description = "CIDR blocks allowed to access the ALB."
  default     = ["0.0.0.0/0"]
}

variable "target_port" {
  type        = number
  description = "Target group port."
  default     = 3000
}

variable "health_check_path" {
  type        = string
  description = "Health check path."
  default     = "/api/status"
}

variable "tags" {
  type        = map(string)
  description = "Tags applied to resources."
  default     = {}
}
