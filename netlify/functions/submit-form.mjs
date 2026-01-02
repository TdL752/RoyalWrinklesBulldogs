import { neon } from '@neondatabase/serverless';

export default async (req, context) => {
    if (req.method !== "POST") {
        return new Response("Method Not Allowed", { status: 405 });
    }

    try {
        const formData = await req.formData();
        
        // NEW: Try 3 different ways to get the connection string
        const connectionString = 
            process.env.DATABASE_URL || 
            process.env.NETLIFY_DATABASE_URL || 
            (typeof Netlify !== 'undefined' ? Netlify.env.get("DATABASE_URL") : null);

        if (!connectionString) {
            console.error("LOG: No connection string found in any environment.");
            return new Response("Database setup incomplete", { status: 500 });
        }

        const sql = neon(connectionString);
        
        const name = formData.get("name");
        const email = formData.get("email");
        const phone = formData.get("phone");
        const message = formData.get("questions");

        await sql`
            INSERT INTO contacts (name, email, phone, message)
            VALUES (${name}, ${email}, ${phone}, ${message})
        `;

        return new Response(null, {
            status: 302,
            headers: { "Location": "/thanks.html" }
        });

    } catch (error) {
        console.error("Database Error:", error);
        return new Response("Error: " + error.message, { status: 500 });
    }
};
