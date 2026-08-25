import { createRootRoute, HeadContent, Outlet, Scripts } from '@tanstack/react-router';
import { RootProvider } from 'fumadocs-ui/provider/tanstack';
import appCss from '@/styles/app.css?url';
import { siteConfig } from '@/lib/site-config';

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { title: siteConfig.title },
      { name: 'description', content: siteConfig.description },
    ],
    links: [
      { rel: 'stylesheet', href: appCss },
      { rel: 'icon', href: '/favicon.svg', type: 'image/svg+xml' },
      { rel: 'manifest', href: '/site.webmanifest' },
    ],
  }),
  component: RootComponent,
});

function RootComponent() {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body>
        <a className="skip-link" href="#main-content">Skip to content</a>
        <RootProvider>
          <Outlet />
        </RootProvider>
        <Scripts />
      </body>
    </html>
  );
}
