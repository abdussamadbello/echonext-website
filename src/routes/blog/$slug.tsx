import { createFileRoute, notFound } from '@tanstack/react-router';
import { DocsBody } from 'fumadocs-ui/layouts/docs/page';
import { use } from 'react';
import { MarketingLayout } from '@/components/marketing-layout';
import { useMDXComponents } from '@/components/mdx';
import { getBlogPosts } from '@/lib/source';
import { pageHead } from '@/lib/site-config';

export const Route = createFileRoute('/blog/$slug')({
  loader: async ({ params }) => {
    const post = getBlogPosts().find((item) => item.slug === params.slug);
    if (!post) throw notFound();
    await post.entry.preload();
    return { slug: post.slug };
  },
  head: ({ loaderData }) => {
    const post = getBlogPosts().find((item) => item.slug === loaderData?.slug);
    return post ? pageHead(post.title, post.description, `/blog/${post.slug}`) : {};
  },
  component: BlogPost,
});

function BlogPost() {
  const { slug } = Route.useLoaderData();
  const post = getBlogPosts().find((item) => item.slug === slug);
  if (!post) throw notFound();
  use(post.entry.load());
  const Body = post.entry.body;

  return (
    <MarketingLayout>
      <div>
        <header className="article-header narrow-container">
          <div className="article-meta"><time dateTime={post.date}>{post.date}</time><span>{post.author}</span>{post.tags.map((tag) => <span key={tag}>#{tag}</span>)}</div>
          <h1>{post.title}</h1><p className="article-description">{post.description}</p>
        </header>
        <article className="article-body narrow-container"><DocsBody><Body components={useMDXComponents()} /></DocsBody></article>
      </div>
    </MarketingLayout>
  );
}
