output "alb_dns_name" {
  value       = aws_lb.this.dns_name
  description = "ALB DNS name."
}

output "target_group_arn" {
  value       = aws_lb_target_group.app.arn
  description = "Target group ARN."
}

output "security_group_id" {
  value       = aws_security_group.alb.id
  description = "ALB security group ID."
}
