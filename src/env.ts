import { z } from 'zod';

/**
 * Specify your environment variables schema here.
 * This way you can ensure the app isn't built with invalid env vars.
 */
const envSchema = z.object({
  // Site configuration
  PUBLIC_SITE_URL: z.string().url().default('https://astrov5.casoon.dev'),
  PUBLIC_SITE_NAME: z.string().min(1).default('Astro V5 Template'),
  
  // API configuration (optional)
  PUBLIC_API_URL: z.string().url().optional(),
  
  // Feature flags
  PUBLIC_ENABLE_ANALYTICS: z
    .string()
    .transform((val) => val === 'true')
    .default('false'),
  PUBLIC_ENABLE_DARK_MODE: z
    .string()
    .transform((val) => val === 'true')
    .default('true'),
  
  // Build configuration (optional)
  PUBLIC_BUILD_TIME: z.string().optional(),
});

/**
 * Parse and validate environment variables
 * @throws {ZodError} if validation fails
 */
function parseEnv() {
  const parsed = envSchema.safeParse(import.meta.env);

  if (!parsed.success) {
    console.error('❌ Invalid environment variables:', parsed.error.flatten());
    throw new Error('Invalid environment variables');
  }

  return parsed.data;
}

/**
 * Validated environment variables
 * Use this instead of import.meta.env throughout your app
 */
export const env = parseEnv();

// Export the type for use in other files
export type Env = z.infer<typeof envSchema>;