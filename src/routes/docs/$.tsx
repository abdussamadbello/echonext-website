import { createFileRoute, notFound } from '@tanstack/react-router';
import { createServerFn } from '@tanstack/react-start';
import { useFumadocsLoader } from 'fumadocs-core/source/client';
import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import {
  DocsBody,
  DocsDescription,
  DocsPage,
  DocsTitle,
  MarkdownCopyButton,
  ViewOptionsPopover,
} from 'fumadocs-ui/layouts/docs/page';
import { Suspense, use } from 'react';
import { useMDXComponents } from '@/components/mdx';
import { baseOptions } from '@/lib/layout.shared';
import { docs, source } from '@/lib/source';
import { encodeMarkdownUrl, gitConfig } from '@/lib/shared';
import { pageHead, siteConfig } from '@/lib/site-config';

type DocsLoaderData = {
  path: string;
  url: string;
  title: string;
  description?: string;
  markdownUrl: string;
  pageTree: Awaited<ReturnType<typeof source.serializePageTree>>;
};

export const Route = createFileRoute('/docs/$')({
  component: Page,
  head: () => pageHead('Documentation', 'Stable EchoNext guides, examples, architecture, and API reference.', '/docs'),
  loader: async ({ params }) => {
    const slugs = params._splat?.split('/').filter(Boolean) ?? [];
    const data = (await serverLoader({ data: slugs })) as DocsLoaderData;
    await docs.getPage(data.path)?.preload();
    return data;
  },
});

const serverLoader = createServerFn({ method: 'GET' })
  .validator((slugs: string[]) => slugs)
  .handler(async ({ data: slugs }) => {
    const page = source.getPage(slugs);
    if (!page) throw notFound();
    return {
      path: page.path,
      url: page.url,
      title: page.data.title,
      description: page.data.description,
      markdownUrl: encodeMarkdownUrl(page.slugs, page.locale),
      pageTree: await source.serializePageTree(source.getPageTree()),
    };
  });

function Content({ path, markdownUrl }: { path: string; markdownUrl: string }) {
  const page = docs.getPage(path);
  if (!page) throw new Error(`Unknown documentation page: ${path}`);
  const { toc } = use(page.load());
  const Body = page.body;

  return (
    <DocsPage toc={toc} id="main-content">
      <div className="docs-version-line"><span>Stable</span> {siteConfig.stableVersion}</div>
      <DocsTitle>{page.title}</DocsTitle>
      <DocsDescription>{page.description}</DocsDescription>
      <div className="flex flex-row gap-2 items-center border-b -mt-4 pb-6">
        <MarkdownCopyButton markdownUrl={markdownUrl} />
        <ViewOptionsPopover
          markdownUrl={markdownUrl}
          githubUrl={`https://github.com/${gitConfig.user}/${gitConfig.repo}/blob/${gitConfig.branch}/content/docs/${path}`}
        />
      </div>
      <DocsBody><Body components={useMDXComponents()} /></DocsBody>
    </DocsPage>
  );
}

function Page() {
  const loaderData = Route.useLoaderData() as DocsLoaderData;
  const { path, pageTree, markdownUrl } = useFumadocsLoader(loaderData);
  return (
    <DocsLayout {...baseOptions()} tree={pageTree}>
      <Suspense><Content path={path} markdownUrl={markdownUrl} /></Suspense>
    </DocsLayout>
  );
}
