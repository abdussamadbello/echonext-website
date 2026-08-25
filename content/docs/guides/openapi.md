---
title: OpenAPI generation
description: Generate and serve an OpenAPI 3 document from EchoNext routes and Go types.
---

# OpenAPI generation

EchoNext records route metadata and derives request and response schemas from the handler types registered on the application.

## Describe the API

```go
app := echonext.New()
app.SetInfo("Orders API", "1.0.0", "Order management")
```

Add operation metadata when registering a route:

```go
app.POST("/orders", createOrder, echonext.Route{
    Summary:       "Create an order",
    Description:   "Creates an order from the validated request body.",
    Tags:          []string{"Orders"},
    SuccessStatus: http.StatusCreated,
})
```

## Serve the specification

```go
app.ServeOpenAPISpec("/api/openapi.json")
app.ServeSwaggerUI("/api/docs", "/api/openapi.json")
```

Generate the specification after all routes and security schemes have been registered. Types, JSON tags, query tags, validation rules, headers, status codes, and route parameters contribute to the final document.

## Security schemes

Register a reusable scheme and reference it from protected routes:

```go
app.AddSecurityScheme("bearerAuth", echonext.Security{
    Type:   "http",
    Scheme: "bearer",
})
```

Keep authorization enforcement in middleware; the OpenAPI requirement documents the contract but does not authenticate requests by itself.
