import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/serverless';

import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import svelte from '@astrojs/svelte';
import ssrPrepass from 'react-ssr-prepass';
// https://astro.build/config
export default defineConfig({
    site: 'https://beat-one.vercel.app/',
    output: 'server',
    adapter: vercel({ webAnalytics: { enabled: true } }),
    integrations: [tailwind(), react(), svelte()],
    ssr: {
        async renderToHtml(render) {
            // Use react-ssr-prepass to ensure async rendering
            await ssrPrepass(render.result);
            return render.result;
        },
    },
});
