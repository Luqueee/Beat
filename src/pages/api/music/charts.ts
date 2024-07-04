export async function GET() {
    ////console.log(res);
    try {
        const req = await fetch(`https://api.deezer.com/chart`);
        const res = await req.json();
        return new Response(JSON.stringify(res), {
            headers: { 'content-type': 'application/json' },
        });
    } catch (error) {
        return new Response(JSON.stringify({ error: 'error' }), {
            headers: { 'content-type': 'application/json' },
        });
    }
}
