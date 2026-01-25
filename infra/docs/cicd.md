# CI/CD Guide

This setup uses GitHub Actions with AWS OIDC to deploy frontend and backend services securely.

## Required GitHub Secrets

- `AWS_ROLE_ARN_DEV`, `AWS_ROLE_ARN_STAGING`, `AWS_ROLE_ARN_PROD`
- `AWS_REGION` (e.g., `us-east-1`)
- `ECR_REPOSITORY_BACKEND`
- `ECS_CLUSTER_NAME`
- `ECS_SERVICE_NAME`
- `FRONTEND_BUCKET_NAME`
- `CLOUDFRONT_DISTRIBUTION_ID`

## Pipeline Flow

1. **CI**: lint, test, and build artifacts.
2. **Security**: dependency scan and container image scan.
3. **Publish**: push Docker images to ECR (backend).
4. **Deploy**:
   - Frontend: sync to S3, invalidate CloudFront.
   - Backend: update ECS service with new image (default tag `latest` in this scaffold).

## Environment Promotion

- `dev`: auto-deploy on merge to `main`.
- `staging`: manual approval or tag-based trigger.
- `prod`: release tags with required approvals.

## Notes

- GitHub Actions uses OIDC to assume an IAM role; no static AWS keys.
- Add manual approval gates for production in GitHub environments.
