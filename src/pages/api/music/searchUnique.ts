import { searchMusics } from 'node-youtube-music';

export async function GET({
    params,
    request,
}: {
    params: any;
    request: Request;
}) {
    const { url } = request;
    const urlObject = new URL(url);
    const input = urlObject.searchParams.get('song') ?? '';
    const main = () => searchMusics(input);

    return main()
        .then((data) => {
            //console.log(data);
            return new Response(JSON.stringify(data[0]), {
                headers: { 'content-type': 'application/json' },
            });
        })
        .catch((error) => {
            return new Response(error.message, { status: 500 });
        });
}
