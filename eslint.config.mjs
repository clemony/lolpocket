// eslint.config.mjs
// CONFIG eslint
import antfu from '@antfu/eslint-config'
import tailwindcss from 'eslint-plugin-tailwindcss'
import pluginVue from 'eslint-plugin-vue'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import tseslint from 'typescript-eslint'
// @ts-check

export function resolvePath(filePath) {
  const __filename = fileURLToPath(import.meta.url)
  const __dirname = path.dirname(__filename)
  return path.resolve(__dirname, filePath)
}

export default antfu({
  ...pluginVue.configs['flat/essential'],
  ...tseslint.configs.recommendedTypeChecked,

  formatters: {
    css: true,
    html: true,
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
  languageOptions: {
    parserOptions: {
      projectService: true,
      tsconfigRootDir: resolvePath('./tsconfig.json'),
    },
  },
  plugins: {
    tailwindcss,
  },
  rules: {

    'eqeqeq': 'off',
    'eslint-comments/no-unlimited-disable': 'off',
    'no-console': 'off',
    'no-irregular-whitespace': 'off',
    'no-undef': 'off',
    'no-unused-expressions': 'off',
    'no-unused-vars"': 'off',
    'style/comma-dangle': 'off',
    'style/eol-last': 'off',
    'ts/no-unused-expressions': 'off',
    'unused-imports/no-unused-imports': 'off',
    'unused-imports/no-unused-vars': 'off',

    // sort
    'perfectionist/sort-imports': ['warn', { newlinesBetween: 0, order: 'asc', type: 'natural' }],
    'perfectionist/sort-interfaces': ['warn', {
      customGroups: {
        pinned: ['name', 'id', 'key', 'title'],
      },
      fallbackSort: { order: 'asc', type: 'natural' },
      groups: [
        'pinned',
        'unknown',
      ],
      newlinesBetween: 0,
      order: 'asc',
      partitionByComment: true,
      type: 'natural',
    }],
    'perfectionist/sort-objects': ['warn', {
      customGroups: {
        pinned: ['name', 'id', 'key', 'title'],
      },
      fallbackSort: { order: 'asc', type: 'natural' },
      groups: [
        'pinned',
        'unknown',
      ],
      newlinesBetween: 0,
      order: 'asc',
      partitionByComment: true,
      type: 'natural',
    }],

    // vue
    'vue/custom-event-name-casing': 'off',
    'vue/eqeqeq': 'off',
    'vue/html-closing-bracket-newline': [
      'error',
      {
        multiline: 'never',
        selfClosingTag: {
          multiline: 'never',
          singleline: 'never',
        },
        singleline: 'never',
      },
    ],
    'vue/html-self-closing': 'off',
    'vue/max-attributes-per-line': [
      'error',
      {
        multiline: { max: 1, },
        singleline: { max: 1, },
      },
    ],
    'vue/max-lines-per-block': ['warn', { script: 200, style: 200, template: 200 }],
    'vue/multiline-html-element-content-newline': ['error'],
    'vue/no-irregular-whitespace': 'off',
    'vue/no-unused-properties': 'off',
    'vue/no-unused-refs': 'off',
    'vue/no-v-text-v-html-on-component': 'off',
    'vue/padding-line-between-blocks': ['error', 'always'],
    'vue/padding-line-between-tags': 'off',
    'vue/require-typed-ref': 'warn',
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
      functions: ['classnames', 'clsx', 'ctl', 'cva', 'tv', 'tw', 'cn']
    }
  },
  vue: true
})
