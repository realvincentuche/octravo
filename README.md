# Octravo Limited — company website

Client-only TanStack Router app. No server rendering. Static files built with
Vite, served by Nginx.

```bash
npm install
npm run dev
```

Routes live under `src/routes`. Shared copy in `src/site.ts`, tokens and
motion in `src/styles.css`.

Build for production:

```bash
npm run build
```

Output lands in `dist/`. Deploy the `Dockerfile` in this folder as a Coolify
app: it copies `dist/` into Nginx with SPA fallback and long cache on hashed
assets.

Pages: `/`, `/services`, `/products`, `/about`, `/contact`, `/careers`, plus a
plain 404.
