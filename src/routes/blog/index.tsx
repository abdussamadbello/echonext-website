import { createFileRoute } from '@tanstack/react-router';
import { ArrowRight } from 'lucide-react';
import { MarketingLayout, PageHero } from '@/components/marketing-layout';
import { getBlogPosts } from '@/lib/source';
import { pageHead } from '@/lib/site-config';

export const Route = createFileRoute('/blog/')({
  head: () => pageHead('Blog', 'Release notes, design decisions, guides, and lessons from building EchoNext.', '/blog'),
  component: Blog,
});

function Blog() {
  const posts = getBlogPosts();
  return (
    <MarketingLayout>
      <div>
        <PageHero eyebrow="Project notes" title="The thinking behind the types." description="Release context, implementation choices, and practical patterns for building APIs that remain understandable as they grow." />
        <section className="content-section site-container">
          <div className="blog-list">
            {posts.map((post) => (
              <a className="blog-row" href={`/blog/${post.slug}`} key={post.slug}>
                <time className="blog-date" dateTime={post.date}>{new Date(`${post.date}T00:00:00Z`).toLocaleDateString('en', { year: 'numeric', month: 'short', day: 'numeric', timeZone: 'UTC' })}</time>
                <div><h2>{post.title}</h2><p>{post.description}</p></div>
                <ArrowRight size={18} />
              </a>
            ))}
          </div>
        </section>
      </div>
    </MarketingLayout>
  );
}
