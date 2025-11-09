import type { APIRoute } from 'astro';

export const GET: APIRoute = async () => {
  return new Response(
    JSON.stringify({
      message: 'Hello from the Astro API!',
      timestamp: new Date().toISOString(),
      version: '1.0.0',
      features: ['TypeScript', 'Astro', 'Tailwind', 'Svelte'],
    }),
    {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    },
  );
};

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.json();

    return new Response(
      JSON.stringify({
        message: 'Data received successfully!',
        receivedData: body,
        timestamp: new Date().toISOString(),
      }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );
  } catch (_error) {
    return new Response(
      JSON.stringify({
        error: 'Invalid JSON data',
      }),
      {
        status: 400,
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );
  }
};
