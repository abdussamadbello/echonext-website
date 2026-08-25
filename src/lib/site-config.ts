export const siteConfig = {
  name: 'EchoNext',
  title: 'EchoNext — Structured, type-safe Go APIs',
  description:
    'Build structured Go APIs on Echo. EchoNext brings a project layout, typed handlers, validation, and OpenAPI generated from the same code.',
  url: 'https://echonext.dev',
  repository: 'https://github.com/abdussamadbello/echonext',
  websiteRepository: 'https://github.com/abdussamadbello/echonext-website',
  discussions: 'https://github.com/abdussamadbello/echonext/discussions',
  issues: 'https://github.com/abdussamadbello/echonext/issues',
  stableVersion: 'v1.5.0',
  upcomingVersion: 'v1.6.0',
} as const;

export const marketingRoutes = [
  '/',
  '/examples',
  '/skills',
  '/compare',
  '/about',
  '/community',
  '/sponsors',
  '/blog',
  '/changelog',
  '/roadmap',
] as const;

export function absoluteUrl(path = '/') {
  return new URL(path, siteConfig.url).toString();
}

export function pageHead(title: string, description: string, path = '/') {
  const fullTitle = title === siteConfig.name ? siteConfig.title : `${title} — ${siteConfig.name}`;
  const canonical = absoluteUrl(path);

  return {
    meta: [
      { title: fullTitle },
      { name: 'description', content: description },
      { property: 'og:title', content: fullTitle },
      { property: 'og:description', content: description },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: canonical },
      { property: 'og:image', content: absoluteUrl('/og.svg') },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: fullTitle },
      { name: 'twitter:description', content: description },
      { name: 'theme-color', content: '#0d1f19' },
    ],
    links: [{ rel: 'canonical', href: canonical }],
  };
}
