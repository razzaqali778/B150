variable "name" {
  type        = string
  description = "X-Ray sampling rule name."
}

variable "fixed_rate" {
  type        = number
  description = "Sampling rate (0.0 - 1.0)."
  default     = 0.05
}
