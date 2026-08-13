import { type ReactNode } from 'react';
import { FadeIn } from './FadeIn';

interface SectionHeadingProps {
  label: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  titleId?: string;
}

export function SectionHeading({
  label,
  title,
  subtitle,
  align = 'left',
  titleId,
}: SectionHeadingProps) {
  return (
    <FadeIn>
      <div className={`section-heading section-heading--${align}`}>
        <span className="section-label">{label}</span>
        <h2 id={titleId} className="section-title">{title}</h2>
        {subtitle && <p className="section-subtitle">{subtitle}</p>}
      </div>
    </FadeIn>
  );
}

interface SectionProps {
  id: string;
  children: ReactNode;
  className?: string;
  ariaLabelledBy?: string;
}

export function Section({
  id,
  children,
  className = '',
  ariaLabelledBy,
}: SectionProps) {
  return (
    <section
      id={id}
      className={`section ${className}`}
      aria-labelledby={ariaLabelledBy}
    >
      <div className="container">{children}</div>
    </section>
  );
}
