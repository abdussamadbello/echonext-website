---
title: Testing APIs
description: Test EchoNext handlers, routes, validation, and response contracts.
---

# Testing APIs

Prefer tests that exercise the registered HTTP route. They cover binding, validation, middleware, status codes, and response serialization together.

```go
func TestCreateUser(t *testing.T) {
    app := setupApp()
    req := httptest.NewRequest(http.MethodPost, "/users", strings.NewReader(`{"name":"Ada"}`))
    req.Header.Set(echo.HeaderContentType, echo.MIMEApplicationJSON)
    rec := httptest.NewRecorder()

    app.ServeHTTP(rec, req)
    require.Equal(t, http.StatusCreated, rec.Code)
}
```

## Test the contract boundaries

Cover a valid request, invalid JSON, each important validation rule, missing resources, authorization failures, and the documented success status.

## Contrib testing package

The optional [testing utilities](/docs/contrib/testing) provide a fluent API client, response assertions, fixtures, factories, and reusable suite setup. Use them when they reduce repetition without hiding the behavior being verified.

Regenerate or serialize the OpenAPI document in tests when route metadata is part of your public compatibility surface.
