output "service_name" {
  value       = aws_ecs_service.this.name
  description = "ECS service name."
}

output "task_execution_role_arn" {
  value       = aws_iam_role.task_execution.arn
  description = "Task execution role ARN."
}
