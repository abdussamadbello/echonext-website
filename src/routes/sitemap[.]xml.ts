import { createFileRoute } from '@tanstack/react-router';
import { getBlogPosts, source } from '@/lib/source';
import { absoluteUrl, marketingRoutes } from '@/lib/site-config';
import { escapeXml } from '@/lib/xml';

export const Route = createFileRoute('/sitemap.xml')({
  server: {
    handlers: {
      GET: () => {
        const urls = [
          ...marketingRoutes,
          ...source.getPages().map((page) => page.url),
          ...getBlogPosts().map((post) => `/blog/${post.slug}`),
        ];
        const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${[...new Set(urls)].map((url) => `  <url><loc>${escapeXml(absoluteUrl(url))}</loc></url>`).join('\n')}\n</urlset>`;
        return new Response(body, { headers: { 'Content-Type': 'application/xml; charset=utf-8', 'Cache-Control': 'public, max-age=3600' } });
      },
    },
  },
});
