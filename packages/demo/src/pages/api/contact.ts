import {
  contactFormSchema,
  errorResponse,
  simulateDelay,
  successResponse,
  validateRequest,
} from '@astro-v5/shared/utils';
import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.json();

    // Validate request data with Zod schema
    const validation = await validateRequest(contactFormSchema, data);

    if (!validation.success) {
      return errorResponse(validation.error, 400);
    }

    const { name, email, subject, message } = validation.data;

    // Here you would typically:
    // 1. Send an email using a service like SendGrid, Resend, or AWS SES
    // 2. Save to a database
    // 3. Send to a webhook
    // 4. etc.

    // Simulate API delay
    await simulateDelay(1000);

    // Return success response
    return successResponse(
      { name, email, subject, message },
      'Your message has been sent successfully!',
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return errorResponse(
      'An error occurred while processing your request',
      500,
    );
  }
};

// GET endpoint to check API status
export const GET: APIRoute = async () => {
  return successResponse(
    {
      status: 'Contact API is running',
      accepts:
        'POST requests with JSON body containing: name, email, subject, message',
    },
    'API is operational',
  );
};
