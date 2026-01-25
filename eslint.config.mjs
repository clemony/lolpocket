// eslint.config.mjs
import antfu from '@antfu/eslint-config'
import css from '@eslint/css'
import eslintPluginBetterTailwindcss from 'eslint-plugin-better-tailwindcss'
import pluginJsonc from 'eslint-plugin-jsonc'
import pluginVue from 'eslint-plugin-vue'
import jsoncParser from 'jsonc-eslint-parser'
import path from 'node:path'
import { tailwind4 } from 'tailwind-csstree'
import eslintParserVue from 'vue-eslint-parser'
import withNuxt from './.nuxt/eslint.config.mjs'
import eslintConfigPrettier from "eslint-config-prettier/flat";


const customGroups = [
  {
    elementNamePattern: ['name', 'id', 'key', 'title'],
    groupName: 'pinned',
},
]
export default withNuxt(
  antfu({
  'stylistic': true,

  'ignores': [
    './dist',
    './node_modules',
    './schema',
    './.vscode',
    './.nuxt',
    './.notes',
    './supabase',
    './public',
    '**/raw/**',
    '.save.json',
  ],

plugins: {
  vue: pluginVue,
  css,
  jsonc: pluginJsonc,
  'better-tailwindcss': eslintPluginBetterTailwindcss,
},

'formatters': {
    css: 'prettier',
    html: true,
    json: 'prettier',
    markdown: 'prettier',
  },

  'settings': {
    'better-tailwindcss': {
      callees: ['cn', 'clsx', 'cva', 'tw', 'tv'],
      detectComponentClasses: true,
      entryPoint: path.resolve('./layers/ui/app/css/tailwind.css'),
      tags: ['style'],
    },
  },

  'rules': {
     ...eslintPluginBetterTailwindcss.configs['recommended-warn'].rules,
    'better-tailwindcss/enforce-consistent-important-position': [
      'warn',
      { position: 'recommended' },
    ],

    'better-tailwindcss/enforce-canonical-classes': [
      'warn',
      {
        collapse: true,
        logical: true,
        rootFontSize: 12,
      },
    ],
    'better-tailwindcss/enforce-consistent-line-wrapping': [
      'off',
      {
        group: 'never',
        preferSingleLine: true,
      },
    ],
    'better-tailwindcss/no-unknown-classes': ['off', {}],
    'better-tailwindcss/no-unregistered-classes': 'off',
    'eqeqeq': ['error', 'smart'],
    'eslint-comments/no-unlimited-disable': 'off',
    'no-console': 'off',
    'no-irregular-whitespace': 'off',
    'no-undef': 'off',
    'no-unused-expressions': 'off',
    'no-unused-vars': 'off',
    'perfectionist/sort-imports': [
      'warn',
      { newlinesBetween: 0, order: 'asc', type: 'natural' },
    ],
    'perfectionist/sort-interfaces': [
      'warn',
      {
        customGroups,
        fallbackSort: { order: 'asc', type: 'natural' },
        groups: ['pinned', 'unknown'],
        order: 'asc',
        partitionByNewLine: true,
        type: 'natural',
      },
    ],
    'perfectionist/sort-objects': [
      'warn',
      {
        customGroups,
        fallbackSort: { order: 'asc', type: 'natural' },
        groups: ['pinned', 'unknown'],
        order: 'asc',
        partitionByNewLine: true,
        type: 'natural',
      },
    ],
    'style/comma-dangle': 'off',
    'style/eol-last': 'off',
    'ts/no-unused-expressions': 'off',
    'unused-imports/no-unused-imports': 'off',
    'unused-imports/no-unused-vars': 'off',
  },
  'vue': {
    rules: {
      'vue/custom-event-name-casing': 'off',
      'vue/eqeqeq': ['error', 'smart'],
      'vue/html-closing-bracket-newline': [
        'error',
        {
          multiline: 'never',
          selfClosingTag: { multiline: 'never', singleline: 'never' },
          singleline: 'never',
        },
      ],
      'vue/html-self-closing': 'off',
      'vue/max-attributes-per-line': [
        'error',
        {
          multiline: { max: 1 },
          singleline: { max: 1 },
        },
      ],
      'vue/multiline-html-element-content-newline': ['error'],
      'vue/no-unused-properties': 'off',
      'vue/no-unused-refs': 'off',
      'vue/no-v-text-v-html-on-component': 'off',
      'vue/padding-line-between-blocks': ['error', 'always'],
      'vue/padding-line-between-tags': 'off',
      'vue/require-typed-ref': 'warn',
    },
    languageOptions: {
      parser: eslintParserVue,
    },
},
"jsonc": {
  files: ['*.json', '*.jsonc'],
      languageOptions: {
        parser: jsoncParser,
      },
  rules:{
    'jsonc/sort-keys': [
          'error',
          {
            order: ['name', 'version', 'private', 'publishConfig', 'scripts'],
            pathPattern: '^$', // root
          },
          {
            order: { type: 'asc' },
            pathPattern: '^(?:dev|peer|optional|bundled)?[Dd]ependencies$', // deps
          },
          {
            order: ['name', 'id', 'key'],
            pathPattern: '.*', // identifiers first
          },
          {
            order: { type: 'asc' },
            pathPattern: '.*', // everything else
          },
        ],
        'jsonc/valid-jsonc': 'error',
      }
      },

      overrides: [
    {
      files: ['**/*.vue/*.css'],
      language: 'css/css',
      languageOptions: {
        customSyntax: tailwind4,
      },
      settings: {
        tailwindcss: { callees: ['tw'], cssFiles: ['**/*.vue/*.css'] },
      rules: {
        ...css.configs.recommended.rules,
        'css/no-duplicate-imports': 'error',
        'prettier/prettier': ['error', { parser: 'css' }],
      }
      },
    },
  ],
  eslintConfigPrettier
}))
