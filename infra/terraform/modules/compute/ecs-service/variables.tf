variable "name" {
  type        = string
  description = "Service name."
}

variable "cluster_arn" {
  type        = string
  description = "ECS cluster ARN."
}

variable "subnet_ids" {
  type        = list(string)
  description = "Subnet IDs for the service."
}

variable "security_group_ids" {
  type        = list(string)
  description = "Security group IDs for the service."
}

variable "target_group_arn" {
  type        = string
  description = "Target group ARN for the service."
}

variable "container_image" {
  type        = string
  description = "Container image URI."
}

variable "container_port" {
  type        = number
  description = "Container port."
  default     = 3000
}

variable "task_cpu" {
  type        = number
  description = "Task CPU units."
  default     = 512
}

variable "task_memory" {
  type        = number
  description = "Task memory in MiB."
  default     = 1024
}

variable "desired_count" {
  type        = number
  description = "Desired task count."
  default     = 2
}

variable "aws_region" {
  type        = string
  description = "AWS region for log configuration."
}

variable "environment" {
  type        = map(string)
  description = "Environment variables for the container."
  default     = {}
}

variable "tags" {
  type        = map(string)
  description = "Tags applied to resources."
  default     = {}
}
