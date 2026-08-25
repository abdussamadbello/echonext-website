import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { BookOpenText, Boxes, GitCompareArrows, Newspaper, Sparkles } from 'lucide-react';
import { Logo } from '@/components/logo';
import { siteConfig } from './site-config';

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: <Logo />,
      url: '/',
      transparentMode: 'top',
    },
    links: [
      { text: 'Docs', url: '/docs', icon: <BookOpenText />, active: 'nested-url' },
      { text: 'Examples', url: '/examples', icon: <Boxes /> },
      { text: 'Skills', url: '/skills', icon: <Sparkles /> },
      { text: 'Compare', url: '/compare', icon: <GitCompareArrows /> },
      { text: 'Blog', url: '/blog', icon: <Newspaper /> },
    ],
    githubUrl: siteConfig.repository,
    searchToggle: { enabled: true },
    themeSwitch: { enabled: true, mode: 'light-dark-system' },
  };
}
