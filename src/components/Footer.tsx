import './Footer.css';
import { site } from '../data/content';

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <span className="footer__name">{site.fullName}</span>
          <p className="footer__tagline">{site.footerTagline}</p>
        </div>
        <nav className="footer__links" aria-label="Footer links">
          <a href={site.github} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href={site.linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href={`mailto:${site.email}`}>Email</a>
        </nav>
        <p className="footer__copy">{site.copyright}</p>
      </div>
    </footer>
  );
}
