export async function GET({
    params,
    request,
}: {
    params: any;
    request: Request;
}) {
    const { url } = request;

    const APIKEY = process.env.YOUTUBE_API_KEY;

    const urlObject = new URL(url);
    const songid = urlObject.searchParams.get('song');
    const req = await fetch(
        `https://www.googleapis.com/youtube/v3/videos?part=id%2C+snippet&id=${songid}&key=AIzaSyBKbmzh8XptmMBLnG9L8byBijmuL92fmwU`
    );

    const res = await req.json();

    console.log(res);

    return new Response(JSON.stringify(res), {
        headers: { 'content-type': 'application/json' },
    });
}
