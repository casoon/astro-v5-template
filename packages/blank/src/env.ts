import { createEnvSchema, validateEnv } from "@astro-v5/shared/utils";

/**
 * Environment variables for the blank package
 *
 * This uses the centralized validation from @astro-v5/shared
 * to ensure consistency across all packages.
 */
const envSchema = createEnvSchema({
  PUBLIC_SITE_URL: "http://localhost:4321",
  PUBLIC_SITE_NAME: "My Astro Site",
  PUBLIC_MAIN_SITE_URL: "http://localhost:4321",
  PUBLIC_AUTHOR: "Your Name",
  PUBLIC_LOCALE: "en",
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
