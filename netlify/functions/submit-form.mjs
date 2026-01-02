import { neon } from '@neondatabase/serverless';

export default async (req) => {
    // 1. Check if the variable exists at all
    const dbUrl = process.env.DATABASE_URL;

    if (!dbUrl) {
        console.error("DEBUG ERROR: DATABASE_URL is undefined!");
        return Response.json({ error: 'Missing Connection String' }, { status: 500 });
    }

    try {
        const formData = await req.formData();
        const sql = neon(dbUrl);

        // 2. Simple insert
        await sql`
            INSERT INTO contacts (name, email, phone, message)
            VALUES (
                ${formData.get("name")}, 
                ${formData.get("email")}, 
                ${formData.get("phone")}, 
                ${formData.get("questions")}
            )
        `;

        // 3. Success redirect
        return new Response(null, {
            status: 302,
            headers: { "Location": "/thanks.html" }
        });

    } catch (error) {
        console.error("SQL ERROR:", error);
        return Response.json({ error: error.message }, { status: 500 });
    }
};
