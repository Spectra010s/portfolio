import cloudflare from '@astrojs/cloudflare';
import react from '@astrojs/react';
import tailwind from '@tailwindcss/vite';
import { d1, r2 } from '@emdash-cms/cloudflare';
import { defineConfig } from 'astro/config';
import emdash from 'emdash/astro';
import { fileURLToPath } from 'node:url';
import { syncProjectPreviews } from './scripts/sync-project-previews.mjs';

const projectPreviews = {
 name: 'project-previews',
 hooks: {
  'astro:build:done': async ({ dir, logger }) => {
   await syncProjectPreviews(fileURLToPath(dir), { logger });
  },
 },
};

export default defineConfig({
 site: 'https://spectra010s.com',
 output: 'server', adapter: cloudflare({imageService:'passthrough'}),
 integrations: [react(), projectPreviews, emdash({
  database: d1({binding:'DB'}),
  storage: r2({binding:'MEDIA'}),
 })],
 vite: {plugins:[tailwind()], build:{minify:true}}, devToolbar:{enabled:false},
});
