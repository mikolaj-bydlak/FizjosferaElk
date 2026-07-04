'use client';

import { useState } from 'react';
import { LINKS, NAV_ITEMS } from '../app/site';

/**
 * Top navigation with the single piece of client state on the page:
 * `menuOpen` drives the mobile hamburger dropdown (shown ≤820px via CSS).
 * Each link click closes the menu.
 */
export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const close = () => setMenuOpen(false);

  return (
    <nav className="nav" aria-label="Główna nawigacja">
      <a className="lnk nav-wordmark" href="#top">
        FIZJOSFERA
      </a>

      <div
        id="nav-menu"
        className={`nav-links${menuOpen ? ' open' : ''}`}
      >
        {NAV_ITEMS.map((item) => (
          <a
            key={item.href}
            className="lnk nav-link"
            href={item.href}
            onClick={close}
          >
            {item.label}
          </a>
        ))}
      </div>

      <div className="nav-actions">
        <a
          className="btn btn--primary nav-cta"
          href={LINKS.booksy}
          target="_blank"
          rel="noopener"
        >
          Rezerwuj
        </a>
        <button
          className="nav-toggle"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Menu"
          aria-expanded={menuOpen}
          aria-controls="nav-menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </nav>
  );
}
