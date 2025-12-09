import mdx from '@astrojs/mdx';
import svelte from '@astrojs/svelte';
import speedMeasure from '@casoon/astro-speed-measure';
import tailwind from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';
import { env } from './src/env.ts';

// Astro configuration
// https://docs.astro.build/en/reference/configuration-reference/
export default defineConfig({
  // Site URL from environment configuration (single source of truth)
  site: env.PUBLIC_SITE_URL,

  // Integrations extend Astro with custom functionality
  integrations: [
    // Svelte 5 with runes API for reactive components
    svelte({
      compilerOptions: {
        runes: true, // Enable Svelte 5 runes ($state, $derived, etc.)
        modernAst: true, // Use modern AST for better performance
      },
      prebundleSvelteLibraries: true, // Pre-bundle for faster builds
      experimental: {
        async: true, // Enable async SSR for Svelte 5
      },
    }),
    // MDX for enhanced markdown with component support
    mdx(),
    // Build performance metrics
    speedMeasure({ measureVitePlugins: false, measureIntegrations: false }),
  ],
  // Build configuration
  build: {
    exclude: [],
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
    // Suppress font file resolution warnings
    optimizeDeps: {
      exclude: ['@fontsource/*'],
    },
    // Svelte-specific configuration for async SSR
    define: {
      __SVELTE_EXPERIMENTAL_ASYNC__: true,
    },
    // Build optimizations
    build: {
      // Minify for production
      minify: 'esbuild',
      // Chunk splitting for better caching
      rollupOptions: {
        // Suppress font file warnings from @fontsource packages
        onwarn(warning, warn) {
          if (warning.code === 'UNRESOLVED_IMPORT' && warning.message?.includes('/files/')) {
            return;
          }
          warn(warning);
        },
        output: {
          manualChunks: {
            // Group vendor dependencies
            vendor: ['svelte'],
            // Separate font packages for better caching
            fonts: [
              '@fontsource/inter',
              '@fontsource/archivo',
              '@fontsource/crimson-text',
              '@fontsource/dm-sans',
              '@fontsource/fira-code',
              '@fontsource/jetbrains-mono',
              '@fontsource/lora',
              '@fontsource/manrope',
              '@fontsource/merriweather',
              '@fontsource/montserrat',
              '@fontsource/playfair-display',
              '@fontsource/poppins',
              '@fontsource/raleway',
              '@fontsource/source-serif-4',
              '@fontsource/space-grotesk',
              '@fontsource/work-sans',
            ],
          },
        },
      },
    },
  },
});
