---
title: Agent Skills
description: Install the EchoNext agent skills so your AI coding assistant knows the framework's conventions.
---

# Agent Skills

EchoNext ships eight [Agent Skills](https://agentskills.io) — packaged instructions that teach
AI coding assistants the framework's conventions. With them installed, your agent already knows
how typed handlers are registered, where a domain's files belong, and which contrib helpers to
reach for, instead of guessing from the surrounding code.

The skills follow the open [Agent Skills specification](https://agentskills.io/specification),
so they are not tied to any single assistant.

## Install for any agent

```bash
npx skills add abdussamadbello/echonext
```

This works with Claude Code, Cursor, GitHub Copilot, VS Code, Gemini CLI, OpenCode, Codex, Goose,
Amp, Kiro, Zed, and [40+ other clients](https://agentskills.io/clients) that support the format.
The installer detects which agents you have and writes the skills into each one's skills directory.

To install a single skill instead of all eight:

```bash
npx skills add abdussamadbello/echonext -s echonext-handlers
```

To install everything without prompts:

```bash
npx skills add abdussamadbello/echonext --all
```

## Install as a Claude Code plugin

Claude Code can also install the skills as a versioned plugin:

```
/plugin marketplace add abdussamadbello/echonext
/plugin install echonext@echonext
```

Both routes deliver the same eight skills. The plugin route tracks the release version and
appears in `/plugin list`; the `npx skills` route reaches more assistants.

## Scaffold a project with the skills included

If the [CLI](/docs/cli/init) is installed, `--with-skills` sets up a new project
and its skills in one step:

```bash
echonext init myapi --with-skills
```

The scaffold keeps `skills-lock.json` tracked and ignores the installed skill
content, so a collaborator who clones the project restores the identical set with:

```bash
npx skills experimental_install
```

## What's included

| Skill | Use it for |
| --- | --- |
| `echonext-cli` | Scaffolding projects, generating code, running dev/build/test/db commands |
| `echonext-domain` | Adding a full domain — model, service, handler, and DTO together |
| `echonext-handlers` | Typed handlers, request structs, validation tags, route registration |
| `echonext-database` | GORM models, the generic `Repository[T]`, Atlas migrations and seeds |
| `echonext-openapi-security` | OpenAPI metadata, serving Swagger UI, auth security schemes |
| `echonext-middleware-config` | Middleware ordering, custom `echo.MiddlewareFunc`, YAML/env config |
| `echonext-integrations` | WebSocket hubs, gqlgen GraphQL, multipart file uploads |
| `echonext-testing` | The `APIClient`, `Suite`, and `FixtureManager` helpers |

Each skill activates on its own when the task matches — asking your agent to "add a users
endpoint" pulls in `echonext-domain`, while "write a test for this handler" pulls in
`echonext-testing`. No command is needed to invoke them.

## Managing installed skills

```bash
npx skills list                                 # show what is installed
npx skills update                               # update to the latest versions
npx skills remove echonext-handlers             # remove one skill
```

## Working inside the EchoNext repo

Cloning the framework repository gives you the skills automatically — they are committed
under [`skills/`](https://github.com/abdussamadbello/echonext/tree/main/skills) and linked
into `.claude/skills/`, so no install step is needed when contributing to EchoNext itself.

## Next Steps

1. Follow the [Quick Start Guide](./quickstart.md) to build your first API
2. Learn about [Core Concepts](./concepts.md)
