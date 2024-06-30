/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            animation_bg: {
                backgroundPositionSpin:
                    'background-position-spin 3000ms infinite alternate',
            },
            keyframes_bg: {
                'background-position-spin': {
                    '0%': { backgroundPosition: 'top center' },
                    '100%': { backgroundPosition: 'bottom center' },
                },
            },

            animation: {
                marquee: 'marquee var(--duration) linear infinite',
                'marquee-vertical':
                    'marquee-vertical var(--duration) linear infinite',
            },
            keyframes: {
                marquee: {
                    from: { transform: 'translateX(0)' },
                    to: {
                        transform: 'translateX(calc(-100% - var(--gap)))',
                    },
                },
                'marquee-vertical': {
                    from: { transform: 'translateY(0)' },
                    to: {
                        transform: 'translateY(calc(-100% - var(--gap)))',
                    },
                },
            },
        },
    },
    plugins: [],
};
