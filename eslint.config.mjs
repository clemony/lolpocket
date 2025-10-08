// eslint.config.mjs
import antfu from '@antfu/eslint-config'
import pluginJsonc from 'eslint-plugin-jsonc'
import tailwindcss from 'eslint-plugin-tailwindcss'
import pluginVue from 'eslint-plugin-vue'
import jsoncParser from 'jsonc-eslint-parser'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

export function resolvePath(filePath) {
  const __filename = fileURLToPath(import.meta.url)
  const __dirname = path.dirname(__filename)
  return path.resolve(__dirname, filePath)
}

export default antfu({
  overrides: [
    {
      files: ['*.json', '*.jsonc'],
      languageOptions: {
        parser: jsoncParser,
      },
      rules: {
        'jsonc/sort-keys': ['error', {
          order: [
            'name',
            'version',
            'private',
            'publishConfig',
            'scripts',
          ],
          pathPattern: '^$', // root
        }, {
          order: { type: 'asc' },
          pathPattern: '^(?:dev|peer|optional|bundled)?[Dd]ependencies$', // deps
        }, {
          order: ['name', 'id', 'key'],
          pathPattern: '^.*$', // identifiers first
        }, {
          order: { type: 'asc' },
          pathPattern: '^.*$', // everything else
        },],
        'jsonc/valid-jsonc': 'error',
      },
    },
  ],
  ecmaVersion: 'latest',
  formatters: {
    css: true,
    html: true,
    json: 'prettier',
    markdown: 'prettier',
  },
  ignores: [
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
    pluginJsonc,
    pluginVue,
    tailwindcss,
  },
  rules: {
    'eqeqeq': ['error', 'smart'],
    'eslint-comments/no-unlimited-disable': 'off',
    'no-console': 'off',
    'no-irregular-whitespace': 'off',
    'no-undef': 'off',
    'no-unused-expressions': 'off',
    'no-unused-vars': 'off',
    'perfectionist/sort-imports': ['warn', { newlinesBetween: 0, order: 'asc', type: 'natural' }],
    'perfectionist/sort-interfaces': ['warn', {
      customGroups: { pinned: ['name', 'id', 'key', 'title'] },
      fallbackSort: { order: 'asc', type: 'natural' },
      groups: ['pinned', 'unknown'],
      newlinesBetween: 0,
      order: 'asc',
      partitionByComment: true,
      type: 'natural',
    }],
    'perfectionist/sort-objects': ['warn', {
      customGroups: { pinned: ['name', 'id', 'key', 'title'] },
      fallbackSort: { order: 'asc', type: 'natural' },
      groups: ['pinned', 'unknown'],
      newlinesBetween: 0,
      order: 'asc',
      partitionByComment: true,
      type: 'natural',
    }],
    'style/comma-dangle': 'off',
    'style/eol-last': 'off',
    'ts/no-unused-expressions': 'off',
    'unused-imports/no-unused-imports': 'off',
    'unused-imports/no-unused-vars': 'off',
  },
  settings: {
    rules: {
      'tailwindcss/classnames-order': 'warn',
      'tailwindcss/no-contradicting-classname': 'warn',
      'tailwindcss/no-custom-classname': 'off',
      'tailwindcss/enforces-shorthand': 'warn',
    },
    tailwindcss: {
      attributes: ['class', '@apply'],
      cssConfigPath: resolvePath('./app/assets/css/tailwind.css'),
      functions: ['classnames', 'clsx', 'ctl', 'cva', 'tv', 'tw', 'cn', 'defineTv'],
    },
  },
  sourceType: 'module',
  vue: {
    overrides: {
      'vue/custom-event-name-casing': 'off',
      'vue-a11y/form-control-has-label': 'off',
      'vue-a11y/label-has-for': 'off',
      'vue-a11y/no-autofocus': 'off',
      'vue-a11y/no-distracting-elements': ['error', { elements: ['Blink'] }],
      'vue/eqeqeq': ['error', 'smart'],
      'vue/html-closing-bracket-newline': ['error', {
        multiline: 'never',
        selfClosingTag: { multiline: 'never', singleline: 'never' },
        singleline: 'never',
      }],
      'vue/html-self-closing': 'off',
      'vue/max-attributes-per-line': ['error', {
        multiline: { max: 1 },
        singleline: { max: 1 },
      }],
      'vue/multiline-html-element-content-newline': ['error'],
      'vue/no-unused-properties': 'off',
      'vue/no-unused-refs': 'off',
      'vue/no-v-text-v-html-on-component': 'off',
      'vue/padding-line-between-blocks': ['error', 'always'],
      'vue/padding-line-between-tags': 'off',
      'vue/require-typed-ref': 'warn',
    },
    a11y: true,
  },
})