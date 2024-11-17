/* eslint-env node */
// Migrate built-in rules to @stylistic/js namespace
/* eslint @stylistic/migrate/migrate-js: "error" */

// Migrate `@typescript-eslint` rules to @stylistic/ts namespace
/* eslint @stylistic/migrate/migrate-ts: "error" */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
    root: true,
    plugins: ['@stylistic/migrate'],
    extends: [
        'plugin:vue/vue3-essential',
        'eslint:recommended',
        './.eslintrc-auto-import.json',
        //'plugin:vue/vue3-recommended',
    ],
    rules: {
        'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
        indent: ['error', 2], // Error: Use @stylistic/js/indent instead

        '@typescript-eslint/indent': ['error', 2], // Error: Use @stylistic/ts/indent instead
    },
    overrides: [
        {
            files: [
                'cypress/e2e/**/*.{cy,spec}.{js,ts,jsx,tsx}',
                'cypress/support/**/*.{js,ts,jsx,tsx}',
            ],
            extends: ['plugin:cypress/recommended'],
        },
    ],
    parserOptions: {
        ecmaVersion: 'latest',
    },
}
