import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import svelte from '@astrojs/svelte';

export default defineConfig({
  integrations: [
    tailwind({ 
      applyBaseStyles: false,
    }),
    svelte(),
    mdx(),
  ],
  build: {
    exclude: [],
    inlineStylesheets: 'auto',
  }
});
