import './Navbar.css';
import { useState } from 'react';
import { navLinks, site } from '../data/content';
import { useNavbarCompact } from '../hooks/useNavbarCompact';

export function Navbar() {
  const isCompact = useNavbarCompact();
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      className={`navbar ${isCompact ? 'navbar--compact' : ''} ${menuOpen ? 'navbar--open' : ''}`}
    >
      <div className="container navbar__inner">
        <a href="#" className="navbar__logo" onClick={closeMenu}>
          <span className="navbar__logo-mark">&lt;/&gt;</span>
          <span>{site.name}</span>
        </a>

        <nav className="navbar__nav" aria-label="Main navigation">
          <ul className="navbar__links">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={closeMenu}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <button
          className="navbar__toggle"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <div className={`navbar__mobile ${menuOpen ? 'navbar__mobile--open' : ''}`}>
        <nav aria-label="Mobile navigation">
          <ul>
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={closeMenu}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
