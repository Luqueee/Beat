import { supabase } from '@/lib/supabase';

export async function GET({
    request,
    redirect,
}: {
    request: Request;
    redirect: any;
}) {
    // get the id from the url search params

    //console.log(album_id);
    const {
        data: { user },
    } = (await supabase.auth.getUser()) ?? null;
    console.log(user);

    const { url } = request;
    const urlObject = new URL(url);
    const id = urlObject.searchParams.get('id');

    const userdata = await user;
    const { data: playlists, error } = await supabase
        .from('playlist_songs')
        .select('*')
        .eq('user_id', userdata?.id);

    if (error) {
        return new Response(error.message, { status: 500 });
    }

    const exists = playlists?.find(
        (playlist) =>
            playlist.user_id == userdata?.id && playlist.playlist_id == id
    );
    console.log(exists);
    if (typeof exists === 'undefined') {
        return new Response('Playlist not found', { status: 404 });
    }
    //console.log(userdata);
    if (user) {
        //console.log(userdata?.id);

        const { data: playlists, error } = await supabase
            .from('playlist_songs')
            .select('id, song_id , data_song')
            .eq('user_id', userdata?.id)
            .eq('playlist_id', id);

        console.log(playlists);

        if (error) {
            return new Response(error.message, { status: 500 });
        }

        return new Response(JSON.stringify(playlists), {
            headers: { 'content-type': 'application/json' },
        });
    } else {
        return redirect('/signin');
    }
}
