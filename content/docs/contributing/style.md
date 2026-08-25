---
title: Code style
description: Conventions for focused, idiomatic EchoNext contributions.
---

# Code style

Follow standard Go conventions and let `gofmt` decide formatting.

- Prefer small exported APIs with clear zero-value or constructor behavior.
- Add Go documentation to exported identifiers.
- Return errors with enough context while preserving causes for `errors.Is` and `errors.As`.
- Avoid package-level mutable request state.
- Keep changes scoped and avoid unrelated mechanical rewrites.
- Add table-driven tests where several inputs exercise the same behavior.
- Update examples and docs when public signatures or generated output changes.

Generated templates are user-facing API design. Test the code they emit, including generated test files that an ordinary build may skip.
