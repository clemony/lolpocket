/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],

    plugins: [
        plugin(function ({ addBase }) {
            addBase({
                html: { fontSize: '12px' },
            })
        }),
    ],
}
