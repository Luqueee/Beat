export async function GET({
    params,
    request,
}: {
    params: any;
    request: Request;
}) {
    const req = await fetch(`https://api.deezer.com/chart`);
    const res = await req.json();

    //console.log(res);

    return new Response(JSON.stringify(res), {
        headers: { 'content-type': 'application/json' },
    });
}
