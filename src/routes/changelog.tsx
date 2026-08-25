import { createFileRoute } from '@tanstack/react-router';
import { MarketingLayout, PageHero } from '@/components/marketing-layout';
import { pageHead } from '@/lib/site-config';

export const Route = createFileRoute('/changelog')({
  head: () => pageHead('Changelog', 'Published EchoNext releases and clearly labeled upcoming changes.', '/changelog'),
  component: Changelog,
});

const releases = [
  { version: 'v1.5.0', date: 'Stable', title: 'Echo v5, Go 1.26, and agent skills', body: 'Handlers now take *echo.Context, and the framework requires Go 1.26 and Echo v5.3.1. Adds eight agent skills for AI coding assistants, plus dependency upgrades across kin-openapi, validator, OpenTelemetry, and gqlgen.' },
  { version: 'v1.4.8', date: 'Previous', title: 'Final v1.4 release', body: 'The last release on Go 1.24 and Echo v4, before the v1.5 handler signature change.' },
  { version: 'v1.4.0', date: '2024-12-29', title: 'Realtime and integration release', body: 'Added typed file uploads, WebSocket support with a hub pattern, gqlgen integration, hot reload, enhanced testing, and OpenAPI-driven code generation.' },
  { version: 'v1.3.0', date: '2024-12-09', title: 'Database and testing utilities', body: 'Introduced Atlas migration workflows, database helpers, a fluent API test client, response assertions, and broader contrib coverage.' },
  { version: 'v1.0.0', date: '2024-12-01', title: 'Initial release', body: 'Shipped typed Echo handlers, automatic OpenAPI generation, validation, Swagger UI, CLI scaffolding, contrib packages, examples, and documentation.' },
] as const;

function Changelog() {
  return (
    <MarketingLayout>
      <div>
        <PageHero eyebrow="Release history" title="What changed—and what has not shipped yet." description="Stable documentation follows published Git tags. Work on the default branch is shown separately so install commands and API examples remain trustworthy." />
        <section className="content-section narrow-container">
          <div className="timeline">
            {releases.map((release) => (
              <article className="timeline-item" key={release.version}>
                <span className="timeline-date">{release.date}</span>
                <div className="timeline-content"><h2>{release.version} · {release.title}</h2><p>{release.body}</p></div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </MarketingLayout>
  );
}
