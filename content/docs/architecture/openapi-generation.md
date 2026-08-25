---
title: OpenAPI architecture
description: How EchoNext turns route registration and reflected Go types into OpenAPI.
---

# OpenAPI architecture

Route registration captures the HTTP method, path, handler request and response types, and `echonext.Route` metadata. Schema generation walks those Go types and adds reusable OpenAPI components while guarding against recursive structures.

Path parameters come from route segments, query parameters come from tagged request fields, and request bodies come from typed body handlers. Status codes, security requirements, request headers, and response headers come from route options.

The specification is assembled after registration and can be served as JSON alongside Swagger UI. Because reflection happens against compiled Go types, route-level tests should verify important schemas whenever client compatibility depends on the document.
