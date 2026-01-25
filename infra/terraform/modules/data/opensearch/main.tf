resource "aws_opensearch_domain" "this" {
  domain_name = var.name

  cluster_config {
    instance_type = var.instance_type
  }

  ebs_options {
    ebs_enabled = true
    volume_size = var.volume_size
  }

  tags = var.tags
}
