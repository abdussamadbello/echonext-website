---
title: Development setup
description: Set up a local environment for contributing to EchoNext.
---

# Development setup

Fork and clone the repository, then work from a focused branch.

```bash
git clone https://github.com/YOUR_NAME/echonext.git
cd echonext
go mod download
go test ./...
```

Use the Go version declared in `go.mod` for the branch you are contributing to. Run the complete test suite before opening a pull request and include tests for behavioral changes.

For CLI template work, generate a project in a temporary directory and verify both normal packages and test packages compile. For documentation changes, verify examples against the release they claim to describe.
