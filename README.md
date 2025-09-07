# Iconsek Monorepo

A fullstack monorepo containing:
- packages/iconsek – React icon library (ESM + CJS)
- apps/web – Dark-themed icon gallery website (Vite + React + Tailwind + Framer Motion)

## Quick start (npm)

1) Install deps (uses npm workspaces):

```bash
npm install
```

2) Start the gallery app:

```bash
npm run dev
```

3) Build everything:

```bash
npm run build
```

## Using the icon library (iconsek)

Install from npm:

```bash
npm i iconsek
```

Import and use an icon in React:

```tsx
import { Home } from "iconsek";

export default function Example() {
  return <Home size={32} type="linear" strokeWidth={1.5} />;
}
```

### Props
- size: number (default 24)
- type: "linear" | "bold" | "duo" | "bulk" | "gestalt" (maps to duocolor/others)
- strokeWidth: number (default 1.5 for stroked icons)
- Accepts native SVG props

## Library development

- Build package:

```bash
npm run -w iconsek build
```

- Typecheck:

```bash
npm run -w iconsek typecheck
```

Outputs go to packages/icons/dist with both ESM and CJS + types.

## Website

- Run dev server:

```bash
npm run -w web dev
```

- Build static site:

```bash
npm run -w web build
```

## Project Structure

```
apps/
  web/            # Icon gallery website
packages/
  icons/          # "iconsek" library source
```

## Notes
- Dark-only theme, responsive grid (6–7 columns on desktop), animated filters/search.
- Copy actions: per-card (JSX/SVG) and inside Details modal (Install/Usage).
- Favorites were removed per request; sliders control icon size & thickness.
