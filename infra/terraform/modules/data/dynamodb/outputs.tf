output "table_name" {
  value       = aws_dynamodb_table.this.name
  description = "DynamoDB table name."
}
