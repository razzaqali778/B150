variable "name" {
  type        = string
  description = "RDS instance identifier."
}

variable "engine" {
  type        = string
  description = "Database engine (e.g., postgres)."
}

variable "instance_class" {
  type        = string
  description = "Instance class (e.g., db.t3.medium)."
}

variable "allocated_storage" {
  type        = number
  description = "Allocated storage in GB."
}

variable "username" {
  type        = string
  description = "Master username."
}

variable "password" {
  type        = string
  description = "Master password."
  sensitive   = true
}

variable "subnet_ids" {
  type        = list(string)
  description = "Subnet IDs for the DB subnet group."
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
