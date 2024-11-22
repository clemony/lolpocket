//const animate = require('tailwindcss-animate')
const scrollbarhide = require('tailwind-scrollbar-hide')
const path = require('path')
const plugin = require('tailwindcss/plugin')
//import { mask } from '@windwards/plugin-mask'

/** @type {import('tailwindcss').Config} */
module.exports = {
    plugins: [
        // animate,
        scrollbarhide,
        // mask(),
        plugin(function ({ addBase }) {
            addBase({
                html: { fontSize: '12px' },
            })
        }),
    ],
    darkMode: ['class'],
    safelist: ['dark'],
    prefix: '',

    theme: {
        extend: {
            colors: {
                blues: '#7195AD',
                cyans: '#9AC4BF',
                'tea-rose': '#E2ACAC',
                'dark-rose': '#CE8E8E',
                'old-rose': '#CE8E8E',
                precision: '#ebcb8b',
                domination: '#bf616a',
                inspiration: '#A4C1C4',
                sorcery: '#b48dad',
                resolve: '#a3be8c',
                current: 'currentColor',
            },

            transitionProperty: {
                height: 'height',
                width: 'width',
                'max-h': 'max-height',
                'max-w': 'max-width',
            },

            boxShadow: {
                lil: '2px 2px 4px 1px rgba(0, 0, 0, 0, 0.3)',
                warm: '0px 2px 5px 0px rgba(50, 50, 105, 0.15) , 0px 1px 1px 0px rgba(0, 0, 0, 0.05) ',
                standard:
                    '0px 2px 3px -1px rgba(0,0,0,0.1),0px 1px 0px 0px rgba(25,28,33,0.02),0px 0px 0px 1px rgba(25,28,33,0.08)',
                cham: 'inset 12px 8px 40px #46464620',
                inset: 'inset 1px 2px 8px 2px #00000009, inset -2px -1px 5px 1px #00000009',
                'inset-sm':
                    'inset 1px 2px 1px 1px #00000004, inset -1px -1px 2px 1px #00000009',
                smooth: 'rgba(17, 17, 26, 0.07) 0px 0px 16px',
                pretty: '0 3px 10px rgb(0,0,0,0.2)',
            },
            dropShadow: {
                xs: '0px 0px 2px #00000020',
                soft: '0px 0px 1px #00000060',
                softer: '0px 0px 1px #00000040',
                softest: '0px 0px 1px #00000020',
            },

            keyframes: {
                'accordion-down': {
                    from: { height: 0 },
                    to: { height: 'var(--radix-accordion-content-height)' },
                },
                'accordion-up': {
                    from: { height: 'var(--radix-accordion-content-height)' },
                    to: { height: 0 },
                },
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
                'accordion-down': 'accordion-down 0.2s ease-in-out',
                'accordion-up': 'accordion-up 0.2s ease-in-out',
                'collapsible-down': 'collapsible-down 0.2s ease-in-out',
                'collapsible-up': 'collapsible-up 0.2s ease-in-out',
            },
        },
        container: {
            center: true,
            padding: '2rem',
            screens: {},
            borderRadius: {
                xl: '1rem',
                lg: '0.7rem',
                md: '0.5rem',
                DEFAULT: '0.3rem',
                sm: '4px',
            },
        },
    },
}
