resource "aws_cloudwatch_log_group" "app" {
  name              = var.log_group_name
  retention_in_days = var.retention_days
  tags              = var.tags
}

resource "aws_cloudwatch_metric_alarm" "cpu_high" {
  alarm_name          = "${var.name}-cpu-high"
  comparison_operator = "GreaterThanThreshold"
  evaluation_periods  = 2
  metric_name         = "CPUUtilization"
  namespace           = var.metric_namespace
  period              = 60
  statistic           = "Average"
  threshold           = var.cpu_threshold
  alarm_description   = "High CPU utilization detected."
  tags                = var.tags
}
