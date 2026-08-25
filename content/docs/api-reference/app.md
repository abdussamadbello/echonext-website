---
title: App API
description: Core EchoNext application setup and access to the embedded Echo instance.
---

# App API

`echonext.New()` creates an application that embeds `*echo.Echo` and initializes validation, route metadata, and an OpenAPI document.

Common setup methods include:

- `SetInfo(title, version, description)` for API metadata;
- `GET`, `POST`, `PUT`, `PATCH`, and `DELETE` for typed route registration;
- `ServeOpenAPISpec` and `ServeSwaggerUI` for generated documentation;
- `AddSecurityScheme` for reusable OpenAPI security definitions;
- `Start` for the standard server startup path.

Because Echo is embedded, methods such as `Use`, `Group`, `Static`, `ServeHTTP`, and standard handler registration remain available.
