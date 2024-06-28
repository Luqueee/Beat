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
  const song = urlObject.searchParams.get("song");
  const req = await fetch(`https://api.deezer.com/search?q=${song}`);

  const res = await req.json();

  console.log(res);

  return new Response(JSON.stringify(res), {
    headers: { "content-type": "application/json" },
  });
}
