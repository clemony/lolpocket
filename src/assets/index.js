// const tailwindColors = require("tailwindcss/colors")
//const tailwindPlugin = require("tailwindcss/plugin");
const tailwindPlugin = require('./lib/createPlugin')

const pc = require('picocolors')

const themes = require('./theming/themes')
const colorFunctions = require('./theming/functions')

const colorObject = require('./theming/index')

const mainFunction = ({ addBase, config }) => {
    const themeInjector = colorFunctions.injectThemes(addBase, config, themes)
    themeInjector

    if (themeInjector.themeOrder.length > 0) {
        console.log(
            `├─ ${pc.green('✔︎')} ${themeInjector.themeOrder.length} ${themeInjector.themeOrder.length > 1 ? 'themes' : 'theme'} added${pc.dim('\t\thttps://daisyui.com/docs/themes')}`
        )
    }
    if (themeInjector.themeOrder.length === 0) {
        console.log(
            `├─ ${pc.yellow('ℹ︎')} All themes are disabled in config${pc.dim('\t\thttps://daisyui.com/docs/themes')}`
        )
    }
}

module.exports = tailwindPlugin(mainFunction, {
    theme: {
        extend: {
            colors: {
                ...colorObject,
                // adding all Tailwind `neutral` shades here so they don't get overridden by daisyUI `neutral` color
                'neutral-50': '#fafafa',
                'neutral-100': '#f5f5f5',
                'neutral-200': '#e5e5e5',
                'neutral-300': '#d4d4d4',
                'neutral-400': '#a3a3a3',
                'neutral-500': '#737373',
                'neutral-600': '#525252',
                'neutral-700': '#404040',
                'neutral-800': '#262626',
                'neutral-900': '#171717',
                'neutral-950': '#0a0a0a',
            },
            ...utilityClasses,
        },
    },
})
