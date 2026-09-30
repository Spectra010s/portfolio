# Spectra010s

Astro portfolio and EmDash writing at https://spectra010s.com/blog.

## Local development

Node.js 22.16 or newer is required.

```bash
npm install
cp .dev.vars.example .dev.vars
npx emdash secrets generate
# Put the generated key in .dev.vars as EMDASH_ENCRYPTION_KEY.
npm run dev
```

Local D1 and R2 data are persisted under `.wrangler/`. Open http://localhost:4321, `/blog`, or `/_emdash/admin/` to complete CMS setup with your own account/passkey. The seed provides collections, categories, and tags without sample articles. Keep `.dev.vars` private.

## Deploy to Cloudflare

R2 must be activated on the Cloudflare account. This configuration uses Workers Free-compatible features; sandboxed plugins are disabled. D1/R2 allowances still apply.

```bash
npx wrangler login
npm run deploy
npx emdash secrets generate
npx wrangler secret put EMDASH_ENCRYPTION_KEY
# Paste the generated key when prompted. Back it up securely.
```

Wrangler provisions/reuses the named `spectra-content` D1 database and `spectra-media` R2 bucket. EmDash applies initial migrations and the seed schema on first request. Finish the setup wizard only after the production encryption key is set. The cron handler runs maintenance and scheduled publishing every minute.

`wrangler.jsonc` sets the public origin to https://spectra010s.com. Once the domain's Cloudflare zone is active, add the domain under the Worker's Settings > Domains & Routes > Custom Domain. Complete the admin setup on that permanent origin so passkeys are associated with the right hostname. If testing on workers.dev first, temporarily set EMDASH_SITE_URL to that origin and avoid creating your permanent admin/passkey there.

Store the encryption key as a Worker secret, never in Wrangler vars or Git. Back up D1 and R2 content. The R2 bucket remains private; EmDash serves media through its own route. Image passthrough avoids adding Cloudflare Images transformations. Generated OG cards use bundled WebAssembly and a licensed font subset.

## Commands and structure

```bash
npm run check
npm run build
npm run preview
npm run deploy
```

- `components/`: original portfolio React components, hydrated as one island.
- `src/pages/blog/`: server-rendered articles, search, categories, tags, and RSS.
- `src/pages/blog/og/[slug].png.ts`: generated preview for published posts.
- `seed/seed.json`: initial CMS schema; edits do not migrate existing databases automatically.
- `src/worker.ts`: EmDash request and scheduled handlers.
- `wrangler.jsonc`: Worker, database, media, and cron bindings.

The encryption key, local databases, uploads, and Wrangler state are gitignored. The blog content itself lives in D1 and is edited through EmDash.
