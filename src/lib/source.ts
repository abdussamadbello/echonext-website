import { loader } from 'fumadocs-core/source';
import { lucideIconsPlugin } from 'fumadocs-core/source/lucide-icons';
import { defineCollections, defineDocs } from 'fumadocs-mdx/macro';
import { z } from 'zod';
import { docsRoute } from './shared';

export const docs = defineDocs({
  dir: 'content/docs',
  docs: {
    async: true,
    postprocess: { includeProcessedMarkdown: true },
  },
});

export const blog = defineCollections({
  type: 'doc',
  dir: 'content/blog',
  async: true,
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.string(),
    author: z.string(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

export const source = loader({
  source: docs.toFumadocsSource(),
  baseUrl: docsRoute,
  plugins: [lucideIconsPlugin()],
});

export function getBlogPosts() {
  return blog.entries
    .filter((post) => !post.draft)
    .map((post) => ({
      entry: post,
      slug: post.info.path.replace(/\.mdx?$/, ''),
      title: post.title,
      description: post.description,
      date: post.date,
      author: post.author,
      tags: post.tags,
    }))
    .toSorted((a, b) => b.date.localeCompare(a.date));
}

export async function getLLMText(page: (typeof source)['$inferPage']) {
  const processed = await page.data.getText('processed');
  return `# ${page.data.title} (${page.url})\n\n${processed}`;
}
