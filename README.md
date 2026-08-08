# Tabela Robusta — Construction Landing Page

Next.js 16 (App Router, Turbopack) · React 19 · Tailwind CSS v4 · TypeScript.
Built from the "Construction Website (Community)" Figma file for layout and
type, then rebranded to **Tabela Robusta Unipessoal Lda** — palette sampled from
the client logo, motion layer added.

## Local development

```bash
pnpm install
pnpm dev          # http://localhost:3000
```

```bash
pnpm build        # production build
pnpm start        # serve the production build
pnpm lint         # eslint
```

## Environment

Copy `.env.example` to `.env.local` and fill it in.

| Variable | Required | Purpose |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | production | Absolute origin used by canonical URLs, OG/Twitter images and `sitemap.xml`. Falls back to `http://localhost:3000`. |

## Deploying to Vercel

The git repository root **is** this `frontend/` directory, so Vercel needs no
root-directory override.

1. Import the repo at [vercel.com/new](https://vercel.com/new). Framework
   detection picks up Next.js; leave build and output settings on their
   defaults.
2. Add `NEXT_PUBLIC_SITE_URL` under Settings → Environment Variables for
   Production, Preview and Development. Set it to the final domain (e.g.
   `https://tabelarobusta.pt`).
3. Deploy. Every route is statically prerendered — there is no server runtime,
   database or external service to configure.

Redeploy after changing `NEXT_PUBLIC_SITE_URL`; it is inlined at build time.

### Before going live

- **Forms are validated but not delivered.** `submitQuote` and
  `subscribeNewsletter` in `src/app/actions.ts` each end at a marked `TODO`
  where the payload is logged. Wire an email provider, CRM or webhook there.
- **Hero and About photography** is upscaled from low-resolution Figma exports,
  and still shows orange hi-vis against a navy/gold palette. Replacements drop
  into `public/images/`.
- **Contact details are placeholders** — phone, email and the client logo strip
  all still carry template data. See `plan.md` → "Content still needed".

## Structure

```
src/
  app/          routes, layout, global CSS, server actions, sitemap/robots
  components/
    layout/     Header (topbar, nav, drawer, search) and Footer
    sections/   one file per landing-page section
    ui/         primitives — Button, Input, Reveal, Preloader, Icon, …
  content/      all copy and data, typos preserved from the design
  hooks/        useInView, useCarousel, useCountUp, useAppReady, …
  lib/          cn(), generated icon data, zod schemas
public/
  images/       photography, logos, reference frames
  icons/        source SVGs for the generated icon set
```

`/styleguide` renders every token and primitive. It is excluded from
`robots.txt`; delete `src/app/styleguide/` if you would rather it not ship.

## Motion

Palette is navy `#2A3F6A` / gold `#C1873D`, sampled from the logo; `src/app/globals.css`
carries the token set and the two contrast rules that govern it.

Scroll reveals, the intro preloader and the progress rail all degrade cleanly:
they sit behind `@media (scripting: enabled)` and
`prefers-reduced-motion: no-preference`, so with JavaScript off or reduced
motion on, the page renders complete and static. Only `opacity`, `transform`
and `clip-path` are animated. See `plan.md` (repo parent directory) for the
full breakdown.
