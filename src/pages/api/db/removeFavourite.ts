import { supabase } from '@/lib/supabase';

export async function GET({ request }: { request: Request }) {
    // get the id from the url search params
    const { url } = request;
    const urlObject = new URL(url);

    const id = urlObject.searchParams.get('id');
    const album = urlObject.searchParams.get('album');
    const {
        data: { user },
    } = await supabase.auth.getUser();
    if (user) {
        const { error } = await supabase
            .from('albums')
            .delete()
            .eq('song_id', id)
            .eq('user_id', user?.id)
            .eq('album_id', album);

        if (error) {
            return new Response(error.message, { status: 500 });
        }

        return new Response(JSON.stringify({ data: 'success' }));
    } else {
        return new Response('no user found', { status: 500 });
    }
}
