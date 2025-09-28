import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

export default {
  preprocess: vitePreprocess(),
  compilerOptions: {
    runes: true,
    modernAst: true,
  },
  vitePlugin: {
    experimental: {
      async: true, // Enable async SSR for Svelte 5
    },
  },
};
