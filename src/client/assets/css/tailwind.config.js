const path = require('path')
import tailwindcss from 'tailwindcss'

const plugin = require('tailwindcss/plugin')
//const radix = require('tailwindcss-radix')
import { mask } from '@windwards/plugin-mask'

/** @type {import('tailwindcss').Config} */
module.exports = {
    plugins: [
        // radix,
        mask(),
        plugin(function ({ addBase }) {
            addBase({
                html: { fontSize: '14px' },
            })
        }),
    ],

    content: ['./index.html', '@/client/**/*.{js,ts,jsx,tsx}'],
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
