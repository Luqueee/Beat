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
    const song_id = urlObject.searchParams.get('id');
    const playlist_id = urlObject.searchParams.get('playlist');

    //console.log(album_id);
    const {
        data: { user },
    } = await supabase.auth.getUser();

    const userdata = await user;

    const song_data = await fetch(
        `${urlObject.origin}/api/music/getTrack?id=${song_id}`
    );
    const song = await song_data.json();
    //console.log(song);
    //console.log(userdata);
    try {
        //console.log(userdata?.id);

        let { data: playlists, error } = await supabase
            .from('playlists')
            .select('*')
            .eq('user_id', userdata?.id);

        if (error) {
            return new Response(error.message, { status: 500 });
        } else {
            let { data: playlistsData, error } = await supabase
                .from('playlists')
                .select('*')
                .eq('user_id', userdata?.id);

            console.log(playlistsData);
            console.log(playlists);

            const exists = playlists?.find(
                (playlist) => playlist.playlist_id == playlist_id
            );

            // TODO: Verificar si la cancion dentro de la playlist existe dentro de la base de datos. En el caso que sea asi, se devolvera 404.

            console.log(exists);
            if (typeof exists === 'undefined') {
                return new Response('Playlist not found', { status: 404 });
            } else {
                console.log('playlist exists');
                const existsSong = exists?.find(
                    (exist: any) => exist.id == playlist_id
                );
            }

            if (error) {
                return new Response(error.message, { status: 500 });
            } else {
                const { data, error } = await supabase
                    .from('playlist_songs')
                    .insert([
                        {
                            user_id: userdata?.id,
                            song_id: song.id,
                            data_song: song,
                            playlist_id: playlist_id,
                        },
                    ])
                    .select();

                if (error) {
                    return new Response(error.message, { status: 500 });
                }

                return new Response(JSON.stringify(data), {
                    headers: { 'content-type': 'application/json' },
                });
            }
        }
    } catch (error: any) {
        console.log(error.message);
        return redirect('/signin');
    }
}
