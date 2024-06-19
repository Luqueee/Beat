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

    //console.log(album_id);
    const {
        data: { user },
    } = await supabase.auth.getUser();

    const userdata = await user;
    const { url } = request;

    const urlObject = new URL(url);
    const id = urlObject.searchParams.get('id');
    //console.log(userdata);
    try {
        //console.log(userdata?.id);

        let { data: playlists, error } = await supabase
            .from('favs')
            .select('*')
            .in('song_id', [id])
            .eq('user_id', userdata?.id);

        if (error) {
            return new Response(JSON.stringify(null), {
                headers: { 'content-type': 'application/json' },
            });
        }

        const songs = playlists?.map((playlist) => playlist.data_song) ?? [];

        if (songs.length > 0) {
            return new Response(JSON.stringify(songs), {
                headers: { 'content-type': 'application/json' },
            });
        } else {
            return new Response(JSON.stringify(null), {
                headers: { 'content-type': 'application/json' },
            });
        }
    } catch (error: any) {
        console.log(error.message);
        return redirect('/signin');
    }
}
