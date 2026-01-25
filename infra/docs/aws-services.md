# AWS Services Catalog

This catalog lists the most common AWS services used in modern production systems.

## Core Infrastructure
- **VPC, Subnets, Route Tables, IGW, NAT**: network isolation and routing.
- **Route 53**: DNS and health checks.
- **ACM**: TLS certificates.

## Compute
- **ECS (Fargate)**: container orchestration without managing servers.
- **EKS**: managed Kubernetes.
- **Lambda**: serverless functions.
- **EC2**: VM-based workloads.

## Storage
- **S3**: object storage and static assets.
- **EFS**: shared file storage.
- **EBS**: block storage for EC2.

## Databases
- **RDS**: managed relational databases.
- **Aurora**: high-performance relational database.
- **DynamoDB**: NoSQL key-value.
- **ElastiCache**: in-memory caching.
- **OpenSearch**: search and analytics.

## Security & Identity
- **IAM**: access management.
- **KMS**: key management.
- **Secrets Manager**: secrets storage.
- **WAF**: application firewall.
- **GuardDuty**: threat detection.
- **CloudTrail**: audit logs.

## Observability
- **CloudWatch**: logs, metrics, alarms.
- **X-Ray**: tracing.
- **OpenTelemetry Collector** (via ECS/EKS) for observability pipelines.

## CI/CD & DevOps
- **CodeBuild/CodePipeline** (optional) or **GitHub Actions**.
- **ECR**: container registry.
- **CloudFormation/Terraform**: infrastructure as code.

## Messaging & Integration
- **SQS**: message queues.
- **SNS**: pub/sub.
- **EventBridge**: event bus.

## Analytics
- **Athena**: SQL over S3.
- **Glue**: ETL.
- **Redshift**: data warehouse.
