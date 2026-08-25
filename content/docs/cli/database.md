---
title: Database commands
description: Create, inspect, apply, and review Atlas migrations from the EchoNext CLI.
---

# Database commands

EchoNext's database commands wrap common Atlas workflows.

```bash
echonext db init
echonext db migrate:status
echonext db migrate:diff add_users
echonext db migrate --dry-run
echonext db migrate
```

Review generated SQL before applying it. Use environment-specific database URLs outside source control and back up production data before changes that can remove or transform information.

Additional commands create empty migrations, lint migration directories, inspect schemas, and roll back where a safe down migration exists. See [Database contrib](/docs/contrib/database) for repository and transaction helpers.
