import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import svelte from '@astrojs/svelte';
import tailwind from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';

// Astro configuration
// https://docs.astro.build/en/reference/configuration-reference/
export default defineConfig({
  // IMPORTANT: Update this to your domain for production
  site: 'https://astrov5.casoon.dev',
  
  // Integrations extend Astro with custom functionality
  integrations: [
    // Svelte 5 with runes API for reactive components  
    svelte({
      compilerOptions: {
        runes: true,         // Enable Svelte 5 runes ($state, $derived, etc.)
        modernAst: true,     // Use modern AST for better performance
      },
      prebundleSvelteLibraries: true,  // Pre-bundle for faster builds
    }),
    // MDX for enhanced markdown with component support
    mdx(), 
    
    // Automatically generate sitemap.xml
    sitemap()
  ],
  // Build configuration
  build: {
    exclude: [],
    inlineStylesheets: 'auto',  // Inline critical CSS for better performance
  },
  // Vite configuration
  vite: {
    plugins: [
      // Tailwind CSS v4 with Vite integration
      tailwind({
        config: {
          darkMode: 'class',  // Enable class-based dark mode
        },
      }),
    ],
    ssr: {
      // Include font packages in SSR bundle
      noExternal: ['@fontsource/*'],
    },
    // Svelte-specific configuration for async SSR
    define: {
      '__SVELTE_EXPERIMENTAL_ASYNC__': true,
    },
  },
});
