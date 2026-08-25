import { createFileRoute } from '@tanstack/react-router';
import {
  ArrowRight,
  Boxes,
  Database,
  FileCode2,
  FlaskConical,
  Layers,
  Radio,
  ShieldCheck,
  TerminalSquare,
  Wrench,
} from 'lucide-react';
import { MarketingLayout, PageHero } from '@/components/marketing-layout';
import { pageHead, siteConfig } from '@/lib/site-config';

export const Route = createFileRoute('/skills')({
  head: () =>
    pageHead(
      'Agent Skills',
      'Install nine EchoNext agent skills so your AI coding assistant knows the framework’s conventions instead of guessing.',
      '/skills',
    ),
  component: Skills,
});

const skills = [
  ['echonext-cli', 'Scaffolding projects, generating code, and running the dev, build, test, and database commands.', TerminalSquare, ['CLI', 'Scaffolding']],
  ['echonext-domain', 'Adding a complete domain — model, service, handler, and DTO — in the conventional layout.', Boxes, ['Architecture']],
  ['echonext-handlers', 'Typed handlers, request structs, validation tags, and route registration.', ShieldCheck, ['Core', 'Routing']],
  ['echonext-database', 'GORM models, the generic Repository[T] pattern, and Atlas migrations and seeds.', Database, ['Data']],
  ['echonext-openapi-security', 'OpenAPI metadata, serving Swagger UI, and bearer, API key, OAuth2, and OIDC schemes.', FileCode2, ['OpenAPI', 'Auth']],
  ['echonext-middleware-config', 'Middleware registration and ordering, custom echo.MiddlewareFunc, and YAML or env config.', Layers, ['Middleware']],
  ['echonext-integrations', 'WebSocket hubs, gqlgen GraphQL wiring, and multipart file uploads.', Radio, ['Realtime', 'GraphQL']],
  ['echonext-testing', 'The APIClient, Suite, and FixtureManager helpers for testing handlers and services.', FlaskConical, ['Testing']],
  ['echonext-setup', 'Installing EchoNext or its skills in a repository, scoping a global install, and restoring from a lockfile.', Wrench, ['Setup']],
] as const;

const clients = [
  'Claude Code',
  'Cursor',
  'GitHub Copilot',
  'VS Code',
  'Gemini CLI',
  'OpenCode',
  'Codex',
  'Goose',
  'Amp',
  'Zed',
  'Kiro',
  'Roo Code',
];

function Skills() {
  return (
    <MarketingLayout>
      <div>
        <PageHero
          eyebrow="Agent skills"
          title="Your assistant already knows EchoNext."
          description="Nine skills teach AI coding agents how this framework is actually built — handler signatures, domain layout, migrations, and generated docs. One command, and the guessing stops."
        />

        <section className="content-section site-container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">One command</p>
              <h2>Install anywhere.</h2>
            </div>
            <p>
              The skills follow the open Agent Skills specification, so they are not tied to a single assistant.
              Install them for whichever agents you already use.
            </p>
          </div>

          <div className="install-command" aria-label="Install command for any agent">
            <span>$</span> npx skills add {siteConfig.repository.replace('https://github.com/', '')}
          </div>

          <div className="button-row">
            <a className="button button-primary" href="/docs/getting-started/agent-skills">
              Read the guide <ArrowRight size={17} />
            </a>
            <a className="button button-secondary" href="https://agentskills.io/clients" target="_blank" rel="noreferrer">
              See supported clients
            </a>
          </div>

          <div className="card-meta" style={{ marginTop: '2.25rem' }}>
            {clients.map((client) => (
              <span className="tag" key={client}>{client}</span>
            ))}
            <span className="tag">and 40+ more</span>
          </div>
        </section>

        <section className="section section-muted">
          <div className="site-container">
            <div className="section-heading">
              <div>
                <p className="eyebrow">What ships</p>
                <h2>Nine skills, loaded on demand.</h2>
              </div>
              <p>
                Each skill activates on its own when the task matches. Ask for a users endpoint and the domain
                skill loads; ask for a handler test and the testing skill does. Only the descriptions stay
                resident, so the cost of having them installed is small.
              </p>
            </div>
            <div className="card-grid">
              {skills.map(([name, description, Icon, tags]) => (
                <article className="content-card" key={name}>
                  <span className="card-icon"><Icon /></span>
                  <h3>{name}</h3>
                  <p>{description}</p>
                  <div className="card-meta">
                    {tags.map((tag) => <span className="tag" key={tag}>{tag}</span>)}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section site-container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Or start from scratch</p>
              <h2>Scaffold a project that is already briefed.</h2>
            </div>
            <p>
              The CLI can create a project and install its skills together. The lockfile is committed, so
              everyone who clones the repository — and every agent that works in it — gets the same set.
            </p>
          </div>

          <div className="install-command" aria-label="Scaffold command">
            <span>$</span> echonext init myapi --with-skills
          </div>

          <div className="button-row">
            <a className="button button-secondary" href="/docs/cli/init">
              CLI reference <ArrowRight size={17} />
            </a>
          </div>
        </section>

        <section className="section site-container">
          <div className="cta-panel">
            <p className="eyebrow">Stop re-explaining your framework</p>
            <h2>Install once. Build from a prompt.</h2>
            <p>
              With the skills in place, an agent can install the CLI, scaffold the project, generate a domain,
              and write the tests — following the conventions instead of inventing its own.
            </p>
            <div className="button-row">
              <a className="button button-primary" href="/docs/getting-started/agent-skills">
                Install the skills <ArrowRight size={17} />
              </a>
              <a className="button button-secondary" href={`${siteConfig.repository}/tree/main/skills`} target="_blank" rel="noreferrer">
                Read the source
              </a>
            </div>
          </div>
        </section>
      </div>
    </MarketingLayout>
  );
}
