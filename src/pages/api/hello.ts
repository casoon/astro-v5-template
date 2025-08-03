import type { APIRoute } from 'astro';

export const GET: APIRoute = async ({ params, request }) => {
  return new Response(JSON.stringify({
    message: "Hallo von der Astro API!",
    timestamp: new Date().toISOString(),
    version: "1.0.0",
    features: ["TypeScript", "Astro", "Tailwind", "Svelte"]
  }), {
    status: 200,
    headers: {
      "Content-Type": "application/json"
    }
  });
}

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.json();
    
    return new Response(JSON.stringify({
      message: "Daten erfolgreich empfangen!",
      receivedData: body,
      timestamp: new Date().toISOString()
    }), {
      status: 200,
      headers: {
        "Content-Type": "application/json"
      }
    });
  } catch (error) {
    return new Response(JSON.stringify({
      error: "Ungültige JSON-Daten"
    }), {
      status: 400,
      headers: {
        "Content-Type": "application/json"
      }
    });
  }
} 