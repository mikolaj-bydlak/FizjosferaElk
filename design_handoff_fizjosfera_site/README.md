# Handoff: Fizjosfera Ełk — one-page business site

## Overview
A single-page marketing/business-profile website for **Fizjosfera**, a urogynecological physiotherapy studio in Ełk, Poland run by **Katarzyna Marcinkowska-Kononowicz** (mgr fizjoterapii). The site is in **Polish**. Its job: introduce the therapist, present services and pricing, show the studio and real client reviews, answer common questions, and drive bookings to Booksy / phone.

Sections in order: Hero → O mnie (about) → Usługi (services) → Gabinet (studio gallery) → Cennik (pricing) → Opinie (reviews) → FAQ → Mapa/Dojazd (map) → Kontakt (footer).

## About the Design Files
The file in this bundle (`Fizjosfera Elk.dc.html`) is a **design reference created in HTML** — a working prototype showing the intended look, layout, copy, and behavior. It is **not production code to ship directly**. It is authored in a proprietary "Design Component" runtime (custom `<x-dc>`/hole-templating + a `support.js` runtime), so it will **not** run as-is outside that environment.

**Your task:** recreate this design in the target codebase's environment using its established patterns. For a brand-new project, the recommended stack is **Next.js (App Router) + plain CSS/CSS-Modules or Tailwind**, statically exported — it's a static marketing page with no backend. Anything that renders static HTML/CSS works (Astro, Eleventy, vanilla HTML). Keep it a single route (`/`) with anchor navigation; no SPA routing needed.

Do **not** reuse the `.dc.html` templating, `support.js`, `image-slot.js`, or the `{{ hole }}` syntax — reimplement the markup as normal components/HTML.

## Fidelity
**High-fidelity (hifi).** Final colors, typography, spacing, copy, and imagery. Recreate pixel-closely. Exact tokens are listed below. The one piece of JS behavior is the mobile hamburger menu; everything else is static markup + CSS (including a native `<details>` accordion for the FAQ).

## Design Tokens

### Colors
| Token | Hex | Use |
|---|---|---|
| Green (primary) | `#4e6136` | Hero bg, Usługi bg, Cennik bg, buttons, section accents |
| Green deep | `#3a4a27` | Footer bg, mobile menu dropdown bg, dark headings |
| Green line | `#566b3f` | Footer divider |
| Cream (page) | `#f7f0e3` | Page background, light sections, primary button text-on-green |
| Cream text | `#f2e9d6` | Text/logo on green |
| Cream muted | `#e6dcc4` / `#dfd4bc` / `#c8d3b3` | Secondary text on green |
| Sand (panel) | `#e8ddc7` | Cennik arch panel, FAQ section bg |
| Sand line | `#cabf9f` / `#c6ba9a` / `#b7ac8f` | Hairline dividers |
| Card border | `#e4d8bf` | Review card borders |
| Ink | `#2e3320` | Primary heading text on light |
| Ink body | `#494534` / `#565039` | Body copy on light |
| Ink soft | `#6a6650` / `#8a8567` | Eyebrows, meta, muted labels |
| Olive accent | `#9aa77f` | Numerals, quote marks, small accents |
| Sage on green | `#c9bd9d` / `#a9ba8b` / `#8ea070` | Eyebrows/labels on green |
| Button ghost border (on green) | `#b9ad8d` | Outline buttons in hero |

### Typography
- **Display serif:** `'Cormorant Garamond'` (Google Fonts), weights 300/400/500/600 + italics. Used for the wordmark, all section `<h2>`, service/FAQ titles, prices, names, and italic pull-quotes.
- **Body/UI sans:** `'Jost'` (Google Fonts), weights 300/400/500/600. Used for body copy, eyebrows (uppercase + letter-spacing), nav, buttons, meta.
- Google Fonts import (already used):
  `https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,400;1,500&family=Jost:wght@300;400;500;600&display=swap`

Key type patterns:
- **Eyebrows:** Jost, 12px, `letter-spacing:5px`, `text-transform:uppercase`, color `#8a8567` (on light) / `#c9bd9d` (on green).
- **Section H2:** Cormorant Garamond, weight 400–500, `clamp(30px,4.6vw,46px)`, line-height ~1.05, color `#2e3320`.
- **Body:** Jost 300, 14–15.5px, line-height 1.8–1.9.
- **Pull-quote:** Cormorant Garamond italic, ~22px, color `#4e6136`.
- **Wordmark "FIZJO / SFERA":** Cormorant Garamond 500, `font-size:clamp(46px,11vw,82px)`, `letter-spacing:clamp(6px,2.4vw,14px)`, `line-height:.9`, `white-space:nowrap`, two stacked lines.
- **Sub-lockup "GABINET · FIZJOTERAPII":** Jost, `clamp(12px,2vw,15px)`, `letter-spacing:clamp(5px,1.6vw,9px)`.

### Spacing / layout
- Content container: `width:100%; max-width:1180px; margin:0 auto;` with horizontal padding `clamp(20px,5vw,64px)`.
- Section vertical padding: `clamp(64px,9vw,88–96px)` top and bottom.
- Grid gaps: `clamp(16px,1.8vw,26px)` (cards), `clamp(30px,5vw,56px)` (about).
- Border-radius: buttons/cards `2–4px`; **Cennik panel top arch** `clamp(140px,26vw,340px) clamp(140px,26vw,340px) 8px 8px` (huge top radii = arch, small bottom).

### Buttons
- **Primary (cream on green):** bg `#f2e9d6`, color `#4e6136`, Jost 500, 13px, `letter-spacing:2px`, uppercase, padding `15px 30px`, radius 2px. Hover: `opacity:.82`.
- **Primary inverse (green on light):** bg `#4e6136`, color `#f2e9d6`, same metrics.
- **Ghost (on green):** transparent, `1px solid #b9ad8d`, color `#f2e9d6`.

## Screens / Views
Single page, full-bleed colored bands, each with an inner max-1180px container. Section background rhythm alternates cream (`#f7f0e3`) and green (`#4e6136`), with sand (`#e8ddc7`) for Cennik panel + FAQ, and deep green (`#3a4a27`) footer.

### 1. Hero (`#top`) — green bg
- **Sticky-free top nav** (`.nav`, flex space-between): left wordmark link "FIZJOSFERA" (Cormorant, 22px, `letter-spacing:5px`, cream). Center nav links (Jost 13px uppercase `letter-spacing:2px`, `#e6dcc4`): O mnie, Usługi, Gabinet, Cennik, Opinie, Kontakt → anchor to `#o-mnie`, `#uslugi`, `#gabinet`, `#cennik`, `#opinie`, `#kontakt`. Right: cream "REZERWUJ" button (→ Booksy) + hamburger (hidden ≥820px).
- **Center lockup:** circular badge (SVG, see Assets) → stacked wordmark FIZJO / SFERA → "GABINET · FIZJOTERAPII" → H1 "Zdrowie kobiety w troskliwych, doświadczonych rękach" (Cormorant 400, `clamp(28px,4.6vw,42px)`, max-width 640, centered) → intro paragraph (max-width 560, `#dfd4bc`).
- **CTA row:** primary "Rezerwacja online" (Booksy) + ghost "Zadzwoń · 570 033 530" (`tel:+48570033530`).
- **Rating link:** "★★★★★ 5,0 · 29 opinii na Booksy" (→ Booksy).

### 2. O mnie (`#o-mnie`) — cream bg
- `.about-grid`: 2 cols `0.82fr 1.18fr`, gap `clamp(30px,5vw,56px)`, align center. Collapses to 1 col ≤920px (portrait capped `max-width:440px`, centered).
- **Left:** portrait image `assets/kasia.png` (branded green portrait card, radius 4px, `width:100%`).
- **Right:** eyebrow "Poznaj terapeutkę" → H2 "Katarzyna Marcinkowska-Kononowicz" → role "magister fizjoterapii" (Jost uppercase, `#4e6136`) → 3 bio paragraphs → italic pull-quote. (Full copy in the HTML file.)

### 3. Usługi (`#uslugi`) — green bg
- Centered eyebrow "Zakres" + H2 "Usługi gabinetu".
- `.svc-grid`: `repeat(3,1fr)` → 1 col ≤620px. Six cream cards (`#f7f0e3`), padding `clamp(28px,3vw,34px)`, each: italic numeral 01–06 (`#9aa77f`), Cormorant 600 title (25px), Jost 300 description. Hover: `translateY(-4px)` + soft shadow.
- Cards: 01 Fizjoterapia uroginekologiczna · 02 Opieka okołoporodowa · 03 Terapia blizn · 04 Trening kobiet · 05 Masaż leczniczy · 06 Kinesiotaping. (Copy in HTML.)

### 4. Gabinet (`#gabinet`) — cream bg
- Header row (flex, wraps): eyebrow "Gabinet" + H2 "Kameralna, spokojna przestrzeń" on left; short paragraph on right (max-width 360).
- `.gallery-grid`: `repeat(3,1fr)` → 1 col ≤620px. Three square (`aspect-ratio:1/1`) `object-fit:cover` photos, radius 4px, `overflow:hidden`. Hover: image `scale(1.04)` over `.6s`. Order used: `studio1.jpeg`, `studio3.jpeg`, `studio2.jpeg`.

### 5. Cennik (`#cennik`) — green bg with sand arch panel
- Panel `#e8ddc7`, max-width 820, centered, arch radius (see tokens), padding `clamp(48px,7vw,70px) …`.
- Eyebrow "Cennik" + big letter-spaced "CENNIK" heading (`clamp(34px,7vw,52px)`, `#3a4a27`) + hairline divider.
- Price list, max-width 600, Cormorant. Each `.price-row` is a 3-col grid `1fr auto auto` (name · duration · price). **≤620px:** middle "min" column hidden (`.price-min{display:none}`) and grid becomes `1fr auto`.
- Rows (name — duration — price):
  - Konsultacja fizjoterapeutyczna — 60 min — **150 zł**
  - Fizjoterapia uroginekologiczna (label), indented:
    - I wizyta — 90 min — **200 zł**
    - Kolejna wizyta — 60 min — **180 zł**
  - Terapia blizny — 60 min — **150 zł**
  - Masaż leczniczy — 60 min — **140 zł**
  - (Masaż) — 90 min — **190 zł**
  - Kinesiotaping — — — **od 40 zł**
  - Kinesiotaping w ciąży (brzuch + plecy) — — — **100 zł**
- Below list: centered inverse button "Umów wizytę online" (→ Booksy).

### 6. Opinie (`#opinie`) — cream bg
- Centered eyebrow "Opinie" + H2 "Zaufały mi kobiety z Ełku" + rating line "★★★★★ 5,0 · 29 opinii · Booksy".
- `.op-grid`: `repeat(3,1fr)` → 1 col ≤920px (max-width 560 centered). Three white cards (`#fff`, `1px solid #e4d8bf`, padding 34/30): big olive `"` quote glyph, Jost 300 quote, Cormorant 600 name, Jost meta (service). Reviews are **real** (from Booksy): Weronika (terapia blizn / opieka okołoporodowa), Emilia (uroginekologiczna), Monika (terapia blizn). Verbatim text in HTML.
- Below: text link "Zobacz wszystkie opinie na Booksy".

### 7. FAQ (`#faq`) — sand bg (`#e8ddc7`)
- Centered eyebrow "Pytania" + H2 "Najczęstsze pytania", max-width 820.
- Native `<details>`/`<summary>` accordion, 5 items, hairline `#cabf9f` between. Summary: Cormorant 600 `clamp(19px,2.4vw,23px)` with a `+` marker on the right (default marker removed). First item `open`. Questions: przygotowanie do wizyty · ból terapii dna miednicy · start po porodzie · skierowanie · jak umówić. (Answers in HTML.)

### 8. Mapa / Dojazd — cream bg
- `.map-grid`: 2 equal cols → 1 col ≤920px.
- **Left:** eyebrow "Dojazd" + H2 "Znajdziesz mnie w Ełku" + address "ul. Adama Mickiewicza 9B lok. 10" / "19-300 Ełk" + short note + inverse button "Otwórz w Mapach Google" (→ `https://maps.google.com/?q=Adama+Mickiewicza+9B+19-300+Ełk`).
- **Right:** Google Maps embed `<iframe>` `min-height:440px` (`320px` ≤620px), `filter:grayscale(.3) saturate(.85)`. Src: `https://maps.google.com/maps?q=Adama%20Mickiewicza%209B%2019-300%20E%C5%82k&z=15&output=embed`.

### 9. Footer / Kontakt (`#kontakt`) — deep green `#3a4a27`
- `.foot-grid`: `1.3fr 1fr 1fr` → 2 cols ≤920px → 1 col ≤620px, divider under it.
- Col 1: wordmark FIZJOSFERA + "GABINET · FIZJOTERAPII" + one-line description.
- Col 2 "Kontakt": phone `570 033 530` (`tel:+48570033530`) + address.
- Col 3 "Rezerwacja i social": "Rezerwuj na Booksy", "Instagram · @fizjosfera.elk", "Facebook · Fizjosfera".
- Bottom: centered copyright line.

## Interactions & Behavior
- **Anchor nav:** all nav/CTA in-page links are `href="#id"` with `html{scroll-behavior:smooth}`.
- **Mobile menu (only JS state):** below **820px**, nav links hide and a hamburger appears. Toggling sets an `open` class on the links container, which shows it as an absolutely-positioned dropdown (`top:calc(100%+18px)`, deep-green bg `#3a4a27`, radius 4, shadow). Each link click closes the menu. Implement with a single boolean state (`menuOpen`).
- **Hover:** buttons `opacity:.82`; text links `opacity:.6`; service cards lift + shadow; gallery images scale to 1.04 (`transition .6s`).
- **FAQ:** native `<details>` toggle, no JS.
- **External links:** Booksy / IG / FB / Maps open in new tab (`target="_blank" rel="noopener"`).

## Responsive behavior
Breakpoints (max-width): **920px**, **820px** (nav), **620px**.
- Fluid type/spacing via `clamp()` everywhere (values inline in the HTML — copy them).
- ≤920: about → 1 col; opinie → 1 col; map → 1 col; footer → 2 col.
- ≤820: desktop nav links hidden, hamburger shown, dropdown menu.
- ≤620: services/gallery/footer → 1 col; price rows drop the minutes column (`1fr auto`); map iframe min-height 320.

## State Management
Only one piece of client state: `menuOpen: boolean` for the mobile nav. No data fetching, no forms, no backend.

## Assets
Included in this bundle under `assets/` (copy into the app's public/static assets):
- **`kasia.png`** (1363×1712) — branded green portrait card of the therapist (already includes the arch + "F" badge + "O MNIE / KIM JESTEM" lettering baked in). Used in the About section. Bg green matches `#4e6136`.
- **`studio1.jpeg`, `studio2.jpeg`, `studio3.jpeg`** (2340×2340 each) — studio interior photos for the Gabinet gallery.

**Circular badge (hero):** inline SVG, no image file. A `viewBox="0 0 220 220"` with: two thin cream/olive circles (`r=97` stroke `#e9dec8`; `r=72` stroke `#cdbf9f`), a `<textPath>` on a circle path (`M110,110 m-84,0 a84,84 0 1,1 168,0 a84,84 0 1,1 -168,0`) reading `KATARZYNA MARCINKOWSKA · KONONOWICZ · GABINET FIZJOTERAPII · ` (Jost 12px `letter-spacing:3.4px`, fill `#eadfc8`), and a centered Cormorant "F" (70px, fill `#f2e9d6`). Copy the SVG verbatim from the HTML.

**Fonts:** Google Fonts (Cormorant Garamond + Jost) — link as above or self-host.

## External links (wire these exactly)
- Booksy (booking): `https://booksy.com/pl-pl/296751_fizjosfera_fizjoterapia_6803_elk`
- Instagram: `https://www.instagram.com/fizjosfera.elk/`
- Facebook: `https://www.facebook.com/profile.php?id=61576603081042`
- Phone: `tel:+48570033530` (display `570 033 530`)
- Google Maps: `https://maps.google.com/?q=Adama+Mickiewicza+9B+19-300+Ełk`

## Files
- `Fizjosfera Elk.dc.html` — the design reference (all exact copy, inline styles, `clamp()` values, the media queries, the SVG badge, and the mobile-menu logic live here). Read it alongside this README; when a measurement or string is ambiguous, the HTML is the source of truth.
- `assets/` — the four images listed above.

## Notes
- Language is **Polish** — preserve all diacritics (ł, ż, ś, ą, ę, ó, ć, ń) and exact copy.
- Reviews are real client reviews pulled from the studio's Booksy profile; keep attributions/text as-is unless the owner updates them.
- No cookie banner / analytics / consent is included — add per the client's requirements if the real site needs them.
