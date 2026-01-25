# Architecture Overview

This repository uses a **multi-account, multi-environment AWS layout** similar to large-scale organizations. The infrastructure is designed to support both frontend and backend workloads with secure network isolation and automated delivery.

## Accounts

- **Shared Services**: centralized logging, monitoring, IAM, and CI/CD tooling.
- **Dev / Staging / Prod**: isolated environments with their own VPCs and compute.

## Network Topology

- **VPC per environment** with public and private subnets across multiple AZs.
- **Internet Gateway** for public subnets; **NAT Gateways** for private egress.
- **Private endpoints** (VPC endpoints) for S3, ECR, CloudWatch, etc.

## Workloads

### Frontend

- Static site hosted on **S3** with **CloudFront** distribution.
- TLS via **ACM**, WAF for edge protection.

### Backend

- **ECS on Fargate** for containerized services (API, workers).
- **ALB** for traffic management, target groups for rolling deploys.
- **Auto Scaling** based on CPU or request count.

## Data Layer

- **RDS** for relational workloads (Postgres/MySQL).
- **DynamoDB** for high-scale key-value use cases.
- **ElastiCache** for caching.
- **S3** for object storage.

## Observability

- **CloudWatch Logs/Metrics/Alarms**.
- **X-Ray** for tracing.
- Centralized log archival via **S3** and **Athena**.

## Security

- Least-privilege IAM roles for apps and CI/CD.
- **KMS** for at-rest encryption.
- **Secrets Manager** for sensitive configuration.

## Delivery Model

- GitHub Actions with **OIDC** to assume AWS roles.
- Per-environment pipelines (dev, staging, prod) with approvals for prod.
- Automated deployments for both frontend (S3 + CloudFront) and backend (ECS).
