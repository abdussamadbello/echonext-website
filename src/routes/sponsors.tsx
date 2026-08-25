import { createFileRoute } from '@tanstack/react-router';
import { ArrowRight, HeartHandshake, Sparkles, UsersRound } from 'lucide-react';
import { MarketingLayout, PageHero } from '@/components/marketing-layout';
import { pageHead } from '@/lib/site-config';

export const Route = createFileRoute('/sponsors')({
  head: () => pageHead('Sponsors', 'Recognizing the people who help sustain EchoNext.', '/sponsors'),
  component: Sponsors,
});

function Sponsors() {
  return (
    <MarketingLayout>
      <div>
        <PageHero eyebrow="Sustain the project" title="Recognition starts with contribution." description="A formal funding program is not open yet. For now, this page recognizes the time, care, reports, reviews, and code that move EchoNext forward." />
        <section className="content-section site-container">
          <div className="card-grid">
            <article className="content-card"><span className="card-icon"><UsersRound /></span><h2>Contributors</h2><p>Code, tests, documentation, issue triage, and thoughtful review are the foundation of a reliable open-source project.</p></article>
            <article className="content-card"><span className="card-icon"><Sparkles /></span><h2>Early adopters</h2><p>Real services expose rough edges and missing patterns that example applications cannot reveal on their own.</p></article>
            <article className="content-card"><span className="card-icon"><HeartHandshake /></span><h2>Future partners</h2><p>When a transparent funding channel is ready, sponsorship options and recognition criteria will be published here.</p></article>
          </div>
          <div className="cta-panel" style={{ marginTop: '4rem' }}>
            <h2>The most useful support today is a specific signal.</h2>
            <p>Try the stable release, report what blocks you, improve a guide, or help another user in Discussions.</p>
            <div className="button-row"><a className="button button-primary" href="/community">Join the community <ArrowRight size={17} /></a></div>
          </div>
        </section>
      </div>
    </MarketingLayout>
  );
}
