# bluebird.tech

Marketing site for [Bluebird Technologies](https://bluebird.tech), built with [Next.js](https://nextjs.org/) (App Router), React, and [Tailwind CSS v4](https://tailwindcss.com/). All pages are statically prerendered.

## Development

Requires Node 24 (see `.nvmrc`) and [pnpm](https://pnpm.io/) (version pinned via the `packageManager` field — any recent pnpm will auto-switch to it).

```bash
pnpm install
pnpm dev          # dev server on http://localhost:3000
pnpm build        # production build
pnpm start        # serve the production build
pnpm lint         # eslint
pnpm format       # prettier
```

## Structure

- `src/app/` — routes (App Router). Homepage sections live in `src/app/_sections/`, header/footer in `src/app/_header/` and `src/app/_footer/`.
- `src/components/` — shared components (hero, carousel, modal).
- `src/images/` — statically imported images.
- `src/app/globals.css` — global styles and the Tailwind theme (`@theme` block defines the `primary`/`secondary` brand colors).
- `public/fade-script.js` — IntersectionObserver-based scroll fade-in animations (`.fade` elements).

The contact form posts to [Web3Forms](https://web3forms.com/).

## Deployment (Netlify)

Configured via `netlify.toml` using the official Next.js runtime (`@netlify/plugin-nextjs`) — Netlify installs the plugin automatically. Create a new Netlify site from this repository and the defaults will work; no environment variables are required.
