import type { APIRoute } from 'astro';
import { supabase } from '../../../lib/supabase';
import type { Provider } from '@supabase/supabase-js';

export const GET: APIRoute = async ({ url, cookies, redirect }) => {
    const urlData = new URL(url);
    const urlOrigin = urlData.origin;
    console.log(urlOrigin);
    const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'google' as Provider,
        options: {
            redirectTo: `${urlOrigin}/api/auth/callback`,
        },
    });
    console.log(data, error);

    if (data.url) {
        return redirect(data.url); // use the redirect API for your server framework
    }

    if (error) {
        return new Response(error.message, { status: 500 });
    }

    return redirect('/dashboard');
};
