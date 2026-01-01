import { neon } from '@neondatabase/serverless';

export default async (req, context) => {
    if (req.method !== "POST") {
        return new Response("Method Not Allowed", { status: 405 });
    }

    try {
        const formData = await req.formData();
        
        const name = formData.get("name");
        const email = formData.get("email");
        const phone = formData.get("phone");
        const message = formData.get("questions");

        const sql = neon();

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
        return new Response("Error saving to database", { status: 500 });
    }
};