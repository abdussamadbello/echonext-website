import { HomeLayout } from 'fumadocs-ui/layouts/home';
import type { ReactNode } from 'react';
import { baseOptions } from '@/lib/layout.shared';
import { SiteFooter } from './site-footer';

export function MarketingLayout({ children }: { children: ReactNode }) {
  return (
    <HomeLayout {...baseOptions()} id="main-content" className="marketing-shell">
      {children}
      <SiteFooter />
    </HomeLayout>
  );
}

export function PageHero({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return (
    <header className="page-hero site-container">
      <p className="eyebrow">{eyebrow}</p>
      <h1>{title}</h1>
      <p className="page-lede">{description}</p>
    </header>
  );
}
