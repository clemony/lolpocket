import pluginJs from '@eslint/js'
import pluginVue, { configs, rules } from 'eslint-plugin-vue'
import globals from 'globals'
import { FlatCompat } from '@eslint/eslintrc'

const compat = new FlatCompat()

export default [
    ...compat({
        extends: [
            'eslint:recommended',
            'plugin:@typescript-eslint/recommended',
            './.eslintrc-auto-import.json',
        ],
        ignores: ['../notes/*', '/notes/*', './notes/*'],
        files: ['**/*.{js,mjs,cjs,vue}'],
        languageOptions: {
            globals: {
                /* globals.browser, */
                definePage: 'readonly',
            },
        },
        plugins: {
            '@stylistic': stylistic,
        },
        rules: {
            // enable all recommended rules to warn
            ...eslintPluginReadableTailwind.configs.warning.rules,
            // enable all recommended rules to error
            ...eslintPluginReadableTailwind.configs.error.rules,
            'no-unused-vars': '0',
            'no-undef': '0',
        },
    }),

    pluginJs.configs.recommended,
    ...pluginVue.configs['flat/essential'],
]
