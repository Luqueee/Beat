/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            animation: {
                backgroundPositionSpin:
                    'background-position-spin 3000ms infinite alternate',
            },
            keyframes: {
                'background-position-spin': {
                    '0%': { backgroundPosition: 'top center' },
                    '100%': { backgroundPosition: 'bottom center' },
                },
            },
        },
    },
    plugins: [],
};
