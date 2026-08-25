---
title: Validation tags
description: Common request-validation rules supported by EchoNext's validator integration.
---

# Validation tags

EchoNext uses `go-playground/validator` rules in the `validate` struct tag.

```go
type CreatePost struct {
    Title  string   `json:"title" validate:"required,min=3,max=200"`
    Email  string   `json:"email" validate:"required,email"`
    Status string   `json:"status" validate:"oneof=draft published"`
    Tags   []string `json:"tags" validate:"max=5,dive,min=2,max=20"`
}
```

Frequently used rules include `required`, `omitempty`, `min`, `max`, `len`, `email`, `url`, `uuid`, `oneof`, and `dive` for collection elements.

Validation checks syntax and local invariants. Authorization, database uniqueness, ownership, and cross-record business rules still belong in application logic.
