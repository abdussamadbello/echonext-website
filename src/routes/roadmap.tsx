import { createFileRoute } from '@tanstack/react-router';
import { ArrowUpRight, Check, CircleDashed, Compass } from 'lucide-react';
import { MarketingLayout, PageHero } from '@/components/marketing-layout';
import { pageHead, siteConfig } from '@/lib/site-config';

export const Route = createFileRoute('/roadmap')({
  head: () => pageHead('Roadmap', 'Stable EchoNext capabilities and the areas being explored next.', '/roadmap'),
  component: Roadmap,
});

const columns = [
  ['Stable now', Check, ['Typed REST handlers', 'OpenAPI and Swagger UI', 'Request validation', 'CLI scaffolding and generators', 'Uploads, WebSockets, and GraphQL', 'Database, config, testing, and observability contrib packages']],
  ['Preparing next', CircleDashed, ['Echo v5 compatibility', 'Go 1.26 baseline', 'Updated project templates', 'Dependency and generated-code upgrades', 'Stable documentation migration']],
  ['Exploring', Compass, ['Custom generator templates', 'Server-Sent Events', 'Background jobs and caching', 'Schema-driven CRUD generation', 'Additional protocol and messaging integrations']],
] as const;

function Roadmap() {
  return (
    <MarketingLayout>
      <div>
        <PageHero eyebrow="Direction, not a deadline" title="A roadmap shaped by working services." description="Items beyond the stable column are areas of intent and exploration. Scope and order change as maintainers learn from real use cases and contribution capacity." />
        <section className="content-section site-container">
          <div className="card-grid">
            {columns.map(([title, Icon, items]) => (
              <article className="content-card" key={title}>
                <span className="card-icon"><Icon /></span><h2>{title}</h2>
                <ul className="workflow-list">{items.map((item) => <li key={item}>{item}</li>)}</ul>
              </article>
            ))}
          </div>
          <div className="cta-panel" style={{ marginTop: '4rem' }}>
            <h2>Make the next item concrete.</h2>
            <p>Feature requests are most useful when they include the service context, desired API, constraints, and a minimal example.</p>
            <div className="button-row"><a className="button button-primary" href={siteConfig.discussions} target="_blank" rel="noreferrer">Start a discussion <ArrowUpRight size={17} /></a></div>
          </div>
        </section>
      </div>
    </MarketingLayout>
  );
}
