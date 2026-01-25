variable "name" {
  type        = string
  description = "OpenSearch domain name."
}

variable "instance_type" {
  type        = string
  description = "Instance type for the domain."
}

variable "volume_size" {
  type        = number
  description = "EBS volume size in GB."
}

variable "tags" {
  type        = map(string)
  description = "Tags applied to resources."
  default     = {}
}
