import type { ComponentProps } from 'react';
import { siteConfig } from '@/lib/site-config';

export function LogoMark({ className, ...props }: ComponentProps<'svg'>) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" aria-hidden="true" {...props}>
      <rect width="64" height="64" rx="16" fill="currentColor" className="text-ink" />
      <path
        d="M14 34h8l4-14 7 27 5-20 4 7h8"
        stroke="currentColor"
        className="text-mint"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Logo() {
  return (
    <span className="brand-lockup">
      <LogoMark className="brand-mark" />
      <span>EchoNext</span>
      <span className="brand-version">{siteConfig.stableVersion.split('.').slice(0, 2).join('.')}</span>
    </span>
  );
}
