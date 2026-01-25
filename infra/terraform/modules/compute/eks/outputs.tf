output "cluster_name" {
  value       = aws_eks_cluster.this.name
  description = "EKS cluster name."
}
