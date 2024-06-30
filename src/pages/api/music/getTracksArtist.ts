export async function GET({ request }: { request: Request }) {
    const { url } = request;

    const urlObject = new URL(url);
    const id = urlObject.searchParams.get('id');
    const req = await fetch(`https://api.deezer.com/artist/${id}/top?limit=10`);

    const res = await req.json();

    //console.log(res);

    return new Response(JSON.stringify(res.data), {
        headers: { 'content-type': 'application/json' },
    });
}
