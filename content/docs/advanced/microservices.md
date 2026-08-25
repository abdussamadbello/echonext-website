---
title: Microservices
description: Structure and operate EchoNext services with explicit boundaries and observability.
---

# Microservices

EchoNext can make each service's HTTP boundary explicit, but it does not decide where service boundaries belong.

- Split around durable business ownership, not framework packages.
- Version public contracts deliberately and test OpenAPI compatibility.
- Propagate request IDs and trace context across outbound calls.
- Use deadlines and cancellation from `c.Request().Context()`.
- Keep health endpoints separate from deep dependency diagnostics.
- Prefer asynchronous messaging only where it improves failure isolation or workflow semantics.

The microservice example demonstrates project layout and operational hooks. Start with a modular service unless independent scaling, ownership, or reliability requirements justify distributed boundaries.
