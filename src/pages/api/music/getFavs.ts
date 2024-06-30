import { supabase } from '@/lib/supabase';

export async function GET({ redirect }: { redirect: any }) {
    // get the id from the url search params

    //console.log(album_id);
    const {
        data: { user },
    } = await supabase.auth.getUser();

    const userdata = await user;
    //console.log(userdata);
    try {
        //console.log(userdata?.id);

        const { data: playlists, error } = await supabase
            .from('favs')
            .select('data_song')
            .eq('user_id', userdata?.id);

        if (error) {
            return new Response(error.message, { status: 500 });
        }

        const songs = playlists?.map((playlist) => playlist.data_song) ?? [];

        return new Response(JSON.stringify(songs), {
            headers: { 'content-type': 'application/json' },
        });
    } catch (error: any) {
        console.log(error.message);
        return redirect('/signin');
    }
}
