resource "aws_kms_key" "main" {
  description             = "KMS key for ${var.name}"
  deletion_window_in_days = 30
  enable_key_rotation     = true
  tags                    = var.tags
}

resource "aws_iam_role" "app" {
  name = "${var.name}-app-role"
  assume_role_policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Action = "sts:AssumeRole"
        Effect = "Allow"
        Principal = {
          Service = var.assume_role_service
        }
      }
    ]
  })
  tags = var.tags
}
