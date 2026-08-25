---
title: Security
description: Security responsibilities around validation, authentication, authorization, uploads, and generated documentation.
---

# Security

Validation reduces malformed input but is not a complete security boundary.

- Authenticate identities in middleware and authorize every protected resource operation.
- Apply body-size, upload-size, and content-type limits before processing untrusted data.
- Keep secrets outside source control and redact them from logs and errors.
- Configure CORS for known consumers rather than using broad production defaults.
- Apply timeouts, rate limits, and request limits appropriate to the endpoint.
- Keep dependencies and the Go toolchain patched.

OpenAPI security schemes document authentication requirements; they do not enforce them. Verify that middleware and route metadata stay aligned in tests.

Swagger UI can reveal operations and schemas. Decide whether it should be public, authenticated, restricted to non-production environments, or disabled while still serving the specification to trusted tooling.
