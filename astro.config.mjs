import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/serverless';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import svelte from '@astrojs/svelte';

// https://astro.build/config
export default defineConfig({
    site: 'https://beat-one.vercel.app/',
    output: 'server',
    adapter: vercel({
        webAnalytics: {
            enabled: true,
        },
    }),
    integrations: [tailwind(), react(), svelte()],
});
