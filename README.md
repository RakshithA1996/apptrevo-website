# Apptrevo — Marketing Site

A single-page marketing site for Apptrevo, built with **React + TypeScript + Vite + Tailwind CSS**, using the copy and visual direction from the brand guide (positioning statement, tagline, palette, and the three-connected-nodes logo mark).

## Structure

```
src/
  components/
    Logo.tsx            — SVG "three connected nodes" mark (color / mono variants, animated option)
    Header.tsx          — fixed nav, transparent → solid on scroll, sliding active-section indicator
    Hero.tsx            — headline, cursor-follow spotlight, parallax logo, scroll cue
    Capabilities.tsx    — the three disciplines, incl. the IoT "integration, not firmware" scope note
    Approach.tsx        — positioning + who we build for + brand voice
    Team.tsx            — founder profiles
    Contact.tsx         — email CTA
    Footer.tsx
    Reveal.tsx           — scroll-triggered fade-up wrapper, used to stagger sections/cards in
    NodeConnector.tsx    — the animated line + traveling signal between the 3 capability cards
    MagneticButton.tsx   — CTA buttons that lean gently toward the cursor on hover
    ScrollProgress.tsx   — thin teal progress bar fixed to the top of the viewport
  hooks/
    useInView.ts               — IntersectionObserver hook powering Reveal
    useScrollSpy.ts             — tracks which section is active, for the header indicator
    usePrefersReducedMotion.ts  — disables JS-driven motion (parallax, magnetic, spotlight) when requested
  data/
    content.ts         — all site copy in one typed file (edit this first for content changes)
  index.css            — Tailwind base + brand utility layer + a couple of global @keyframes
  App.tsx
  main.tsx
tailwind.config.ts       — brand color tokens (navy / teal / paper), fonts, custom animations
public/
  brand-logo.png         — the rendered brand mark, used as favicon
```

## Interactive/animation layer

- **Scroll reveals** — every section heading and card fades up into place the first time it enters the viewport (`Reveal`), staggered per item.
- **The node connector** — the Capabilities section literally draws the "three connected nodes" line between the three cards when it scrolls into view, with a small signal that keeps traveling back and forth afterward. This is the one deliberate signature moment — everything else stays quieter by design.
- **Header** — a teal indicator slides under whichever section is currently in view (via `useScrollSpy`); the logo mark tilts slightly on hover.
- **Hero** — a soft teal spotlight follows the cursor, and the logo mark gets a subtle parallax tilt; a scroll-cue chevron bounces at the bottom on desktop.
- **Magnetic CTAs** — the primary buttons lean a few pixels toward the cursor on hover, then spring back.
- **Scroll progress bar** — a thin teal bar at the very top fills as you scroll down the page.
- **Accessibility** — everything above respects `prefers-reduced-motion`: JS-driven effects (parallax, magnetic pull, spotlight) switch off via `usePrefersReducedMotion`, and CSS animations/transitions are globally clamped in `index.css`.

## Running it locally

```bash
npm install
npm run dev
```

Then open the printed local URL (usually `http://localhost:5173`).

## Building for production

```bash
npm run build
npm run preview   # sanity-check the production build locally
```

`npm run build` outputs static files to `dist/` — deployable as-is to Vercel, Netlify, Cloudflare Pages, GitHub Pages, or any static host / S3+CloudFront.

## Things to update before shipping

- **`hello@apptrevo.com`** in `Contact.tsx` — swap for the real inbox once the domain is live.
- **`src/data/content.ts`** — all copy lives here: capability descriptions, founder bios, industries list, nav links.
- **Domain/favicon** — `public/brand-logo.png` is used as the favicon; replace with a proper multi-size favicon set once you have one.
- Founder bios use the details from the project's Company Background doc — confirm each founder is comfortable with what's public before launch.

## Brand tokens (from the brand guide)

| Token | Value |
|---|---|
| `navy` | `#12163A` |
| `teal` | `#2DD4BF` |
| `paper` | `#F5F6FA` |
| Display font | Space Grotesk |
| Body font | Inter |
| Mono accent | JetBrains Mono |
