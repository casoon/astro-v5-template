import { createEnvSchema, validateEnv } from '@astro-v5/shared/utils';

/**
 * Environment variables for the demo package
 *
 * This uses the centralized validation from @astro-v5/shared
 * to ensure consistency across all packages.
 */
const envSchema = createEnvSchema({
  PUBLIC_SITE_URL: 'https://astrov5.casoon.dev',
  PUBLIC_SITE_NAME: 'Astro V5 Template',
  PUBLIC_MAIN_SITE_URL: 'https://astrov5.casoon.dev',
  PUBLIC_AUTHOR: 'CASOON',
  PUBLIC_LOCALE: 'de',
});

/**
 * Validated environment variables
 * Use this instead of import.meta.env throughout your app
 */
export const env = validateEnv(envSchema, import.meta.env);

/**
 * Export the type for use in other files
 */
export type Env = typeof env;
