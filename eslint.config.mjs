// eslint.config.mjs
import antfu from '@antfu/eslint-config'
import css from '@eslint/css'
import eslintPluginBetterTailwindcss from 'eslint-plugin-better-tailwindcss'
import pluginJsonc from 'eslint-plugin-jsonc'
import pluginVue from 'eslint-plugin-vue'
import jsoncParser from 'jsonc-eslint-parser'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { tailwind4 } from 'tailwind-csstree'
import eslintParserVue from 'vue-eslint-parser'

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
          pathPattern: '.*', // identifiers first
        }, {
          order: { type: 'asc' },
          pathPattern: '.*', // everything else
        },],
        'jsonc/valid-jsonc': 'error',
      },
    },
    // CSS
    {
      files: ['**/*.css'],
      ...css.configs.recommended,
      language: 'css/css',
      languageOptions: {
        customSyntax: tailwind4,
      },
      rules: {
        ...css.configs.recommended.rules,
        'css/no-duplicate-imports': 'error',
        'prettier/prettier': ['error', { parser: 'css' }],
      },
    },
    {
      files: ['**/*.vue'],
      processor: 'vue/block',
    },
    {
      files: ['**/*.vue/*.css'],
      ...css.configs.recommended,
      language: 'css/css',
      languageOptions: {
        customSyntax: tailwind4,
      },
      rules: {
        ...css.configs.recommended.rules,
        'css/no-duplicate-imports': 'error',
        'prettier/prettier': ['error', { parser: 'css' }],
      },
      settings: { tailwindcss: { callees: ['tw'], cssFiles: ['**/*.vue/*.css'] } },
    }
  ],
  ecmaVersion: 'latest',
  formatters: {
    css: 'prettier',
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
    'better-tailwindcss': eslintPluginBetterTailwindcss,
    css,
    pluginJsonc,
    pluginVue
  },
  rules: {
    // tw

    ...eslintPluginBetterTailwindcss.configs['recommended-warn'].rules,
    'better-tailwindcss/no-unregistered-classes': 'off',

    // other
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
    'better-tailwindcss': {
      callees: ['cn', 'clsx', 'cva', 'tw', 'tv'],
      entryPoint: path.resolve('./app/assets/css/tailwind.css'),

    }
  },
  sourceType: 'module',
  stylistic: true,
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
    files: ['**/*.vue'],
    languageOptions: {
      parser: eslintParserVue
    },
  },
})