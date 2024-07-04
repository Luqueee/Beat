import { supabase } from '@/lib/supabase';

export async function GET({ params, request }: { params: any; request: any }) {
    // get the id from the url search params
    const { url } = request;
    const urlObject = new URL(url);
    const origin = urlObject.origin;

    const id = urlObject.searchParams.get('id');
    const album_id = urlObject.searchParams.get('album_id');

    let dataSongReq = await fetch(`${origin}/api/music/getTrack?id=${id}`);
    let dataSong = await dataSongReq.json();
    ////console.log(dataSong);

    const {
        data: { user },
    } = await supabase.auth.getUser();
    //console.log(user);
    if (user) {
        ////console.log(user.id);
        ////console.log(album_id, user.id, dataSong);

        ////console.log({  user_id: user.id,album_id: album_id, song_id: dataSong.youtubeId,data_song: dataSong,});

        const { data, error } = await supabase
            .from('albums')
            .insert([
                {
                    user_id: user.id,
                    album_id: album_id,
                    song_id: dataSong.id,
                    data_song: dataSong,
                },
            ])
            .select();

        if (error) {
            return new Response(error.message, { status: 500 });
        }

        return new Response(JSON.stringify({ data }), {
            headers: { 'content-type': 'application/json' },
        });
    } else {
        return new Response('no user found', { status: 500 });
    }
}
