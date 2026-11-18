# INDRAPROJECTS — Royal Gold

Multi-page website for INDRAPROJECTS (IT Solutions & Branding Agency).
Built with TanStack Start, React 19, Tailwind CSS 4, shadcn/ui, react-hook-form + zod.

## Run locally

```bash
npm install      # or: bun install
npm run dev      # http://localhost:3000 (or the port shown)
npm test         # unit tests
npm run build    # production build
```

## Where to edit

| What | File |
| --- | --- |
| Phone, email, address, social links | `src/lib/site.ts` |
| Services | `src/data/services.ts` |
| Projects | `src/data/projects.ts` |
| Logo | replace `src/assets/indraprojects-logo.jpeg` (and `public/favicon.png`) |
| "Our Story" text | `src/routes/about.tsx` |

## Notes

- The logo is bundled in `src/assets`, so it loads on any host (it used to point at a
  Lovable-only URL that returned 404 elsewhere).
- The contact form opens the visitor's email app (`mailto:`). For direct delivery,
  connect a form service or backend later.
- The original design brief is kept in `docs/original-brief.md`.
