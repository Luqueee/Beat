export async function GET({ params, request }: { params: any; request: any }) {
  const { url } = request;
  const urlObject = new URL(url);
  const songid = urlObject.searchParams.get("song") ?? "";
  const main = () => fetch(`https://img.youtube.com/vi/${songid}/0.jpg`);

  return main()
    .then((data) => {
      return new Response(JSON.stringify([data]), {
        headers: { "content-type": "application/json" },
      });
    })
    .catch((error) => {
      return new Response(error.message, { status: 500 });
    });
}
