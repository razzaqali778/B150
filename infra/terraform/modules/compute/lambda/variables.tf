variable "name" {
  type        = string
  description = "Lambda function name."
}

variable "role_arn" {
  type        = string
  description = "IAM role ARN for Lambda."
}

variable "handler" {
  type        = string
  description = "Handler entrypoint."
}

variable "runtime" {
  type        = string
  description = "Runtime identifier (e.g., nodejs18.x)."
}

variable "package_path" {
  type        = string
  description = "Path to deployment package zip."
}

variable "environment" {
  type        = map(string)
  description = "Environment variables."
  default     = {}
}

variable "tags" {
  type        = map(string)
  description = "Tags applied to resources."
  default     = {}
}
