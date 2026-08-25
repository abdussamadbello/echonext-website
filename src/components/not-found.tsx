import { ArrowLeft, BookOpenText } from 'lucide-react';
import { MarketingLayout } from './marketing-layout';

export function NotFound() {
  return (
    <MarketingLayout>
      <section className="not-found site-container">
        <p className="error-code">404 / ROUTE_NOT_FOUND</p>
        <h1>This endpoint doesn’t exist.</h1>
        <p>The route may have moved, or the URL may be typed incorrectly.</p>
        <div className="button-row">
          <a className="button button-primary" href="/">
            <ArrowLeft size={17} /> Back home
          </a>
          <a className="button button-secondary" href="/docs">
            <BookOpenText size={17} /> Read the docs
          </a>
        </div>
      </section>
    </MarketingLayout>
  );
}
