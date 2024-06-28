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
  const input = urlObject.searchParams.get("song") ?? null;
  if (input) {
    try {
      const req = await fetch(`https://api.deezer.com/search/track?q=${input}`);
      const res = await req.json();
      console.log(res);
      return new Response(JSON.stringify(res.data), {
        headers: { "content-type": "application/json" },
      });
    } catch (error) {
      return new Response(JSON.stringify({ error: "error" }), {
        headers: { "content-type": "application/json" },
      });
    }
  } else {
    const req = await fetch(`${urlObject.origin}/api/music/charts`);
    const res = await req.json();
    return new Response(JSON.stringify(res.tracks.data), {
      headers: { "content-type": "application/json" },
    });
  }
}
