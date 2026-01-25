resource "aws_lambda_function" "this" {
  function_name = var.name
  role          = var.role_arn
  handler       = var.handler
  runtime       = var.runtime
  filename      = var.package_path

  environment {
    variables = var.environment
  }

  tags = var.tags
}
