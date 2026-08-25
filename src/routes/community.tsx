import { createFileRoute } from '@tanstack/react-router';
import { ArrowUpRight, CircleDot, GitPullRequestArrow, MessagesSquare, Milestone } from 'lucide-react';
import { MarketingLayout, PageHero } from '@/components/marketing-layout';
import { pageHead, siteConfig } from '@/lib/site-config';

export const Route = createFileRoute('/community')({
  head: () => pageHead('Community', 'Ask questions, propose features, improve documentation, and contribute to EchoNext.', '/community'),
  component: Community,
});

const paths = [
  [MessagesSquare, 'Start a discussion', 'Ask design questions, share a use case, or test an idea before opening a large change.', siteConfig.discussions],
  [CircleDot, 'Report an issue', 'Provide a small reproduction, expected behavior, and the versions of Go, Echo, and EchoNext.', siteConfig.issues],
  [GitPullRequestArrow, 'Contribute code', 'Pick a scoped issue, follow the contribution guide, and include focused tests with the change.', `${siteConfig.repository}/blob/main/docs/contributing/guide.md`],
  [Milestone, 'Shape the roadmap', 'React to feature requests and explain the real-world problem you want EchoNext to solve.', '/roadmap'],
] as const;

function Community() {
  return (
    <MarketingLayout>
      <div>
        <PageHero eyebrow="Built in public" title="Useful feedback beats silent assumptions." description="Whether you found a bug, need a pattern documented, or want to propose a new integration, start with the smallest artifact that makes the problem concrete." />
        <section className="content-section site-container">
          <div className="card-grid">
            {paths.map(([Icon, title, description, href]) => (
              <a className="content-card" href={href} key={title}>
                <span className="card-icon"><Icon /></span><h2>{title}</h2><p>{description}</p><span className="card-link">Open resource <ArrowUpRight size={15} /></span>
              </a>
            ))}
          </div>
          <div className="prose-grid">
            <h2>A good contribution</h2>
            <div className="prose-copy">
              <h3>Begins with context</h3><p>Describe the user-facing problem and constraints before prescribing a large implementation.</p>
              <h3>Stays focused</h3><p>Small pull requests are easier to review, test, document, and release safely.</p>
              <h3>Leaves the project clearer</h3><p>Tests and documentation are part of the feature whenever behavior or public interfaces change.</p>
            </div>
          </div>
        </section>
      </div>
    </MarketingLayout>
  );
}
