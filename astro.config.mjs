import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/serverless';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import svelte from '@astrojs/svelte';
import minify from 'astro-min';
import compressor from 'astro-compressor';

// https://astro.build/config
export default defineConfig({
    site: 'https://beat-one.vercel.app/',
    output: 'server',
    adapter: vercel({
        webAnalytics: {
            enabled: true,
        },
    }),
    integrations: [
        tailwind(),
        react(),
        svelte(),
        minify({
            do_not_minify_doctype: false,
            // ensure_spec_compliant_unquoted_attribute_values: false,
            // keep_closing_tags: false,
            // keep_comments: false,
            // keep_html_and_head_opening_tags: false,
            // keep_input_type_text_attr: false,
            // keep_spaces_between_attributes: false,
            // keep_ssi_comments: false,
            minify_css: true,
            minify_js: true,
            // preserve_brace_template_syntax: false,
            // preserve_chevron_percent_template_syntax: false,
            // remove_bangs: false,
            // remove_processing_instructions: false,
        }),
        compressor(),
    ],
});
