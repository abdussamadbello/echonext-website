import { cloudflare } from '@cloudflare/vite-plugin';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { tanstackStart } from '@tanstack/react-start/plugin/vite';
import { fumadocsMdx } from 'fumadocs-mdx/vite';
import { defineConfig } from 'vite';

export default defineConfig({
  server: { port: 3000 },
  environments: {
    ssr: {
      optimizeDeps: {
        include: ['react-dom/server', 'fumadocs-mdx/runtime/macro'],
      },
    },
  },
  plugins: [
    fumadocsMdx(),
    tailwindcss(),
    cloudflare({ viteEnvironment: { name: 'ssr' } }),
    tanstackStart(),
    react(),
  ],
  resolve: {
    tsconfigPaths: true,
    alias: { tslib: 'tslib/tslib.es6.js' },
  },
});
