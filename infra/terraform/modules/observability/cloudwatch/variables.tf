variable "name" {
  type        = string
  description = "Name prefix for CloudWatch resources."
}

variable "log_group_name" {
  type        = string
  description = "Log group name."
}

variable "retention_days" {
  type        = number
  description = "Log retention days."
  default     = 30
}

variable "metric_namespace" {
  type        = string
  description = "CloudWatch metric namespace."
  default     = "AWS/ECS"
}

variable "cpu_threshold" {
  type        = number
  description = "CPU utilization alarm threshold."
  default     = 80
}

variable "tags" {
  type        = map(string)
  description = "Tags applied to resources."
  default     = {}
}
