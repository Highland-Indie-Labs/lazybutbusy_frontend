# Handoff: Lazy But Busy — Marketing Site

## Overview
The full public site for **Lazy But Busy**, a software company building web, mobile, and desktop products for businesses in Myanmar and beyond. Eight routes: Home, Tools, Manifesto, The Lab, Pricing, About, Blog (+ post detail), and Contact ("Hire Us (Maybe)"), plus a 404.

This bundle contains **two things**:

1. `/` — a **production Next.js 16 codebase** written to your stack (App Router, TypeScript, Tailwind CSS 4, Motion for React, Lucide, React Hook Form + Zod, Resend). Drop it into `lazybutbusy/` and run it.
2. `design_reference/` — the **HTML design prototypes** these pages were designed in. They are design references, not production code: use them to check layout, spacing, copy, and interaction feel. Do not ship them.

## Fidelity
**High-fidelity.** Colors, type scale, spacing, borders, shadows, and interaction behavior are final and taken from the Lazy But Busy Design System ("Efficient Paradox"). The Next.js code implements them directly — no re-derivation needed.

## Getting it running

```bash
# 1. rename the dynamic route folder (the export flattened the brackets)
mv app/blog/-slug- "app/blog/[slug]"

# 2. install + run
npm install
cp .env.example .env.local   # add RESEND_API_KEY
npm run dev
```

Fonts and images are already in `public/` (`fonts/`, `logo/`, `mascot/`). Nothing else to wire.

## Routes

| Route | File | Purpose |
| --- | --- | --- |
| `/` | `app/page.tsx` | Hero (mascot + manifesto snippet), metric row, three services, Our Vibe bento, dark CTA |
| `/tools` | `app/tools/page.tsx` | Client products (Born To Glow, L Key) on dark cards, then 6 own tools, then custom-work CTA + terminal card |
| `/manifesto` | `app/manifesto/page.tsx` | Blockquote hero, "Choose Your Fighter" comparison, engagement metrics, 4 numbered principles |
| `/lab` | `app/lab/page.tsx` | Lazy Loader hero, 4 experiment cards (one abandoned/dashed), dark terminal CTA |
| `/pricing` | `app/pricing/page.tsx` | 3 tiers (middle featured dark), custom-quote band, FAQ accordion |
| `/about` | `app/about/page.tsx` | Hero + mascot, 4 team cards, timeline rows, dark CTA |
| `/blog` | `app/blog/page.tsx` | Post rows; `app/blog/[slug]/page.tsx` for detail |
| `/contact` | `app/contact/page.tsx` | Intake form with validation + success state |
| 404 | `app/not-found.tsx` | "This page is on a break." |

## Design tokens
All tokens live in `app/globals.css` under `@theme` (Tailwind 4). Use the utility names, not raw hex.

**Color (monochrome only)**
| Token | Value | Use |
| --- | --- | --- |
| `paper` | `#fbf9f8` | page background |
| `ink` | `#000000` | all borders, structure, headline text |
| `surface-alt` | `#efeded` | banded sections, icon tiles |
| `surface-high` | `#e4e2e2` | chips |
| `surface-dark` | `#303031` | dark cards |
| `surface-dim` | `#dbdad9` | abandoned state bg |
| `body-text` | `#4c4546` | body copy |
| `muted` | `#5d5f5f` | secondary copy, inactive nav |
| `ghost` | `#848484` | metadata, footer links |
| `outline` | `#7e7576` | abandoned text/border |
| `on-dark` | `#c6c6c6` | body copy on dark cards |
| `error` | `#ba1a1a` | form errors only |
| `accent` | `#ff4d00` | "Lazy Orange" — hover shadows/notifications ONLY, sparingly |

**Type**
- Display/headlines: Space Grotesk Bold, uppercase, negative tracking. `text-display-lg` 72/76 (-2.88px), `text-headline-lg` 40/48 (-1.6px), `text-headline-md` 32/40 (-1.28px), `text-headline-sm` 24/32 (-0.96px).
- Body: Hanken Grotesk Regular — 18/28 lead, 16/24 default, 14/20 small. Sentence case.
- Mono: JetBrains Mono Medium — labels/buttons/metadata. 12/16 uppercase, or 16/24 with `tracking-[1.6px]`.

**Structure**
- Borders: always `border-ink`. 2px standard, 1px hairline dividers, 4px bottom on section labels, 4px left on blockquotes, 2px top on footers.
- Shadows: hard only — `shadow-hard-md` (8px 8px) cards, `shadow-hard-sm` (4px 4px) nav/chips/tiles. Never blurred.
- Radii: 0 everywhere except `rounded-lg` (8px) on Tools/Lab cards and icon tiles, and `rounded-full` on chips.
- Layout: `container-lbb` = 1200px max, 32px inline padding. Section padding 64–96px (`py-16` to `py-24`). Grid gap 24px (`gap-6`).
- `grid-paper` utility = the faint 40px grid on hero sections.

## Interactions & behavior
- **Buttons/cards hover**: depress into the shadow — `translate(+4px,+4px)` with shadow shrinking 8→4px, `120ms` `ease-snap`. No opacity or scale fades. Set `accent` on a Button for the Lazy Orange hover shadow.
- **Nav**: active link gets a 1px inset edge; inactive links get a 2px bottom rule on hover. Mobile (<1024px) uses a hamburger that expands a height-animated panel (Motion, 120ms); every row is ≥52px tall.
- **Lazy Loader**: crawls at random increments to ~72%, stalls ~2.2s, jumps to 100%, resets. Label uses `mix-blend-difference`. Also used as the contact form's sending state.
- **FAQ accordion**: single-open, `AnimatePresence` height animation, 160ms.
- **Reveal**: sections offset in `y: 16 → 0` once on scroll, 240ms — chunky, not a fade-up-and-scale.
- **Contact form** (`components/contact/contact-form.tsx`): React Hook Form + Zod. Validation messages are in-voice and uppercase, e.g. `ERROR: NAME REQUIRED. WE'RE LAZY, NOT PSYCHIC.` Required: name, valid email, message. Optional: company, budget, needs[]. On success it swaps to a receipt state with a random ticket number and terminal-style status lines. `POST /api/contact` validates again server-side and sends via Resend.

## Content notes (all replaceable in `lib/constants.ts`)
- **Real client products**: Born To Glow (Myanmar cosmetic e-commerce), L Key (guitar chords + tuner). Currently marked "SAMPLE" — swap in live URLs and status when ready.
- **Pricing** is sample numbers ($4.9K / $14K / $2.4K). Confirm before launch.
- **Team** and **blog posts** are labelled placeholders by design.
- Voice: sarcastic, deadpan, "we" to "you", jokes in parentheticals. Display text and buttons UPPERCASE, product names Title Case, body sentence case. Profanity bleeped. **No emoji, ever.**

## Assets
- `public/logo/logo-sloth-small.jpg`, `logo-sloth-square.jpg`, `public/mascot/sloth-hero.jpg` — sloth mascot bitmaps from the design system. Always rendered grayscale inside a 2px black edge with a hard shadow.
- `public/fonts/` — Space Grotesk (400/500/700), Hanken Grotesk (400/700), JetBrains Mono (400/500), loaded via `next/font/local` in `app/layout.tsx`.
- Icons: **Lucide React** (the design system specifies Material Symbols; Lucide is your stack's choice and is what the code uses — single-ink, 2px stroke, 24–32px inside 48/64px tiles).

## Still to do
- Analytics: add Plausible or `@vercel/analytics` in `app/layout.tsx`.
- Blog: `[slug]` renders excerpt only — wire MDX or a CMS when real posts land.
- Legal: `/privacy` and `/terms` are linked in the footer but not built.
- Responsive: breakpoints are in place (desktop-first, `lg:` collapse) but only the nav was designed for mobile in detail — review hero/bento at <768px.
