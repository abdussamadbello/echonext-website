---
title: Error handling
description: Return predictable HTTP failures from typed and standard Echo handlers.
---

# Error handling

Typed handlers return a response value and an error. Return an `echo.HTTPError` when the failure has a specific public status and message.

```go
func getUser(c *echo.Context) (User, error) {
    user, err := store.Find(c.Param("id"))
    if errors.Is(err, ErrNotFound) {
        return User{}, echo.NewHTTPError(http.StatusNotFound, "user not found")
    }
    if err != nil {
        return User{}, err
    }
    return user, nil
}
```

## Keep internal details private

Log the original error with request context, then return a stable public message. Avoid sending database errors, stack traces, credentials, or implementation details to clients.

## Centralize cross-cutting behavior

Use Echo's HTTP error handler for consistent logging and response policy across typed and standard handlers. Preserve status codes from known `HTTPError` values and map unknown failures to `500 Internal Server Error`.

## Validation failures

Binding and validation happen before a typed handler runs. Treat these as client failures and document the error response shape for consumers that generate clients from OpenAPI.
