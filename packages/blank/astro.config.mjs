import tailwind from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';
import { env } from './src/env.ts';

// Minimal Astro configuration for blank template
// https://docs.astro.build/en/reference/configuration-reference/
export default defineConfig({
  // Site URL from environment configuration (single source of truth)
  site: env.PUBLIC_SITE_URL,

  // Build configuration
  build: {
    inlineStylesheets: 'auto', // Inline critical CSS for better performance
  },

  // Vite configuration
  vite: {
    plugins: [
      // Tailwind CSS v4 with Vite integration
      tailwind({
        config: {
          darkMode: 'class', // Enable class-based dark mode
        },
      }),
    ],
    ssr: {
      // Include font packages in SSR bundle
      noExternal: ['@fontsource/*'],
    },
  },
});
