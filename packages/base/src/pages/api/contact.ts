import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.json();
    const { name, email, subject, message } = data;

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return new Response(
        JSON.stringify({
          success: false,
          error: 'All fields are required'
        }),
        {
          status: 400,
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(
        JSON.stringify({
          success: false,
          error: 'Invalid email format'
        }),
        {
          status: 400,
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );
    }

    // Here you would typically:
    // 1. Send an email using a service like SendGrid, Resend, or AWS SES
    // 2. Save to a database
    // 3. Send to a webhook
    // 4. etc.

    // For demo purposes, we'll just log the data
    console.log('Contact form submission:', {
      name,
      email,
      subject,
      message,
      timestamp: new Date().toISOString()
    });

    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Return success response
    return new Response(
      JSON.stringify({
        success: true,
        message: 'Your message has been sent successfully!'
      }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    
    return new Response(
      JSON.stringify({
        success: false,
        error: 'An error occurred while processing your request'
      }),
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );
  }
};

// Optionally handle GET requests to check endpoint status
export const GET: APIRoute = async () => {
  return new Response(
    JSON.stringify({
      status: 'Contact API is running',
      accepts: 'POST requests with JSON body containing: name, email, subject, message'
    }),
    {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    }
  );
};