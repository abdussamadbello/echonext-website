---
title: Route options
description: Configure operation metadata, status codes, headers, tags, and security on typed routes.
---

# Route options

Pass an `echonext.Route` value after the typed handler:

```go
app.POST("/users", createUser, echonext.Route{
    Summary:       "Create a user",
    Description:   "Creates a user from a validated request.",
    Tags:          []string{"Users"},
    SuccessStatus: http.StatusCreated,
})
```

Route options describe the OpenAPI operation and runtime success response. Additional fields support security requirements and documented request or response headers.

Keep summaries short and action-oriented. Use descriptions for consumer-relevant behavior rather than internal implementation details.
