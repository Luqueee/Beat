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

    const trackReq = await fetch(
        `${urlObject.origin}/api/music/getTrack?id=${id}`
    );
    const track = await trackReq.json();

    //console.log(userdata);
    try {
        //console.log(userdata?.id);
        console.log(track, track.id);

        const { error } = await supabase
            .from('favs')
            .delete()
            .eq('user_id', userdata?.id)
            .eq('song_id', id);

        if (error) {
            return new Response(JSON.stringify(null), {
                headers: { 'content-type': 'application/json' },
            });
        }

        return new Response(JSON.stringify(true), {
            headers: { 'content-type': 'application/json' },
        });
    } catch (error: any) {
        console.log(error.message);
        return redirect('/signin');
    }
}
