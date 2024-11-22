//const animate = require('tailwindcss-animate')
const scrollbarhide = require('tailwind-scrollbar-hide')
/*const colors = require("tailwindcss/colors");*/
const path = require('path')
//const daisyui = require('daisyui')
const plugin = require('tailwindcss/plugin')
//import { mask } from '@windwards/plugin-mask'
//const themer = require('tailwindcss-themer')

/** @type {import('tailwindcss').Config} */
module.exports = {
    plugins: [
       // animate,
        scrollbarhide,
        daisyui,
        //themer(themeConfig),
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
    content: [
        './pages/**/*.{ts,tsx,vue,js,jsx}',
        './components/**/*.{ts,tsx,vue,js,jsx}',
        './app/**/*.{ts,tsx,vue,js,jsx}',
        './src/**/*.{ts,tsx,vue,js,jsx}',
        './src/assets/presets/',
        path.join(__dirname, './pages/**/*.{js,ts,jsx,tsx}'),
        path.join(__dirname, './components/**/*.{js,ts,jsx,tsx}'),
    ],

    theme: {
        fontFamily: {
            sans: ['Geist Sans', 'sans-serif'],
            serif: ['Roboto Serif Variable', 'serif'],
            mono: ['Geist Mono', 'monospace'],
        },

        fontSize: {
            xs: ['0.8rem', { lineHeight: '1rem' }],
            sm: ['0.93rem', { lineHeight: '1.25rem' }],
            base: ['1rem', { lineHeight: '1.5rem' }],
            lg: ['1.125rem', { lineHeight: '1.75rem' }],
            xl: ['1.25rem', { lineHeight: '1.75rem' }],
            '2xl': ['1.5rem', { lineHeight: '2rem' }],
            '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
            '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        },

        extend: {
            containers: {
                'header-min': '230px',
            },
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
            flexBasis: {
                18: '4.5rem',
                22: '5.5rem',
                26: '6.5rem',
            },
            fontSize: {
                'sm+': ['0.97rem', { lineHeight: '1.4rem' }],

                md: ['1.075rem', { lineHeight: '1.5rem' }],
                'lg+': ['1.2rem', { lineHeight: '1.55rem' }],
            },
            transitionProperty: {
                height: 'height',
                width: 'width',
                'max-h': 'max-height',
                'max-w': 'max-width',
            },
            height: {
                stretch: 'stretch',
                4.5: '1.1rem',
                5.5: '1.35rem',
                18: '4.5rem',
                22: '5.5rem',
                26: '6.5rem',
                inherit: 'inherit',
            },
            width: {
                stretch: 'stretch',
                4.5: '1.1rem',
                5.5: '1.35rem',
                18: '4.5rem',
                22: '5.5rem',
                26: '6.5rem',
                inherit: 'inherit',
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
            size: {
                4.5: '1.1rem',
                5.5: '1.35rem',
                18: '4.5rem',
                22: '5.5rem',
                26: '6.5rem',
            },
            borderRadius: {
                xs: '4px',
            },
            spacing: {
                '2px': '2px',
                4.5: '1.1rem',
                5.5: '1.35rem',
                18: '4.5rem',
                22: '5.5rem',
                26: '6.5rem',
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
