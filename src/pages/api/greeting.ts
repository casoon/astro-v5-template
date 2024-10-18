export async function GET() {
    return new Response(JSON.stringify({ message: 'Hello from Astro API!' }), {
        headers: { 'Content-Type': 'application/json' },
    });
}
