variable "name" {
  type        = string
  description = "EKS cluster name."
}

variable "cluster_role_arn" {
  type        = string
  description = "IAM role ARN for EKS control plane."
}

variable "subnet_ids" {
  type        = list(string)
  description = "Subnet IDs for the EKS cluster."
}

variable "tags" {
  type        = map(string)
  description = "Tags applied to resources."
  default     = {}
}
