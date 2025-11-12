import { z } from 'zod';

/**
 * Base environment variables schema
 * This defines the standard environment variables that all packages should have.
 *
 * Each package can extend this schema with their own specific variables.
 */
export const baseEnvSchema = z.object({
  // Site configuration
  PUBLIC_SITE_URL: z.string().url(),
  PUBLIC_SITE_NAME: z.string().min(1),
  PUBLIC_MAIN_SITE_URL: z.string().url(),
  PUBLIC_AUTHOR: z.string().min(1),
  PUBLIC_LOCALE: z.string().min(2).default('en'),

  // API configuration (optional)
  PUBLIC_API_URL: z.string().url().optional(),

  // Feature flags
  PUBLIC_ENABLE_ANALYTICS: z
    .string()
    .default('false')
    .transform((val) => val === 'true'),
  PUBLIC_ENABLE_DARK_MODE: z
    .string()
    .default('true')
    .transform((val) => val === 'true'),

  // Build configuration (optional)
  PUBLIC_BUILD_TIME: z.string().optional(),
});

/**
 * Type helper for environment variables
 */
export type BaseEnv = z.infer<typeof baseEnvSchema>;

/**
 * Validates environment variables against a Zod schema
 *
 * @param schema - The Zod schema to validate against
 * @param env - The environment object (typically import.meta.env)
 * @returns Validated and typed environment variables
 * @throws {Error} if validation fails
 *
 * @example
 * ```ts
 * // In your package's env.ts
 * import { validateEnv, baseEnvSchema } from '@astro-v5/shared/utils/env';
 *
 * // Use base schema with defaults
 * export const env = validateEnv(
 *   baseEnvSchema.extend({
 *     PUBLIC_SITE_URL: z.string().default('http://localhost:4321'),
 *     PUBLIC_SITE_NAME: z.string().default('My Site'),
 *   }),
 *   import.meta.env
 * );
 * ```
 */
export function validateEnv<T extends z.ZodTypeAny>(
  schema: T,
  env: Record<string, any>
): z.infer<T> {
  const parsed = schema.safeParse(env);

  if (!parsed.success) {
    console.error('❌ Invalid environment variables:', parsed.error.issues);
    throw new Error('Invalid environment variables');
  }

  return parsed.data;
}

/**
 * Creates a default environment schema with sensible defaults
 * for quick setup of new packages.
 *
 * @param defaults - Default values to override
 * @returns Extended schema with defaults
 *
 * @example
 * ```ts
 * import { createEnvSchema, validateEnv } from '@astro-v5/shared/utils/env';
 *
 * const envSchema = createEnvSchema({
 *   PUBLIC_SITE_URL: 'http://localhost:4321',
 *   PUBLIC_SITE_NAME: 'My Astro Site',
 * });
 *
 * export const env = validateEnv(envSchema, import.meta.env);
 * ```
 */
export function createEnvSchema(defaults: {
  PUBLIC_SITE_URL: string;
  PUBLIC_SITE_NAME: string;
  PUBLIC_MAIN_SITE_URL: string;
  PUBLIC_AUTHOR: string;
  PUBLIC_LOCALE?: string;
  PUBLIC_API_URL?: string;
}) {
  return baseEnvSchema.extend({
    PUBLIC_SITE_URL: z.string().default(defaults.PUBLIC_SITE_URL),
    PUBLIC_SITE_NAME: z.string().min(1).default(defaults.PUBLIC_SITE_NAME),
    PUBLIC_MAIN_SITE_URL: z.string().default(defaults.PUBLIC_MAIN_SITE_URL),
    PUBLIC_AUTHOR: z.string().min(1).default(defaults.PUBLIC_AUTHOR),
    PUBLIC_LOCALE: z.string().min(2).default(defaults.PUBLIC_LOCALE || 'en'),
    PUBLIC_API_URL: defaults.PUBLIC_API_URL
      ? z.string().default(defaults.PUBLIC_API_URL)
      : z.string().optional(),
  });
}
