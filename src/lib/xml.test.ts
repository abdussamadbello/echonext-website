import { describe, expect, it } from 'vitest';
import { escapeXml } from './xml';

describe('escapeXml', () => {
  it('escapes values used in generated feeds', () => {
    expect(escapeXml('EchoNext & <Go>')).toBe('EchoNext &amp; &lt;Go&gt;');
  });
});
