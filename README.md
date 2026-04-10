# Spectra010s

Personal portfolio site for [Adeloye Adetayo](https://spectra010s.vercel.app), built with Next.js.

The site is intentionally simple: a hero section, current work, selected projects, skills, generated social preview image, and lightweight motion. Project content is driven from [`data/projects.json`](/data/data/com.termux/files/home/spectra010s/data/projects.json).

## Stack

- Next.js App Router
- React
- TypeScript
- Tailwind CSS
- Lucide React

## Run Locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Project Structure

- [`app/`](/data/data/com.termux/files/home/spectra010s/app): routes, metadata, global styles, OG image
- [`components/`](/data/data/com.termux/files/home/spectra010s/components): page sections
- [`data/projects.json`](/data/data/com.termux/files/home/spectra010s/data/projects.json): project content
- [`hooks/useReveal.ts`](/data/data/com.termux/files/home/spectra010s/hooks/useReveal.ts): reveal and stagger animation hooks
- [`public/`](/data/data/com.termux/files/home/spectra010s/public): static assets

## Notes

- Project previews resolve through `/images/<slug>.png`.
- If a matching file exists in `public/images`, that local image is used.
- Otherwise the app falls back to a generated remote preview based on the project's `demo` URL.

## Reuse

If you want to adapt this portfolio for yourself:

1. Update [`data/projects.json`](/data/data/com.termux/files/home/spectra010s/data/projects.json).
2. Replace [`public/s.jpeg`](/data/data/com.termux/files/home/spectra010s/public/s.jpeg).
3. Update metadata in [`app/layout.tsx`](/data/data/com.termux/files/home/spectra010s/app/layout.tsx).
4. Adjust the copy in the page sections under [`components/`](/data/data/com.termux/files/home/spectra010s/components).

## Build

```bash
npm run build
```
