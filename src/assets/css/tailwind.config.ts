/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')
export default {
    plugins: [
        plugin(function ({ addBase }) {
            addBase({
                html: { fontSize: '12px' },
            })
        }),
    ],
    theme: {
        extend: {
            keyframes: {
                'collapsible-down': {
                    from: { height: 0 },
                    to: { height: 'var(--radix-collapsible-content-height)' },
                },
                'collapsible-up': {
                    from: { height: 'var(--radix-collapsible-content-height)' },
                    to: { height: 0 },
                },
            },
            animation: {
                'collapsible-down': 'collapsible-down 0.2s ease-in-out',
                'collapsible-up': 'collapsible-up 0.2s ease-in-out',
            },
        },
    },
}
