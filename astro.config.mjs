import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/serverless';

import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import svelte from '@astrojs/svelte';
import ssrPrepass from 'react-ssr-prepass';

// https://astro.build/config
export default defineConfig({
    site: 'https://astro-supabase-auth.vercel.app',
    output: 'server',
    adapter: vercel(),
    integrations: [tailwind(), react(), svelte()],
});
