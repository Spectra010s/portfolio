# Spectra010s

Personal portfolio and writing at https://spectra010s.com, built with Astro, React, and EmDash.

## Local setup

Requires Node.js 22.16 or newer.

```bash
npm install
cp .env.example .env
npx emdash secrets generate
# Paste the generated value into EMDASH_ENCRYPTION_KEY in .env.
npm run dev
```

Open http://localhost:4321 for the portfolio, `/blog` for writing, and `/_emdash/admin/` for the initial CMS setup. Register your own account/passkey. The seed defines posts, pages, categories, and tags without publishing sample articles.

The original portfolio components remain in `components/` as a hydrated React island. Blog pages render on the server and read published EmDash content. Article previews use the selected OG/featured image, falling back to a generated card at `/blog/og/<slug>.png`.

## Checks

```bash
npm run check
npm run build
npm start
```

## Deployment

The current adapter targets a persistent Node.js server. Set `EMDASH_SITE_URL=https://spectra010s.com`, preserve `EMDASH_ENCRYPTION_KEY`, and provide persistent volumes for SQLite (`DATABASE_URL=file:/path/data.db`) and uploads (`UPLOADS_DIR=/path/uploads`). Back up the database, uploads, and encryption key.

Do not deploy this local SQLite/storage configuration to ephemeral serverless filesystems. Cloudflare requires its adapter plus D1/R2; Vercel requires its Astro adapter plus a remote database and supported object storage. These production integrations are not configured by this branch yet.

Secrets, databases, and uploads are gitignored. Content is managed in EmDash rather than source files; changes to collection definitions in `seed/seed.json` do not automatically migrate an existing database.
