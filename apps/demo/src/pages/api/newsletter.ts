import {
  errorResponse,
  newsletterSchema,
  simulateDelay,
  successResponse,
  validateRequest,
} from '@astro-v5/utils';
import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.json();

    // Validate request data with Zod schema
    const validation = await validateRequest(newsletterSchema, data);

    if (!validation.success) {
      return errorResponse(validation.error, 400);
    }

    const { email } = validation.data;

    // Here you would typically:
    // 1. Add to email service (Mailchimp, ConvertKit, etc.)
    // 2. Save to database
    // 3. Send confirmation email
    // 4. etc.

    // Simulate API delay
    await simulateDelay(500);

    // Return success response
    return successResponse({ email }, 'Successfully subscribed to newsletter!');
  } catch (error) {
    console.error('Newsletter subscription error:', error);
    return errorResponse('An error occurred while processing your subscription', 500);
  }
};

// GET endpoint to check API status
export const GET: APIRoute = async () => {
  return successResponse(
    {
      status: 'Newsletter API is running',
      accepts: 'POST requests with JSON body containing: email',
    },
    'API is operational'
  );
};
