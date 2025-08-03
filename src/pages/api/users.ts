import type { APIRoute } from 'astro';

// Mock-Daten für Benutzer
const users = [
  {
    id: 1,
    name: "Max Mustermann",
    email: "max@example.com",
    role: "admin",
    createdAt: "2024-01-15"
  },
  {
    id: 2,
    name: "Anna Schmidt",
    email: "anna@example.com",
    role: "user",
    createdAt: "2024-02-20"
  },
  {
    id: 3,
    name: "Tom Weber",
    email: "tom@example.com",
    role: "user",
    createdAt: "2024-03-10"
  }
];

export const GET: APIRoute = async ({ url }) => {
  const searchParams = url.searchParams;
  const id = searchParams.get('id');
  
  if (id) {
    const user = users.find(u => u.id === parseInt(id));
    if (user) {
      return new Response(JSON.stringify(user), {
        status: 200,
        headers: { "Content-Type": "application/json" }
      });
    } else {
      return new Response(JSON.stringify({ error: "Benutzer nicht gefunden" }), {
        status: 404,
        headers: { "Content-Type": "application/json" }
      });
    }
  }
  
  return new Response(JSON.stringify({
    users,
    total: users.length,
    timestamp: new Date().toISOString()
  }), {
    status: 200,
    headers: { "Content-Type": "application/json" }
  });
}

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.json();
    
    // Validierung
    if (!body.name || !body.email) {
      return new Response(JSON.stringify({
        error: "Name und Email sind erforderlich"
      }), {
        status: 400,
        headers: { "Content-Type": "application/json" }
      });
    }
    
    const newUser = {
      id: users.length + 1,
      name: body.name,
      email: body.email,
      role: body.role || "user",
      createdAt: new Date().toISOString().split('T')[0]
    };
    
    users.push(newUser);
    
    return new Response(JSON.stringify({
      message: "Benutzer erfolgreich erstellt",
      user: newUser
    }), {
      status: 201,
      headers: { "Content-Type": "application/json" }
    });
  } catch (error) {
    return new Response(JSON.stringify({
      error: "Ungültige Daten"
    }), {
      status: 400,
      headers: { "Content-Type": "application/json" }
    });
  }
} 