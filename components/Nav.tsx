'use client';

import { useEffect, useRef, useState } from 'react';
import { LINKS, NAV_ITEMS, asset } from '../app/site';

/**
 * Top navigation with the single piece of client state on the page:
 * `menuOpen` drives the mobile menu (shown ≤820px via CSS) — a full-width
 * beige panel that slides down from the top of the viewport with an X close
 * button. Opening locks body scroll; Escape and any link click close it.
 *
 * `home` (default true): on the home page the section links are same-page
 * anchors (`#uslugi`). On other routes (e.g. /regulamin) they point back to
 * the home page (`/#uslugi`, basePath-aware) so the nav works everywhere.
 */
export default function Nav({ home = true }: { home?: boolean }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeBtnRef = useRef<HTMLButtonElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const close = () => setMenuOpen(false);

  const base = home ? '' : asset('/');
  const wordmarkHref = home ? '#top' : base;
  const linkHref = (h: string) => `${base}${h}`;

  useEffect(() => {
    if (!menuOpen) return;

    closeBtnRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    document.addEventListener('keydown', onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
      toggleRef.current?.focus();
    };
  }, [menuOpen]);

  return (
    <nav className="nav" aria-label="Główna nawigacja">
      <a className="lnk nav-wordmark" href={wordmarkHref}>
        FIZJOSFERA
      </a>

      <div id="nav-menu" className={`nav-links${menuOpen ? ' open' : ''}`}>
        <button
          ref={closeBtnRef}
          className="nav-close"
          onClick={close}
          aria-label="Zamknij menu"
        >
          <span />
          <span />
        </button>
        {NAV_ITEMS.map((item) => (
          <a
            key={item.href}
            className="lnk nav-link"
            href={linkHref(item.href)}
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
          ref={toggleRef}
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
