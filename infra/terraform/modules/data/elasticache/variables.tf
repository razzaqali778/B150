variable "name" {
  type        = string
  description = "ElastiCache cluster ID."
}

variable "engine" {
  type        = string
  description = "Cache engine (redis or memcached)."
}

variable "node_type" {
  type        = string
  description = "Cache node type."
}

variable "num_cache_nodes" {
  type        = number
  description = "Number of cache nodes."
}

variable "parameter_group_name" {
  type        = string
  description = "Parameter group name."
}

variable "subnet_ids" {
  type        = list(string)
  description = "Subnet IDs for the cache subnet group."
}

variable "tags" {
  type        = map(string)
  description = "Tags applied to resources."
  default     = {}
}
