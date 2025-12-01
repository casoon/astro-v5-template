import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.json();
    const { email } = data;

    // Validate email
    if (!email) {
      return new Response(
        JSON.stringify({
          success: false,
          error: 'Email is required',
        }),
        {
          status: 400,
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(
        JSON.stringify({
          success: false,
          error: 'Invalid email format',
        }),
        {
          status: 400,
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
    }

    // Here you would typically:
    // 1. Add to email service (Mailchimp, ConvertKit, etc.)
    // 2. Save to database
    // 3. Send confirmation email
    // 4. etc.

    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 500));

    // Return success response
    return new Response(
      JSON.stringify({
        success: true,
        message: 'Successfully subscribed to newsletter!',
      }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  } catch (error) {
    console.error('Newsletter subscription error:', error);

    return new Response(
      JSON.stringify({
        success: false,
        error: 'An error occurred while processing your subscription',
      }),
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  }
};

// GET endpoint to check status
export const GET: APIRoute = async () => {
  return new Response(
    JSON.stringify({
      status: 'Newsletter API is running',
      accepts: 'POST requests with JSON body containing: email',
    }),
    {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );
};
