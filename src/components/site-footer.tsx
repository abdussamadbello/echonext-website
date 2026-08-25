import { ArrowUpRight } from 'lucide-react';
import { Logo } from './logo';
import { siteConfig } from '@/lib/site-config';

const columns = [
  {
    title: 'Build',
    links: [
      ['Documentation', '/docs'],
      ['Examples', '/examples'],
      ['Agent skills', '/skills'],
      ['Compare', '/compare'],
      ['Changelog', '/changelog'],
    ],
  },
  {
    title: 'Project',
    links: [
      ['About', '/about'],
      ['Roadmap', '/roadmap'],
      ['Community', '/community'],
      ['Sponsors', '/sponsors'],
    ],
  },
] as const;

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer-grid">
        <div className="footer-intro">
          <Logo />
          <p>Type-safe APIs for Go, powered by Echo and documented by your code.</p>
        </div>
        {columns.map((column) => (
          <div key={column.title}>
            <p className="footer-label">{column.title}</p>
            <ul className="footer-links">
              {column.links.map(([label, href]) => (
                <li key={href}>
                  <a href={href}>{label}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div>
          <p className="footer-label">Open source</p>
          <a className="footer-github" href={siteConfig.repository} target="_blank" rel="noreferrer">
            View on GitHub <ArrowUpRight size={15} />
          </a>
          <p className="footer-small">MIT licensed · Stable {siteConfig.stableVersion}</p>
        </div>
      </div>
      <div className="footer-bottom">
        <span>Built in the open.</span>
        <span>© {new Date().getFullYear()} EchoNext contributors.</span>
      </div>
    </footer>
  );
}
