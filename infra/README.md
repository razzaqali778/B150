# Infrastructure & CI/CD

This folder provides a production-grade AWS infrastructure and CI/CD layout for a modern frontend + backend stack. It is organized to resemble patterns used by large-scale teams (multi-account, multi-environment, reusable modules, security and observability baked in).

## Structure

```
infra/
  docs/                   # Architecture, CI/CD, AWS services catalog
  terraform/
    modules/              # Reusable Terraform modules
    environments/         # Environment compositions (dev/staging/prod)
  cicd/
    github-actions/       # Reusable GitHub Actions workflows
    docker/               # Build recipes for frontend/backend
```

## Key Principles

- **Separation of concerns**: network, security, compute, data, and observability modules are independent.
- **Environment parity**: dev/staging/prod share the same modules, differing only in variables.
- **Security first**: IAM least-privilege, KMS encryption, private subnets, and secrets management.
- **Scalable delivery**: GitHub Actions pipelines deploy to AWS using OIDC and per-environment approvals.

## Getting Started

1. Review the architecture notes in `infra/docs/architecture.md`.
2. Customize environment variables in `infra/terraform/environments/*/main.tf`.
3. Wire CI/CD secrets in your GitHub repository (see `infra/docs/cicd.md`).

## Notes

This setup is intentionally verbose to be easy to read and extend. It is designed as a foundation for real systems rather than a dummy template.
