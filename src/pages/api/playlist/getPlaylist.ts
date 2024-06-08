import { supabase } from '@/lib/supabase';

export async function GET({
    params,
    request,
    redirect,
}: {
    params: any;
    request: any;
    redirect: any;
}) {
    // get the id from the url search params
    const { url } = request;
    const urlObject = new URL(url);
    const album_id = urlObject.searchParams.get('id');
    console.log(album_id);
    const {
        data: { user },
    } = await supabase.auth.getUser();

    const userdata = await user;
    console.log(userdata);
    try {
        console.log(userdata?.id);

        let { data: albums, error } = await supabase
            .from('albums')
            .select('album_id, song_id, data_song')
            .eq('user_id', userdata?.id)
            .eq('album_id', album_id);

        if (error) {
            return new Response(error.message, { status: 500 });
        }

        return new Response(JSON.stringify(albums), {
            headers: { 'content-type': 'application/json' },
        });
    } catch (error: any) {
        console.log(error.message);
        return redirect('/signin');
    }
}
