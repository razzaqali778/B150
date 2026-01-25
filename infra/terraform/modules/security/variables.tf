variable "name" {
  type        = string
  description = "Name prefix for security resources."
}

variable "assume_role_service" {
  type        = string
  description = "Service principal that can assume the role (e.g., ecs-tasks.amazonaws.com)."
  default     = "ecs-tasks.amazonaws.com"
}

variable "tags" {
  type        = map(string)
  description = "Tags applied to resources."
  default     = {}
}
