output "sampling_rule_name" {
  value       = aws_xray_sampling_rule.default.rule_name
  description = "X-Ray sampling rule name."
}
