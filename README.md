# Fizjosfera — one-page site

Marketing/business-profile site for **Fizjosfera**, a urogynecological physiotherapy
studio in Ełk, Poland (Katarzyna Marcinkowska-Kononowicz, mgr fizjoterapii).
Single `/` route, Polish copy, no backend.

## Stack

- **Next.js 16** (App Router) with **static export** (`output: 'export'` → `out/`)
- **React 19**, TypeScript
- Fonts: **Cormorant Garamond** + **Jost** via `next/font/google` (self-hosted at build, no runtime request)
- Plain CSS in [`app/globals.css`](app/globals.css) using design tokens as CSS custom properties

## Scripts

```bash
npm install
npm run dev      # dev server (http://localhost:3210 via .claude/launch.json, or default 3000)
npm run build    # production build → static export in out/
```

Deploy the contents of `out/` to any static host (Vercel, Netlify, GitHub Pages, S3, …).

## Deploy: Cloudflare Workers (fizjosferaelk.pl)

The site deploys as a **Cloudflare Worker with static assets** — no worker script and
**no secrets/keys in the repo** ([`wrangler.jsonc`](wrangler.jsonc) points at `out/`).

1. [Cloudflare dashboard](https://dash.cloudflare.com) → **Workers & Pages → Create application**
   → **Import a repository** → select this repo (branch: `main`).
2. Build settings:
   - **Build command:** `npm run build`
   - **Deploy command:** `npx wrangler deploy` (default)
3. After the first deploy: worker **Settings → Domains & Routes → Add → Custom Domain**
   → `fizjosferaelk.pl` (and `www.fizjosferaelk.pl`). Requires the domain's DNS to be
   managed by Cloudflare (set Cloudflare nameservers at the registrar); SSL is automatic.

Local check without deploying: `npm run build && npx wrangler deploy --dry-run`.

## Structure

| Path | Purpose |
|---|---|
| [`app/layout.tsx`](app/layout.tsx) | `<html lang="pl">`, fonts, metadata |
| [`app/page.tsx`](app/page.tsx) | All 9 sections (server component); section copy lives in local data arrays |
| [`app/globals.css`](app/globals.css) | Tokens, layout, per-section styling, responsive media queries |
| [`app/site.ts`](app/site.ts) | External links + nav items (single source of truth) |
| [`components/Nav.tsx`](components/Nav.tsx) | Top nav + mobile hamburger — the only client component (`menuOpen` state) |
| [`components/HeroBadge.tsx`](components/HeroBadge.tsx) | Inline circular SVG hero badge |
| `public/static/` | Photos (kasia, studio1–3) + logo |

## Sections

Hero → O mnie → Usługi → Gabinet → Cennik → Opinie → FAQ → Mapa/Dojazd → Kontakt (footer).

## Behavior

- **Anchor nav** with `scroll-behavior:smooth`.
- **Mobile menu** (only JS state): below **820px** the desktop links hide, a hamburger
  reveals a deep-green dropdown; each link click closes it.
- **FAQ**: native `<details>`/`<summary>` accordion, no JS. First item open.
- **Breakpoints**: 920 (about/opinie/map → 1 col, footer → 2 col), 820 (nav), 620
  (services/gallery/footer → 1 col, price rows drop the minutes column, map shorter).

## External links

Wired in [`app/site.ts`](app/site.ts): Booksy booking, Instagram, Facebook,
`tel:+48570033530`, Google Maps (link + embed). All external links open in a new tab
with `rel="noopener"`.

## Accessibility

Semantic landmarks (`header`/`nav`/`section`/`footer`), descriptive `alt` text,
`aria-expanded`/`aria-controls` on the menu toggle, visible focus outlines, decorative
star ratings marked `aria-hidden`.

## Not included (by design)

No analytics, cookie/consent banner, or contact form — these were intentionally left
out pending the owner's decision. Add if the client requires them.
