export const docsRoute = '/docs';

export const gitConfig = {
  user: 'abdussamadbello',
  repo: 'echonext-website',
  branch: 'main',
} as const;

export function encodeMarkdownUrl(slugs: string[], locale?: string) {
  const segments = [...slugs];
  if (segments.length === 0) segments.push('index.md');
  else segments[segments.length - 1] += '.md';

  return '/' + [locale, ...docsRoute.split('/'), ...segments].filter(Boolean).join('/');
}

export function decodeMarkdownUrl(segments: string[]) {
  if (segments.length === 0) return [];
  const output = [...segments];
  const last = output.at(-1);
  if (last) output[output.length - 1] = last.replace(/\.md$/, '');
  if (output.length === 1 && output[0] === 'index') output.pop();
  return output;
}
