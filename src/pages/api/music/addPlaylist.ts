import { supabase } from '@/lib/supabase';

// Intentar usar una store para no tener que hacer fetch a la api para verificar q si es favorito

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

    const name = urlObject.searchParams.get('name');
    const description = urlObject.searchParams.get('description');

    //console.log(userdata);
    try {
        //console.log(userdata?.id);
        //console.log(track, track.id);
        const { data, error } = await supabase
            .from('playlists')
            .insert([
                {
                    user_id: userdata?.id,
                    name: name,
                    description: description,
                },
            ])
            .select();

        if (error) {
            return new Response(JSON.stringify(null), {
                headers: { 'content-type': 'application/json' },
            });
        }

        return new Response(JSON.stringify(data), {
            headers: { 'content-type': 'application/json' },
        });
    } catch (error: any) {
        console.log(error.message);
        return redirect('/signin');
    }
}
