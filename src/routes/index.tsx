import { createFileRoute } from '@tanstack/react-router';
import {
  ArrowRight,
  BookOpenText,
  Braces,
  CheckCircle2,
  FileCode2,
  Gauge,
  GitBranch,
  GitFork,
  Radio,
  ShieldCheck,
  TerminalSquare,
} from 'lucide-react';
import { MarketingLayout } from '@/components/marketing-layout';
import { pageHead, siteConfig } from '@/lib/site-config';

export const Route = createFileRoute('/')({
  head: () => pageHead('EchoNext', siteConfig.description),
  component: Home,
});

const features = [
  [ShieldCheck, 'Typed by default', 'Request and response structs become the contract. Handler signatures stay explicit and compiler-friendly.'],
  [FileCode2, 'OpenAPI from code', 'Generate an OpenAPI 3 specification from the same routes and Go types that serve production traffic.'],
  [CheckCircle2, 'Validation included', 'Use familiar struct tags and receive consistent validation failures before business logic runs.'],
  [TerminalSquare, 'CLI workflows', 'Scaffold a project, generate a domain, and run dev builds without inventing a layout first.'],
  [Radio, 'Beyond REST', 'Build file uploads, WebSocket hubs, and gqlgen-backed GraphQL endpoints with Echo context access.'],
  [Gauge, 'Production helpers', 'Opt into testing, database, config, metrics, request IDs, and OpenTelemetry contrib packages.'],
] as const;

function Home() {
  return (
    <MarketingLayout>
      <div>
        <section className="home-hero site-container">
          <div className="hero-copy">
            <p className="eyebrow">Open source · Go · Echo</p>
            <h1>
              Structure, not <span>boilerplate.</span>
            </h1>
            <p className="hero-lede">
              EchoNext gives Echo a project layout, typed handlers, and generated OpenAPI—so every service starts clean and stays that way.
            </p>
            <div className="button-row">
              <a className="button button-primary" href="/docs">
                Start building <ArrowRight size={17} />
              </a>
              <a className="button button-secondary" href={siteConfig.repository} target="_blank" rel="noreferrer">
                <GitFork size={17} /> View source
              </a>
            </div>
            <div className="install-command" aria-label="Installation command">
              <span>$</span> go get github.com/abdussamadbello/echonext@{siteConfig.stableVersion}
            </div>
          </div>

          <div className="code-window" aria-label="EchoNext handler example">
            <div className="window-bar">
              <span className="window-dot" />
              <span className="window-dot" />
              <span className="window-dot" />
              <span className="window-name">api/users.go</span>
            </div>
            <pre>
              <code>
                <span className="code-blue">type</span> CreateUser <span className="code-blue">struct</span> {'{'}{`\n`}
                {'  '}Name <span className="code-gold">string</span> <span className="code-green">{`\`json:"name" validate:"required,min=2"\``}</span>{`\n`}
                {'  '}Email <span className="code-gold">string</span> <span className="code-green">{`\`json:"email" validate:"required,email"\``}</span>{`\n`}
                {'}'}{`\n\n`}
                <span className="code-blue">func</span> createUser(c echo.Context, req CreateUser) (User, <span className="code-gold">error</span>) {'{'}{`\n`}
                {'  '}<span className="code-muted">// req is already bound and validated</span>{`\n`}
                {'  '}<span className="code-blue">return</span> users.Create(req){`\n`}
                {'}'}{`\n\n`}
                app.POST(<span className="code-green">&quot;/users&quot;</span>, createUser, echonext.Route{'{'}{`\n`}
                {'  '}Summary: <span className="code-green">&quot;Create a user&quot;</span>,{`\n`}
                {'  '}SuccessStatus: <span className="code-gold">201</span>,{`\n`}
                {'}'})
              </code>
            </pre>
          </div>
        </section>

        <section className="proof-strip" aria-label="Project highlights">
          <div className="proof-grid site-container">
            <div className="proof-item"><strong>Echo compatible</strong><span>middleware + context</span></div>
            <div className="proof-item"><strong>OpenAPI 3.0</strong><span>generated automatically</span></div>
            <div className="proof-item"><strong>MIT licensed</strong><span>open by default</span></div>
            <div className="proof-item"><strong>{siteConfig.stableVersion}</strong><span>latest stable docs</span></div>
          </div>
        </section>

        <section className="section site-container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Decided for you</p>
              <h2>The patterns come with it.</h2>
            </div>
            <p>Project layout, binding, validation, responses, and documentation all follow one set of conventions. You write the endpoints that are actually yours.</p>
          </div>
          <div className="feature-grid">
            {features.map(([Icon, title, description], index) => (
              <article className="feature-card" key={title}>
                <span className="feature-number">0{index + 1}</span>
                <Icon />
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section section-muted">
          <div className="site-container">
            <div className="section-heading">
              <div>
                <p className="eyebrow">Keep Echo. Skip the plumbing.</p>
                <h2>Progressive, not prescriptive.</h2>
              </div>
              <p>Wrap the routes that benefit from a typed contract and keep using standard Echo middleware, groups, context methods, static assets, and error handling everywhere else.</p>
            </div>
            <div className="workflow">
              <div className="workflow-panel">
                <span className="workflow-label">By hand</span>
                <h3>Every endpoint repeats itself</h3>
                <ul className="workflow-list">
                  <li>Bind request payloads manually</li>
                  <li>Invoke validation by hand</li>
                  <li>Maintain schemas separately</li>
                  <li>Repeat response envelopes</li>
                </ul>
              </div>
              <div className="workflow-arrow"><ArrowRight /></div>
              <div className="workflow-panel highlight">
                <span className="workflow-label">With EchoNext</span>
                <h3>The framework carries it</h3>
                <ul className="workflow-list">
                  <li>Declare request and response structs</li>
                  <li>Register a typed handler</li>
                  <li>Generate and serve OpenAPI</li>
                  <li>Keep the complete Echo surface</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section site-container">
          <div className="section-heading">
            <div><p className="eyebrow">A practical toolkit</p><h2>From route to runtime.</h2></div>
            <p>Start with the core wrapper. Add only the integrations and contrib packages your service actually needs.</p>
          </div>
          <div className="card-grid">
            <a className="content-card" href="/docs/getting-started/quickstart"><span className="card-icon"><BookOpenText /></span><h3>Five-minute quickstart</h3><p>Build a validated Todo API and inspect its generated Swagger UI.</p><span className="card-link">Read the guide <ArrowRight size={15} /></span></a>
            <a className="content-card" href="/examples"><span className="card-icon"><Braces /></span><h3>Runnable examples</h3><p>Explore REST, GraphQL, uploads, WebSockets, observability, and production project patterns.</p><span className="card-link">Browse examples <ArrowRight size={15} /></span></a>
            <a className="content-card" href="/roadmap"><span className="card-icon"><GitBranch /></span><h3>Built in the open</h3><p>See what is stable, what is being explored, and where community feedback can help.</p><span className="card-link">View roadmap <ArrowRight size={15} /></span></a>
          </div>
        </section>

        <section className="section site-container">
          <div className="cta-panel">
            <p className="eyebrow">Your next service</p>
            <h2>Start structured. Stay that way.</h2>
            <p>Install the stable release, scaffold a project, and register your first typed route.</p>
            <div className="button-row">
              <a className="button button-primary" href="/docs/getting-started/installation">Install EchoNext <ArrowRight size={17} /></a>
              <a className="button button-secondary" href={siteConfig.repository}>Star on GitHub <GitFork size={17} /></a>
            </div>
          </div>
        </section>
      </div>
    </MarketingLayout>
  );
}
