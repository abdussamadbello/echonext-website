import { createFileRoute } from '@tanstack/react-router';
import { ArrowUpRight, Boxes, ChartNoAxesCombined, FileUp, ListChecks, Radio, ShoppingCart, Waypoints } from 'lucide-react';
import { MarketingLayout, PageHero } from '@/components/marketing-layout';
import { pageHead, siteConfig } from '@/lib/site-config';

export const Route = createFileRoute('/examples')({
  head: () => pageHead('Examples', 'Explore EchoNext projects from a first API to GraphQL, WebSockets, uploads, observability, and service architecture.', '/examples'),
  component: Examples,
});

const examples = [
  ['Quickstart', 'A compact Todo API for learning typed handlers, validation, and generated docs.', 'quickstart', ListChecks, ['Beginner', 'REST']],
  ['Todo API', 'CRUD patterns, status codes, path parameters, and predictable response handling.', 'todo-api', Boxes, ['Beginner', 'CRUD']],
  ['E-commerce API', 'A larger domain with transactions, repositories, and production-oriented structure.', 'ecommerce-api', ShoppingCart, ['Advanced', 'Database']],
  ['Microservice', 'Service boundaries, health checks, configuration, and observability-friendly layout.', 'microservice', Waypoints, ['Advanced', 'Architecture']],
  ['GraphQL demo', 'gqlgen integration with Echo context sharing and a GraphQL playground.', 'graphql-demo', ChartNoAxesCombined, ['Integration', 'GraphQL']],
  ['WebSocket demo', 'Real-time connections and broadcasting built around the included hub pattern.', 'websocket-demo', Radio, ['Integration', 'Realtime']],
  ['Upload demo', 'Multipart file handling, validation, persistence, and OpenAPI documentation.', 'upload-demo', FileUp, ['Integration', 'Files']],
] as const;

function Examples() {
  return (
    <MarketingLayout>
      <div>
        <PageHero eyebrow="Learn by building" title="Examples with a clear next step." description="Start small, then move through complete patterns for data, realtime features, integrations, and service architecture. Every example links to the source you can inspect and run." />
        <section className="content-section site-container">
          <div className="card-grid">
            {examples.map(([title, description, slug, Icon, tags]) => (
              <a className="content-card" href={`${siteConfig.repository}/tree/main/examples/${slug}`} target="_blank" rel="noreferrer" key={slug}>
                <span className="card-icon"><Icon /></span>
                <h2>{title}</h2>
                <p>{description}</p>
                <div className="card-meta">{tags.map((tag) => <span className="tag" key={tag}>{tag}</span>)}</div>
                <span className="card-link">Open source <ArrowUpRight size={15} /></span>
              </a>
            ))}
          </div>
        </section>
      </div>
    </MarketingLayout>
  );
}
