---
title: Performance
description: Measure and optimize EchoNext services without discarding useful contracts.
---

# Performance

Measure a representative workload before changing architecture. Handler reflection and schema construction belong to setup; request-path costs are primarily binding, validation, middleware, serialization, and application work.

## Practical priorities

- Set server read, write, idle, and shutdown timeouts.
- Reuse database and HTTP client connection pools.
- Avoid unbounded request bodies, uploads, slices, and response aggregation.
- Keep synchronous middleware focused on the current request.
- Profile allocation and CPU hot spots with Go tooling.
- Load test realistic payloads and downstream latency.

Do not remove validation to improve a synthetic benchmark without measuring the reliability and security cost. If a route genuinely needs streaming or manual serialization, use a standard Echo handler for that route.
