import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import svelte from '@astrojs/svelte';
import tailwind from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://astrov5.casoon.dev',
  integrations: [svelte(), mdx(), sitemap()],
  build: {
    exclude: [],
    inlineStylesheets: 'auto',
  },
  vite: {
    plugins: [
      tailwind({
        config: {
          darkMode: 'class',
        },
      }),
    ],
  },
});
