export async function GET({
    params,
    request,
}: {
    params: any;
    request: Request;
}) {
    const { url } = request;
    const urlObject = new URL(url);

    //const main = () => searchMusics(input);

    try {
        const input = urlObject.searchParams.get('song') ?? null;
        const req = await fetch(
            `https://api.deezer.com/search/track?q=${input}`
        );
        const res = await req.json();
        console.log(res);
        return new Response(JSON.stringify(res.data), {
            headers: { 'content-type': 'application/json' },
        });
    } catch (error) {
        return new Response(JSON.stringify({ error: 'error' }), {
            headers: { 'content-type': 'application/json' },
        });
    }
}
