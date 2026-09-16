# bluebird_tech

The live bluebird.tech marketing site for Bluebird Technologies. Next.js App Router, React 19,
Tailwind CSS v4; every page is statically prerendered. Remote: `bluebird-technologies/bluebird_tech`.
Business positioning and the newer site build live in the `hq` repo (local `bluebird-hq`).

## Stack

- Node 24 (`.nvmrc`), pnpm (pinned via `packageManager`), TypeScript, Next 16, Tailwind 4 via
  `@tailwindcss/postcss`, `@heroicons/react`, `react-fast-marquee`.
- Contact form posts to Web3Forms; no server code, no database, no environment variables.

## Layout

- `src/app/` — routes: home, `build-a-platform`, `case-studies/*`, `quote-calculator`,
  `privacy-policy`, `terms-of-service`, plus `robots.ts` and `sitemap.ts`.
- `src/app/_sections/`, `_header/`, `_footer/` — homepage sections and chrome.
- `src/components/` — shared hero, carousel, modal. `src/images/` — statically imported images.
- `src/app/globals.css` — global styles and the Tailwind `@theme` (brand `primary`/`secondary`).
- `public/fade-script.js` — IntersectionObserver scroll fade-ins for `.fade` elements.

## Commands

- `pnpm install`, `pnpm dev` — dev server on http://localhost:3000
- `pnpm lint` — eslint (`eslint-config-next`); `pnpm format` — Prettier
- `pnpm build` — production build; `pnpm start` — serve it

## Conventions

- Prettier: 4-space indent, single quotes, no semicolons, print width 100 (`.prettierrc.js`).

## Environments & deploy

Netlify builds from this repo with `pnpm build` and `@netlify/plugin-nextjs` (`netlify.toml`).
The production branch is set in Netlify, not in this repo; assume a push to `main` goes live and
ask before pushing.

## Quality gate

No CI. Run `pnpm lint` and `pnpm build` before committing.

## Further reading

`README.md`.
