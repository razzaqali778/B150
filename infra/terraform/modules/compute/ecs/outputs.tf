output "cluster_id" {
  value       = aws_ecs_cluster.this.id
  description = "ECS cluster ID."
}

output "log_group_name" {
  value       = aws_cloudwatch_log_group.ecs.name
  description = "CloudWatch log group name for ECS."
}
