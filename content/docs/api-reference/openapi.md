---
title: OpenAPI types
description: Reference the route and security metadata used during OpenAPI generation.
---

# OpenAPI types

EchoNext translates Go primitives, structs, slices, maps, pointers, and validation tags into OpenAPI schemas. Named structs become reusable components where possible.

`echonext.Security` describes schemes and route requirements. `HeaderInfo` documents expected request and response headers. `Route` provides operation summaries, descriptions, tags, success statuses, security requirements, and headers.

For the full exported surface of the installed version, use Go documentation:

```bash
go doc github.com/abdussamadbello/echonext
```

See [OpenAPI generation](/docs/guides/openapi) for an end-to-end setup.
