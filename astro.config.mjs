import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel/serverless';
import compressor from 'astro-compressor';
import { defineConfig } from 'astro/config';
// https://astro.build/config
export default defineConfig({
    site: 'https://beat-one.vercel.app/',
    output: 'server',
    prefetch: true,

    integrations: [
        tailwind(),

        compressor({
            gzip: false,
            brotli: true,
        }),
        react(),
    ],
    experimental: {
        clientPrerender: true,
        directRenderScript: true,
    },
    adapter: vercel({
        webAnalytics: {
            enabled: true,
        },
    }),
});
