// eslint.config.mjs
import antfu from '@antfu/eslint-config'
import css from '@eslint/css'
import eslintPluginBetterTailwindcss from 'eslint-plugin-better-tailwindcss'
import pluginJsonc from 'eslint-plugin-jsonc'
import pluginVue from 'eslint-plugin-vue'
import jsoncParser from 'jsonc-eslint-parser'
/* import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url' */
import { tailwind4 } from 'tailwind-csstree'



const customGroups = [
  {
    elementNamePattern: ['name', 'id', 'key', 'title', 'slots', 'color', 'variant', 'variants'],
    groupName: 'pinned',
  },
]

export default antfu({
  formatters: {
    css: true,
    html: true,
    jsonc: true,
    typescript: true,
  },

  ignores: [
    './dist',
    './node_modules',
    './schema',
    './.vscode',
    './.nuxt',
    './.notes',
    './supabase',
    './shared/records',
    './public',
    '**/raw/**',
    '.save.json',
  ],

  plugins: {
   // 'better-tailwindcss': eslintPluginBetterTailwindcss,
    css,
    'jsonc': pluginJsonc,
    'vue': pluginVue,
  },

  rules: {
    /* ---------- base sanity ---------- */
    'antfu/if-newline': 'off',
    'no-console': 'off',
    'no-irregular-whitespace': 'off',
    'no-undef': 'off',
    'no-unused-expressions': 'off',
    'no-unused-vars': 'off',

    /* ---------- tailwind ---------- */
  /*   ...eslintPluginBetterTailwindcss.configs['recommended-warn'].rules,

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

    'better-tailwindcss/enforce-consistent-line-wrapping': 'off',
    'better-tailwindcss/no-unknown-classes': 'off',
    'better-tailwindcss/no-unregistered-classes': 'off', */

    /* ---------- ordering ---------- */
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

    /* ---------- disable overlapping stylers ---------- */
    'style/comma-dangle': 'off',
    'style/eol-last': 'off',

    /* ---------- TS hygiene handled elsewhere ---------- */
    'ts/no-unused-expressions': 'off',
    'unused-imports/no-unused-imports': 'off',
    'unused-imports/no-unused-vars': 'off',
  },

  /* ---------- CSS (validity only) ---------- */
  overrides: [
    {
      files: ['**/*.css', '**/*.vue'],
      language: 'css/css',
      languageOptions: {
        customSyntax: tailwind4,
      },
      rules: {
        'css/no-invalid-at-rules': 'error',
        // correctness only — no formatting
        'css/no-duplicate-imports': 'error',
      },
    },
  ],
/*   settings: {
    'callees': ['cn', 'clsx', 'cva', 'tw', 'tv', 'defineAppConfig'],
    'detectComponentClasses': true,
    'tags': ['style', 'ui'],

    'better-tailwindcss': {
      entryPoint: join(
        _dir,
        'layers/ui/app/assets/css/tailwind.css',
      ),
    },
  }, */

  /* ---------- JSON / JSONC ---------- */
  jsonc: {
    files: ['*.json', '*.jsonc'],
    languageOptions: {
      parser: jsoncParser,
    },
    rules: {
      'jsonc/sort-keys': [
        'error',
        {
          order: ['name', 'version', 'private', 'publishConfig', 'scripts'],
          pathPattern: '^$',
        },
        {
          order: { type: 'asc' },
          pathPattern: '^(?:dev|peer|optional|bundled)?[Dd]ependencies$',
        },
        {
          order: { type: 'asc' },
          pathPattern: '.*',
        },
      ],
      'jsonc/valid-jsonc': 'error',
    },
  },

  /* ---------- Vue ---------- */
  vue: {
    rules: {
      'vue/custom-event-name-casing': 'off',

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

      'vue/multiline-html-element-content-newline': 'error',
      'vue/no-unused-properties': 'off',
      'vue/no-unused-refs': 'off',
      'vue/no-v-text-v-html-on-component': 'off',
      'vue/padding-line-between-blocks': ['error', 'always'],
      'vue/padding-line-between-tags': 'off',
      'vue/require-typed-ref': 'warn',
    },
  },
})