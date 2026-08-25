# EchoNext Website

The official website and documentation for [EchoNext](https://github.com/abdussamadbello/echonext), built with TanStack Start and Fumadocs and deployed to Cloudflare Workers.

## Development

```bash
pnpm install
pnpm dev
```

The local site runs at `http://localhost:3000`.

## Quality checks

```bash
pnpm check
pnpm test
pnpm build
pnpm deploy:dry
```

## Deployment

The Worker and `echonext.dev` custom domain are configured in `wrangler.jsonc`. Connect this repository to Cloudflare Workers Builds for production deployments from `main` and preview versions from pull requests. Enable Cloudflare Web Analytics for `echonext.dev` in the Cloudflare dashboard; the proxied custom domain uses automatic beacon injection, so no client-side analytics package or token is stored here.

```bash
pnpm deploy
```

The canonical production URL is [echonext.dev](https://echonext.dev).
