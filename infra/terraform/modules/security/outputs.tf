output "kms_key_arn" {
  value       = aws_kms_key.main.arn
  description = "KMS key ARN."
}

output "app_role_arn" {
  value       = aws_iam_role.app.arn
  description = "Application IAM role ARN."
}
