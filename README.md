# RNSIT MUNsoc Website

Official website for the Model United Nations Society at RNS Institute of Technology, Bengaluru.

Production: `https://rnsitmun.vercel.app`

## Tech Stack
- React + TypeScript + Vite
- Tailwind CSS + shadcn/ui
- Supabase (Edge Functions for AI search and analytics)

## Getting Started

Prerequisites:
- Node.js 18+ and npm 9+

Install and run locally:
```bash
npm install
npm run dev
# open http://localhost:8080
```

Build and preview:
```bash
npm run build
npm run preview
```

## Scripts
- `dev` — start Vite dev server
- `build` — production build
- `preview` — preview the production build locally

## Project Structure
```
src/
  pages/           # Route pages (Home, About, Events, Members, etc.)
  components/      # Layout, sections, UI library components
  integrations/    # Supabase client and types
  hooks/, lib/     # Reusable hooks and utilities
public/            # Static assets, PWA manifest, icons
supabase/          # Edge Functions (ai-search, analytics-logger)
scripts/           # SEO utilities (sitemap, ping search engines)
```

## Environment
Create a `.env` (or `.env.local`) for local development if you use Supabase features.
```
VITE_SUPABASE_URL=...
VITE_SUPABASE_ANON_KEY=...
```

## SEO & PWA
- Custom `index.html` meta for titles/descriptions/social cards
- `public/manifest.json` for PWA install name and icons
- `scripts/generate-sitemap.js` and `scripts/ping-search-engines.js` for sitemap + indexing

## Contributing
1. Create a new branch from `main`
2. Make changes and run locally
3. Submit a pull request with a clear description and screenshots when relevant

Code style:
- TypeScript strict, descriptive names, no unused code
- Keep components small and accessible (keyboard/focus/aria)

## Deployment
Hosted on Vercel. Every push to `main` deploys automatically.

## Contact
- Email: rnsitmun@rnsit.ac.in
- Instagram/LinkedIn: RNSIT MUNsoc

---
© RNS Institute of Technology — RNSIT MUNsoc
