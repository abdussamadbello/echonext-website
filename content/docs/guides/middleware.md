---
title: Middleware
description: Use Echo middleware and optional EchoNext contrib middleware with typed routes.
---

# Middleware

EchoNext embeds `*echo.Echo`, so standard Echo middleware applies to typed and standard routes.

```go
app := echonext.New()
app.Use(middleware.Logger())
app.Use(middleware.Recover())
app.Use(middleware.CORS())
```

## Order matters

Middleware runs in registration order around the matched handler. Put recovery and request correlation near the outside, then logging, authentication, authorization, and endpoint-specific behavior.

## Route groups

```go
api := app.Group("/api/v1")
api.Use(requireAuthentication)
api.GET("/profile", getProfile)
```

## Contrib middleware

EchoNext includes optional helpers for request IDs, structured logging, metrics, OpenTelemetry, and traced outbound HTTP clients. See [Contrib middleware](/docs/contrib/middleware) for their APIs.

Middleware still owns runtime enforcement. Route metadata and OpenAPI security requirements only describe the interface.
