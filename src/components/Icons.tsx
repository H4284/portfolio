import { type ReactNode } from 'react';

const icons: Record<string, ReactNode> = {
  puzzle: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path d="M11 4a2 2 0 114 0v1h1a2 2 0 110 4h-1v1a2 2 0 11-4 0V9H9a2 2 0 110-4h2V4z" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M6 14a2 2 0 100 4 2 2 0 000-4zm12 0a2 2 0 100 4 2 2 0 000-4z" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 14v4M10 18h4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  rocket: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path d="M4.5 16.5c-1-4.5 1.5-9 6-11.5 4.5 2.5 7 7 6 11.5M12 15l-3 3m3-3l3 3m-3-3v4.5" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="12" cy="9" r="2" />
    </svg>
  ),
  server: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <rect x="2" y="3" width="20" height="6" rx="1.5" />
      <rect x="2" y="15" width="20" height="6" rx="1.5" />
      <circle cx="6" cy="6" r="1" fill="currentColor" />
      <circle cx="6" cy="18" r="1" fill="currentColor" />
    </svg>
  ),
  shield: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path d="M12 2l8 4v6c0 5.25-3.5 9.74-8 11-4.5-1.26-8-5.75-8-11V6l8-4z" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
};

export function StrengthIcon({ icon }: { icon: string }) {
  return <span className="strength-card__icon">{icons[icon] ?? icons.puzzle}</span>;
}

export { icons };
