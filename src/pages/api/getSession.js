import { supabase } from '../../lib/supabase';

export async function GET({ params, request }) {
    const { data, error } = await supabase.auth.getSession();

    if (error) {
        return new Response(error.message, { status: 500 });
    }

    return new Response(JSON.stringify(data.session), {
        headers: { 'content-type': 'application/json' },
    });
}
