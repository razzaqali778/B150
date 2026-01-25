variable "name" {
  type        = string
  description = "DynamoDB table name."
}

variable "hash_key" {
  type        = string
  description = "Partition key name."
}

variable "tags" {
  type        = map(string)
  description = "Tags applied to resources."
  default     = {}
}
