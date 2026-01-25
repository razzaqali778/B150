variable "name" {
  type        = string
  description = "S3 bucket name."
}

variable "kms_key_id" {
  type        = string
  description = "KMS key ID for encryption."
}

variable "tags" {
  type        = map(string)
  description = "Tags applied to resources."
  default     = {}
}
