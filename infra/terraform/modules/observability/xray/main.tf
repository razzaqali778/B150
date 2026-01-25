resource "aws_xray_sampling_rule" "default" {
  rule_name      = var.name
  fixed_rate     = var.fixed_rate
  priority       = 10000
  reservoir_size = 1
  service_name   = "*"
  service_type   = "*"
  host           = "*"
  http_method    = "*"
  url_path       = "*"
  version        = 1
}
