export async function GET({ request }: { request: Request }) {
    const { url } = request;

    const urlObject = new URL(url);
    const song = urlObject.searchParams.get('song');
    const req = await fetch(`https://api.deezer.com/search?q=${song}`);

    const res = await req.json();

    console.log(res);

    return new Response(JSON.stringify(res), {
        headers: { 'content-type': 'application/json' },
    });
}
