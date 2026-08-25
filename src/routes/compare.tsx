import { createFileRoute } from '@tanstack/react-router';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { MarketingLayout, PageHero } from '@/components/marketing-layout';
import { pageHead } from '@/lib/site-config';

export const Route = createFileRoute('/compare')({
  head: () => pageHead('Compare', 'See what EchoNext adds to Echo and where standard Echo remains the right fit.', '/compare'),
  component: Compare,
});

const rows = [
  ['Handler contract', 'Flexible Echo handler functions', 'Typed request and response signatures'],
  ['Request binding', 'Explicit c.Bind calls', 'Automatic binding from handler types'],
  ['Validation', 'Configure and invoke validation', 'Struct tags validated before business logic'],
  ['OpenAPI', 'Maintain separately or add tooling', 'Generated from registered typed routes'],
  ['Response shape', 'Serialize each response explicitly', 'Consistent generic response envelope'],
  ['Echo ecosystem', 'Native', 'Retained through the wrapped Echo instance'],
] as const;

function Compare() {
  return (
    <MarketingLayout>
      <div>
        <PageHero eyebrow="Echo + a typed contract" title="An addition to Echo, not a replacement." description="EchoNext is useful when your HTTP boundary benefits from explicit request and response types. Standard Echo remains available for routes that need full manual control." />
        <section className="content-section site-container">
          <div className="comparison-table" role="table" aria-label="Echo and EchoNext comparison">
            <div className="comparison-row comparison-head" role="row"><div>Concern</div><div>Echo</div><div>EchoNext</div></div>
            {rows.map((row) => <div className="comparison-row" role="row" key={row[0]}>{row.map((cell) => <div role="cell" key={cell}>{cell}</div>)}</div>)}
          </div>
          <div className="prose-grid">
            <h2>When EchoNext fits</h2>
            <div className="prose-copy">
              <h3>Choose typed routes for public contracts</h3>
              <p>Request validation, stable response types, and generated API documentation are most valuable on endpoints consumed by other teams, SDKs, or third parties.</p>
              <h3>Keep standard Echo where flexibility wins</h3>
              <p>Use normal Echo handlers for unusual streaming responses, highly dynamic payloads, or endpoints where a generated schema would not improve the interface.</p>
              <h3>Mix both in one service</h3>
              <p>EchoNext wraps Echo rather than hiding it. Middleware, route groups, context methods, static serving, and ordinary handlers can live beside typed routes.</p>
              <a className="button button-primary" href="/docs/getting-started/concepts">Understand the core concepts <ArrowRight size={17} /></a>
            </div>
          </div>
          <div className="cta-panel">
            <CheckCircle2 size={32} color="#6ee7b7" />
            <h2>Adopt it one route at a time.</h2>
            <p>You do not need to rewrite an Echo application to start using typed endpoints.</p>
            <div className="button-row"><a className="button button-primary" href="/docs/getting-started/installation">Read the migration path <ArrowRight size={17} /></a></div>
          </div>
        </section>
      </div>
    </MarketingLayout>
  );
}
