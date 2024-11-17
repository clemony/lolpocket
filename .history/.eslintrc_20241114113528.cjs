/* eslint-env node */

module.exports = {
    env: {
        node: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:vue/vue3-recommended',
        './.eslintrc-auto-import.json',
        'prettier',
    ],
    rules: {
        'vue/require-default-prop': 'off',

        // 'vue/no-unused-vars': 'error'
    },
}
