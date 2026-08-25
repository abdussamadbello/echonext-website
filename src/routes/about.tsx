import { createFileRoute } from '@tanstack/react-router';
import { ArrowUpRight, Code2, FileCheck2, Layers3 } from 'lucide-react';
import { MarketingLayout, PageHero } from '@/components/marketing-layout';
import { pageHead, siteConfig } from '@/lib/site-config';

export const Route = createFileRoute('/about')({
  head: () => pageHead('About', 'Why EchoNext exists and the principles behind its typed approach to Echo APIs.', '/about'),
  component: About,
});

function About() {
  return (
    <MarketingLayout>
      <div>
        <PageHero eyebrow="Why EchoNext" title="Keep the speed. Strengthen the boundary." description="Echo is an excellent HTTP foundation. EchoNext focuses on the repetitive contract work around it: binding, validation, response shapes, and OpenAPI documentation." />
        <section className="content-section site-container">
          <div className="card-grid">
            <article className="content-card"><span className="card-icon"><Code2 /></span><h2>Types should do real work</h2><p>A request struct should guide the compiler, validate incoming data, and describe the public API—not be copied into several parallel formats.</p></article>
            <article className="content-card"><span className="card-icon"><Layers3 /></span><h2>Adoption should be gradual</h2><p>Typed routes and standard Echo handlers can coexist. Teams choose the abstraction where it improves clarity.</p></article>
            <article className="content-card"><span className="card-icon"><FileCheck2 /></span><h2>Documentation should agree</h2><p>Generated OpenAPI is valuable because it is derived from the same route declarations and types that run the service.</p></article>
          </div>
          <div className="prose-grid">
            <h2>Project principles</h2>
            <div className="prose-copy">
              <h3>Echo remains visible</h3><p>EchoNext embeds the Echo application. Its middleware ecosystem, context, groups, error handling, server options, and escape hatches remain part of the development model.</p>
              <h3>Core first, contrib by choice</h3><p>The central package handles typed HTTP contracts. Database, configuration, middleware, observability, and testing helpers remain optional contrib packages.</p>
              <h3>Open development</h3><p>Source, issues, discussions, examples, documentation, and the roadmap are public under the MIT license.</p>
              <a className="button button-primary" href={siteConfig.repository} target="_blank" rel="noreferrer">Explore the repository <ArrowUpRight size={17} /></a>
            </div>
          </div>
        </section>
      </div>
    </MarketingLayout>
  );
}
