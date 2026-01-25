variable "name" {
  type        = string
  description = "ECS cluster name."
}

variable "tags" {
  type        = map(string)
  description = "Tags applied to resources."
  default     = {}
}
