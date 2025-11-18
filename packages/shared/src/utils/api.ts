import { z } from 'zod';

/**
 * Standard API response structure
 */
export interface ApiResponse<T = unknown> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

/**
 * Email validation schema
 */
export const emailSchema = z
  .string()
  .email('Invalid email format')
  .min(1, 'Email is required');

/**
 * Common validation schemas
 */
export const validationSchemas = {
  email: emailSchema,
  name: z.string().min(1, 'Name is required').max(100, 'Name too long'),
  subject: z.string().min(1, 'Subject is required').max(200, 'Subject too long'),
  message: z.string().min(1, 'Message is required').max(5000, 'Message too long'),
} as const;

/**
 * Creates a standardized JSON response
 */
export function createResponse<T>(
  data: ApiResponse<T>,
  status = 200
): Response {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

/**
 * Creates a success response
 */
export function successResponse<T>(
  data?: T,
  message?: string,
  status = 200
): Response {
  return createResponse(
    {
      success: true,
      data,
      message,
    },
    status
  );
}

/**
 * Creates an error response
 */
export function errorResponse(
  error: string,
  status = 400
): Response {
  return createResponse(
    {
      success: false,
      error,
    },
    status
  );
}

/**
 * Validates email format using regex (fallback)
 */
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Validates request data against a Zod schema
 */
export async function validateRequest<T extends z.ZodTypeAny>(
  schema: T,
  data: unknown
): Promise<{ success: true; data: z.infer<T> } | { success: false; error: string }> {
  const result = schema.safeParse(data);

  if (!result.success) {
    const firstError = result.error.errors[0];
    return {
      success: false,
      error: firstError?.message || 'Validation failed',
    };
  }

  return {
    success: true,
    data: result.data,
  };
}

/**
 * Contact form validation schema
 */
export const contactFormSchema = z.object({
  name: validationSchemas.name,
  email: validationSchemas.email,
  subject: validationSchemas.subject,
  message: validationSchemas.message,
});

/**
 * Newsletter subscription schema
 */
export const newsletterSchema = z.object({
  email: validationSchemas.email,
});

/**
 * Type helpers
 */
export type ContactFormData = z.infer<typeof contactFormSchema>;
export type NewsletterData = z.infer<typeof newsletterSchema>;

/**
 * Simulates API delay (for demo purposes)
 */
export async function simulateDelay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * Common CORS headers (if needed)
 */
export const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
} as const;
