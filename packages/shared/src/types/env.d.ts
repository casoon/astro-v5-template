/**
 * Centralized environment variable type declarations
 *
 * This file defines the standard environment variables available across all packages.
 * Each package references this file from their local env.d.ts.
 */

/**
 * Base environment variables available in all packages
 */
interface BaseImportMetaEnv {
  // Public environment variables (exposed to client)
  readonly PUBLIC_SITE_URL: string;
  readonly PUBLIC_SITE_NAME: string;
  readonly PUBLIC_MAIN_SITE_URL: string;
  readonly PUBLIC_AUTHOR: string;
  readonly PUBLIC_LOCALE: string;
  readonly PUBLIC_API_URL?: string;
  readonly PUBLIC_ENABLE_ANALYTICS: string;
  readonly PUBLIC_ENABLE_DARK_MODE: string;
  readonly PUBLIC_BUILD_TIME?: string;

  // Server-only environment variables (examples - add your own)
  readonly SECRET_API_KEY?: string;
  readonly DATABASE_URL?: string;
}

/**
 * Extend this interface in your package's env.d.ts if you need
 * additional package-specific environment variables.
 *
 * @example
 * ```ts
 * // In packages/your-package/src/env.d.ts
 * /// <reference path="../.astro/types.d.ts" />
 * /// <reference types="@astro-v5/shared/types/env" />
 *
 * interface ImportMetaEnv extends BaseImportMetaEnv {
 *   readonly PUBLIC_CUSTOM_VAR: string;
 * }
 * ```
 */
declare global {
  interface ImportMetaEnv extends BaseImportMetaEnv {}
}

export {};
