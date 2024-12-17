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
}
