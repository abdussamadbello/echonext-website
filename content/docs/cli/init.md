---
title: Initialize a project
description: Scaffold an EchoNext service with the CLI.
---

# Initialize a project

Install the CLI version that matches these docs. The install script builds the
binary, renames `echonext-cli` to `echonext`, and reports whether the install
directory is on `PATH`:

```bash
curl -sSL https://raw.githubusercontent.com/abdussamadbello/echonext/main/install.sh | bash
```

To use the Go toolchain instead, note that the binary is installed as
`echonext-cli` and has to be linked before `echonext` resolves:

```bash
go install github.com/abdussamadbello/echonext/cmd/echonext-cli@v1.5.0
ln -sf "$(go env GOPATH)/bin/echonext-cli" "$(go env GOPATH)/bin/echonext"
```

Create a project with an explicit module path:

```bash
echonext init inventory --module github.com/acme/inventory
cd inventory
go mod tidy
go run ./cmd/api
```

The scaffold separates application entrypoints, internal configuration, domains, migrations, and operational setup. Review generated configuration and secrets before using the project outside local development.

## Scaffold with agent skills

Pass `--with-skills` to install the EchoNext [agent skills](/docs/getting-started/agent-skills)
into the new project, so an AI coding assistant knows the framework's conventions
from the first prompt:

```bash
echonext init inventory --with-skills
```

This runs `npx` after `go mod tidy`. When `npx` is unavailable the scaffold still
completes and prints the command to run later — skills are optional tooling, not a
build dependency.

The generated `.gitignore` excludes the installed skill content but keeps
`skills-lock.json` tracked, so collaborators restore the identical set with:

```bash
npx skills experimental_install
```

Run `echonext --help` and `echonext init --help` for the flags supported by your installed version.
