import mdx from '@astrojs/mdx';
import svelte from '@astrojs/svelte';
import tailwind from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';

export default defineConfig({
  integrations: [svelte(), mdx()],
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
