---
title: Design philosophy
description: The principles that guide EchoNext's typed layer over Echo.
---

# Design philosophy

EchoNext is built around four constraints:

1. **Types should be operational.** Request and response structs should improve compilation, runtime validation, and API documentation together.
2. **Echo should remain accessible.** Middleware, context methods, route groups, server options, and standard handlers are not hidden.
3. **Adoption should be incremental.** A service can use typed routes only where the contract provides value.
4. **Optional infrastructure should stay optional.** Database, config, testing, and observability packages do not belong in the minimal HTTP core.

The abstraction is successful when an endpoint is easier to understand and harder to let drift—not merely when it contains fewer lines.
