---
title: Configuration
description: Load typed application configuration with the optional Viper-based contrib package.
---

# Configuration

The config package loads files and environment variables into a typed structure.

```go
type Config struct {
    App      config.AppConfig      `mapstructure:"app"`
    Database config.DatabaseConfig `mapstructure:"database"`
}

cfg, err := config.Load[Config]("config/development.yaml")
if err != nil {
    return err
}
```

Keep secrets in environment variables or a secret manager, not committed configuration files. Validate required values at startup and fail before accepting traffic when configuration is incomplete.

Hot reload can be useful locally, but production services should make configuration change semantics deliberate and observable.
