---
title: Migrate from Echo
description: Introduce EchoNext typed routes incrementally in an existing Echo service.
---

# Migrate from Echo

EchoNext is designed for incremental adoption.

1. Create the EchoNext application where the existing Echo instance is initialized.
2. Keep current middleware, groups, error handling, and standard handlers.
3. Choose one JSON endpoint with a clear request and response contract.
4. Extract named request and response structs.
5. Convert manual binding and validation into a typed handler signature.
6. Register route metadata and compare the generated OpenAPI operation with current behavior.
7. Add HTTP-level tests before converting another route.

Do not migrate streaming or unusually dynamic endpoints merely for consistency. Typed and standard handlers can remain side by side.

Stable v1.5.0 targets Echo v5, and typed handlers take `*echo.Context`. Services still on Echo v4 should pin EchoNext v1.4.8 until the Echo upgrade is done, since the handler signature changed in v1.5.0.
