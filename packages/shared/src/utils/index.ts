/**
 * Shared utilities for Astro v5 template
 * Re-exports all utility modules for convenient importing
 */

// Environment validation utilities
export {
  baseEnvSchema,
  validateEnv,
  createEnvSchema,
  type BaseEnv,
} from "./env";

// API utilities
export {
  emailSchema,
  validationSchemas,
  createResponse,
  successResponse,
  errorResponse,
  isValidEmail,
  validateRequest,
  contactFormSchema,
  newsletterSchema,
  simulateDelay,
  corsHeaders,
  type ApiResponse,
  type ContactFormData,
  type NewsletterData,
} from "./api";

// Sitemap utilities
export {
  getSitemapUrls,
  createSitemapRoute,
  generateSitemapPages,
  generateSitemapXML,
  type SitemapPage,
  type SitemapConfig,
} from "./sitemap";
