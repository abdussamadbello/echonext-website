import { createFileRoute } from '@tanstack/react-router';
import { getBlogPosts } from '@/lib/source';
import { absoluteUrl, siteConfig } from '@/lib/site-config';
import { escapeXml } from '@/lib/xml';

export const Route = createFileRoute('/rss.xml')({
  server: {
    handlers: {
      GET: () => {
        const items = getBlogPosts().map((post) => `\n<item><title>${escapeXml(post.title)}</title><description>${escapeXml(post.description)}</description><link>${absoluteUrl(`/blog/${post.slug}`)}</link><guid>${absoluteUrl(`/blog/${post.slug}`)}</guid><pubDate>${new Date(`${post.date}T00:00:00Z`).toUTCString()}</pubDate></item>`).join('');
        const xml = `<?xml version="1.0" encoding="UTF-8"?><rss version="2.0"><channel><title>${siteConfig.name}</title><description>${escapeXml(siteConfig.description)}</description><link>${siteConfig.url}</link>${items}</channel></rss>`;
        return new Response(xml, { headers: { 'Content-Type': 'application/rss+xml; charset=utf-8', 'Cache-Control': 'public, max-age=3600' } });
      },
    },
  },
});
