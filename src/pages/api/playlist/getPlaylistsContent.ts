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
    } = (await supabase.auth.getUser()) ?? null;
    console.log(user);

    const userdata = await user;
    //console.log(userdata);
    if (user) {
        //console.log(userdata?.id);

        let { data: playlists, error } = await supabase
            .from('playlists')
            .select('playlist_id, name , color, cover, artists')
            .eq('user_id', userdata?.id);

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
