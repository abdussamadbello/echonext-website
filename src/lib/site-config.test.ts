import { describe, expect, it } from 'vitest';
import { absoluteUrl, pageHead, siteConfig } from './site-config';

describe('site metadata', () => {
  it('builds canonical URLs from the production origin', () => {
    expect(absoluteUrl('/docs')).toBe('https://echonext.dev/docs');
  });

  it('keeps the installable stable version explicit', () => {
    expect(siteConfig.stableVersion).toBe('v1.4.8');
  });

  it('creates a unique title and canonical link', () => {
    const head = pageHead('Examples', 'Example projects.', '/examples');
    expect(head.meta[0]).toEqual({ title: 'Examples — EchoNext' });
    expect(head.links[0]?.href).toBe('https://echonext.dev/examples');
  });
});
