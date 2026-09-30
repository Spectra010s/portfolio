import node from '@astrojs/node';
import react from '@astrojs/react';
import tailwind from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';
import emdash, { local } from 'emdash/astro';
import { sqlite } from 'emdash/db';
export default defineConfig({
 site: process.env.EMDASH_SITE_URL || 'https://spectra010s.com',
 output: 'server', adapter: node({mode:'standalone'}),
 integrations: [react(), emdash({
  database: sqlite({url: process.env.DATABASE_URL || 'file:./data.db'}),
  storage: local({directory: process.env.UPLOADS_DIR || './uploads', baseUrl:'/_emdash/api/media/file'}),
  siteUrl: process.env.EMDASH_SITE_URL || 'http://localhost:4321',
 })],
 vite: {plugins:[tailwind()]}, devToolbar:{enabled:false},
});
