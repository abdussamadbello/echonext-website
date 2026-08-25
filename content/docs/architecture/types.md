---
title: Type system
description: How handler request and response types become an HTTP contract.
---

# Type system

EchoNext recognizes typed handler shapes for routes with and without request bodies and responses.

```go
func(c *echo.Context) (Response, error)
func(c *echo.Context, request Request) (Response, error)
func(c *echo.Context) error
```

The wrapper inspects the handler, creates the request value, binds JSON or query fields, validates it, invokes the handler, and serializes the response.

## Tag responsibilities

- `json` controls JSON field names and omission.
- `query` maps query-string values.
- `validate` declares request constraints.

Use named structs for public requests and responses. They produce clearer compiler errors, tests, and OpenAPI schemas than deeply nested anonymous values.
