const animate = require('tailwindcss-animate')
const scrollbarhide = require('tailwind-scrollbar-hide')
/*const colors = require("tailwindcss/colors");*/
const path = require('path')
const daisyui = require('daisyui')
const plugin = require('tailwindcss/plugin')
const containerQueries = require('@tailwindcss/container-queries')
const radix = require('tailwindcss-radix')
import { mask } from '@windwards/plugin-mask'
//const themer = require('tailwindcss-themer')

/** @type {import('tailwindcss').Config} */
module.exports = {
    plugins: [
        animate,
        scrollbarhide,
        daisyui,
        radix,
        containerQueries,
        //themer(themeConfig),
        mask(),
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
            serif: ['Noto Serif Georgian Variable', 'serif'],
            mono: ['Victor Mono Variable', 'monospace'],
        },

        fontSize: {
            xs: ['var(--text-1)', { lineHeight: '1rem' }],
            sm: ['var(--text-2)', { lineHeight: '1.5rem' }],
            base: ['var(--text-3)', { lineHeight: '1.5rem' }],
            lg: ['var(--text-4)', { lineHeight: '1.75rem' }],
            xl: ['var(--text-5)', { lineHeight: '1.75rem' }],
            6: ['var(--text-6)', { lineHeight: '1.75rem' }],
            '2xl': ['var(--text-7)', { lineHeight: '2rem' }],
            '3xl': [' var(--text-8) ', { lineHeight: '2.25rem' }],
            '4xl': ['var(--text-9)', { lineHeight: '2.5rem' }],
            '5xl': ['var(--text-10)', { lineHeight: '1' }],
            '6xl': ['var(--text-11)', { lineHeight: '1' }],
            '7xl': ['var(--text-12)', { lineHeight: '1' }],
            '8xl': ['var(--text-13)', { lineHeight: '1' }],
            '9xl': ['var(--text-14)', { lineHeight: '1' }],
        },

        extend: {
            containers: {
                'header-min': '230px',
            },
            colors: {
                'tea-rose': '#E2ACAC',
                'dark-rose': '#CE8E8E',
                'old-rose': '#CE8E8E',
                current: 'currentColor',

                precision: 'var(--precision)',
                'precision-light': 'var(--precision-light)',

                domination: 'var(--domination)',
                'domination-light': 'var(--domination-light)',

                sorcery: 'var(--sorcery)',
                'sorcery-light': 'var(--sorcery-light)',

                resolve: 'var(--resolve)',
                'resolve-light': 'var(--resolve-light)',

                inspiration: 'var(--inspiration)',
                'inspiration-light': 'var(--inspiration-light)',

                empty: 'var(--empty)',
                'empty-light': 'var(--empty-light)',
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

    daisyui: {
        themes: [
            {
                lightminimalist: {
                    ...require('daisyui/src/theming/themes')['light'],
                    'base-100': 'oklch(100% 0 0)',
                    'base-200': 'oklch(93% 0 0)',
                    'base-300': 'oklch(86% 0 0)',
                    'base-content': 'oklch(22.3899% 0.031305 278.07229)',
                    primary: '#0D0D0D',
                    'primary-content': 'oklch(100% 0 0)',
                    secondary: '#1A1919',
                    'secondary-content': 'oklch(100% 0 0)',
                    accent: '#262626',
                    'accent-content': 'oklch(100% 0 0)',
                    neutral: '#000000',
                    'neutral-content': 'oklch(100% 0 0)',
                    info: '#B48EAD',
                    success: '#A3BE8C',
                    warning: '#EBCB8B',
                    error: '#BF616A',
                    'info-content': 'oklch(22.3899% 0.031305 278.07229)',
                },

                lightaesthetic: {
                    ...require('daisyui/src/theming/themes')['light'],
                    'base-100': 'oklch(100% 0 0)',
                    'base-200': 'oklch(93% 0 0)',
                    'base-300': 'oklch(86% 0 0)',
                    'base-content': 'oklch(22.3899% 0.031305 278.07229)',

                    'primary-content': 'oklch(22.3899% 0.031305 278.07229)',

                    'secondary-content': 'oklch(22.3899% 0.031305 278.07229)',

                    'accent-content': 'oklch(22.3899% 0.031305 278.07229)',
                    neutral: '#4C566A',
                    'neutral-content': '#D8DEE9',
                    primary: '#B6E2DD',
                    secondary: '#FBB39D',
                    accent: '#FBC99D',
                    info: '#CCB9D6',
                    success: '#C8DDBB',
                    warning: '#FBDF9D',
                    error: '#FBA09D',
                    'error-content': '#B6E2DD',
                    'info-content': 'oklch(22.3899% 0.031305 278.07229)',
                },
                lightnord: {
                    ...require('daisyui/src/theming/themes')['light'],
                    'base-100': 'oklch(100% 0 0)',
                    'base-200': 'oklch(93% 0 0)',
                    'base-300': 'oklch(86% 0 0)',
                    'base-content': 'oklch(22.3899% 0.031305 278.07229)',

                    'primary-content': 'oklch(22.3899% 0.031305 278.07229)',

                    'secondary-content': 'oklch(22.3899% 0.031305 278.07229)',

                    'accent-content': 'oklch(22.3899% 0.031305 278.07229)',
                    neutral: '#4C566A',
                    'neutral-content': '#D8DEE9',
                    primary: '#5E81AC',
                    secondary: '#81A1C1',
                    accent: '#88C0D0',
                    info: '#B48EAD',
                    success: '#A3BE8C',
                    warning: '#EBCB8B',
                    error: '#BF616A',
                    'info-content': 'oklch(22.3899% 0.031305 278.07229)',
                },

                lightlatte: {
                    ...require('daisyui/src/theming/themes')['light'],
                    'base-100': 'oklch(100% 0 0)',
                    'base-200': 'oklch(93% 0 0)',
                    'base-300': 'oklch(86% 0 0)',
                    'base-content': 'oklch(22.3899% 0.031305 278.07229)',

                    'primary-content': 'oklch(22.3899% 0.031305 278.07229)',

                    'secondary-content': 'oklch(22.3899% 0.031305 278.07229)',

                    'accent-content': 'oklch(22.3899% 0.031305 278.07229)',
                    neutral: '#252525',
                    'neutral-content': '#D8DEE9',
                    primary: 'C6B3A4',
                    secondary: 'B7A190',
                    accent: '988270',

                    info: '#82707D',
                    success: '#A5A58D',
                    warning: '#EBCB8B',
                    error: '#966666',

                    'error-content': '#6B7384',
                },

                darkminimalist: {
                    ...require('daisyui/src/theming/themes')['dark'],
                    'base-100': '#252525',
                    'base-200': '#1e1e1e',
                    'base-300': '#161616',
                    'base-content': 'oklch( 84.8707% 0 0)',
                    neutral: '#000000',
                    'neutral-content': 'oklch(100% 0 0)',
                    primary: 'oklch( 84.8707% 0 0)',
                    secondary: 'oklch( 84.8707% 0 0)',
                    accent: 'oklch( 84.8707% 0 0)',
                    info: '#B48EAD',
                    success: '#A3BE8C',
                    warning: '#EBCB8B',
                    error: '#BF616A',
                },

                darkaesthetic: {
                    ...require('daisyui/src/theming/themes')['dark'],
                    'base-100': 'oklch( 24.3535% 0 0)',
                    'base-200': 'oklch( 22.6487% 0 0)',
                    'base-300': 'oklch( 20.944% 0 0)',
                    'base-content': 'oklch( 84.8707% 0 0)',
                    neutral: 'oklch( 84.8707% 0 0)',
                    'neutral-content': 'oklch( 85.4882% 0.00265 253.041249)',
                    'primary-content': 'oklch(22.3899% 0.031305 278.07229)',

                    'secondary-content': 'oklch(22.3899% 0.031305 278.07229)',

                    'accent-content': 'oklch(22.3899% 0.031305 278.07229)',
                    neutral: '#000000',
                    'neutral-content': 'oklch(100% 0 0)',
                    primary: '#B6E2DD',
                    secondary: '#FBB39D',
                    accent: '#FBC99D',
                    info: '#E9E5AF',
                    success: '#C8DDBB',
                    warning: '#FBDF9D',
                    error: '#FBA09D',
                },
                darknord: {
                    ...require('daisyui/src/theming/themes')['dark'],
                    'base-100': 'oklch( 24.3535% 0 0)',
                    'base-200': 'oklch( 22.6487% 0 0)',
                    'base-300': 'oklch( 20.944% 0 0)',
                    'base-content': 'oklch( 84.8707% 0 0)',
                    'primary-content': 'oklch(22.3899% 0.031305 278.07229)',

                    'secondary-content': 'oklch(22.3899% 0.031305 278.07229)',

                    'accent-content': 'oklch(22.3899% 0.031305 278.07229)',
                    neutral: '#4C566A',
                    'neutral-content': '#D8DEE9',
                    primary: '#5E81AC',
                    secondary: '#81A1C1',
                    accent: '#88C0D0',
                    info: '#B48EAD',
                    success: '#A3BE8C',
                    warning: '#EBCB8B',
                    error: '#BF616A',
                },

                dimminimalist: {
                    ...require('daisyui/src/theming/themes')['nord'],
                    neutral: '#1c212b',
                    'neutral-content': '#B2CCD6',
                    'base-100': '#2A303C',
                    'base-200': '#242933',
                    'base-300': '#20252E',
                    'base-content': 'oklch( 84.8707% 0 0)',
                    primary: '#1c212b',
                    secondary: '#1c212b',
                    accent: '#1c212b',
                },

                dimaesthetic: {
                    ...require('daisyui/src/theming/themes')['nord'],
                    neutral: '#1c212b',
                    'neutral-content': '#B2CCD6',
                    'base-100': '#2A303C',
                    'base-200': '#242933',
                    'base-300': '#20252E',
                    'base-content': 'oklch( 84.8707% 0 0)',
                    primary: '#B6E2DD',
                    secondary: '#FBB39D',
                    accent: '#FBC99D',
                    info: '#E9E5AF',
                    success: '#C8DDBB',
                    warning: '#FBDF9D',
                    error: '#FBA09D',
                },

                dimnord: {
                    ...require('daisyui/src/theming/themes')['nord'],
                    neutral: '#1c212b',
                    'neutral-content': '#B2CCD6',
                    'base-100': '#2A303C',
                    'base-200': '#242933',
                    'base-300': '#20252E',
                    'base-content': 'oklch( 84.8707% 0 0)',
                    primary: '#5E81AC',
                    secondary: '#81A1C1',
                    accent: '#88C0D0',
                    info: '#B48EAD',
                    success: '#A3BE8C',
                    warning: '#EBCB8B',
                    error: '#BF616A',
                },
                neutralminimalist: {
                    ...require('daisyui/src/theming/themes')['cupcake'],
                    'base-100': '#F0EFEB',
                    'base-300': '#C6C5BF',
                    'base-200': '#D7D6D2',
                    primary: '#0D0D0D',
                    'primary-content': 'oklch(100% 0 0)',
                    secondary: '#1A1919',
                    'secondary-content': 'oklch(100% 0 0)',
                    accent: '#262626',
                    'accent-content': 'oklch(100% 0 0)',
                    neutral: '#222120',
                    'neutral-content': '#F0EFEB',
                    info: '#B48EAD',
                    success: '#A3BE8C',
                    warning: '#EBCB8B',
                    error: '#BF616A',
                },
                neutrallatte: {
                    ...require('daisyui/src/theming/themes')['cupcake'],
                    'base-100': '#F0EFEB',
                    'base-300': '#C6C5BF',
                    'base-200': '#D7D6D2',
                    primary: 'C6B3A4',
                    secondary: 'B7A190',
                    accent: '988270',
                    success: '#A5A58D',
                },
            },
        ],
        darkTheme: 'dark', // name of one of the included themes for dark mode
        base: true, // applies background color and foreground color for root element by default
        styled: true, // include daisyUI colors and design decisions for all components
        utils: true, // adds responsive and modifier utility classes
        prefix: '', // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
        logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
        themeRoot: ':root', // The element that receives theme color CSS variables
    },
}
