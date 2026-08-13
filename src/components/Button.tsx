import { type ReactNode, type ButtonHTMLAttributes } from 'react';
import './Button.css';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  href?: string;
  external?: boolean;
  children: ReactNode;
}

export function Button({
  variant = 'primary',
  href,
  external,
  children,
  className = '',
  ...props
}: ButtonProps) {
  const classes = `btn btn--${variant} ${className}`.trim();

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        {...(external
          ? { target: '_blank', rel: 'noopener noreferrer' }
          : {})}
      >
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
