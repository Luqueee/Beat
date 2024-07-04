import { supabase } from '@/lib/supabase';

export async function GET({
    request,
    redirect,
}: {
    request: Request;
    redirect: any;
}) {
    // get the id from the url search params

    ////console.log(album_id);
    const {
        data: { user },
    } = await supabase.auth.getUser();

    const userdata = await user;
    const { url } = request;

    const urlObject = new URL(url);

    const id = urlObject.searchParams.get('id');

    try {
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
        return redirect('/signin');
    }
}
