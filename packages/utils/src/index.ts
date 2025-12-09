/**
 * Shared utilities for Astro v5 template
 * Re-exports all utility modules for convenient importing
 */

// API utilities
export {
  type ApiResponse,
  type ContactFormData,
  contactFormSchema,
  corsHeaders,
  createResponse,
  emailSchema,
  errorResponse,
  isValidEmail,
  type NewsletterData,
  newsletterSchema,
  simulateDelay,
  successResponse,
  validateRequest,
  validationSchemas,
} from './api';
// Environment validation utilities
export { type BaseEnv, baseEnvSchema, createEnvSchema, validateEnv } from './env';

// Sitemap utilities
export {
  createSitemapRoute,
  generateSitemapPages,
  generateSitemapXML,
  getSitemapUrls,
  type SitemapConfig,
  type SitemapPage,
} from './sitemap';
