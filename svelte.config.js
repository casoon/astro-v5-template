import { vitePreprocess } from '@astrojs/svelte';

export default {
  preprocess: vitePreprocess(),
  compilerOptions: {
    runes: true,
    modernAst: true,
  },
  experimental: {
    async: true, // Enable async SSR for Svelte 5
  },
};