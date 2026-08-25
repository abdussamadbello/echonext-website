---
title: Generate code
description: Generate domains, handlers, models, middleware, and integrations with the CLI.
---

# Generate code

Generators create a consistent starting point. Generated code belongs to the application and should be reviewed and adapted rather than treated as a hidden runtime.

```bash
echonext generate domain user
echonext generate handler health
echonext generate middleware auth
echonext generate otel
```

Integration generators are also available:

```bash
echonext generate upload avatar
echonext generate websocket chat
echonext generate graphql
echonext generate openapi ./openapi.yaml
```

Run the subcommand with `--help` before scripting it in CI. Commit generated files so changes remain reviewable and reproducible.
