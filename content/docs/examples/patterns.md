---
title: Common patterns
description: Reusable patterns for EchoNext handlers, services, errors, and route organization.
---

# Common patterns

## Keep handlers thin

Typed handlers should translate the HTTP contract into a service call and map known domain failures to HTTP errors.

```go
func createOrder(c *echo.Context, request CreateOrder) (Order, error) {
    return orders.Create(c.Request().Context(), request)
}
```

## Group by domain

Keep request and response types near their routes, while persistence and business rules remain independent of Echo.

## Return deliberate statuses

Use `201 Created` for new resources and `204 No Content` for successful operations without response bodies. Record the status in route metadata so runtime and OpenAPI agree.

## Test through HTTP

Exercise the registered route for binding and validation behavior, then unit-test domain services separately where their logic has meaningful branches.
