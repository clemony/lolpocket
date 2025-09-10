// eslint.config.mjs
// CONFIG eslint
import antfu from '@antfu/eslint-config'
import pluginVue from 'eslint-plugin-vue'
// @ts-check

export default antfu({
  ...pluginVue.configs['flat/essential'],

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
    '.save.json'
  ],
  vue: true,
  rules: {
    'no-undef': 'off',
    'eqeqeq': 'off',
    'style/comma-dangle': 'off',
    'vue/html-self-closing': 'off',
    'no-unused-vars"': 'off',
    'no-console': 'off',
    'no-unused-expressions': 'off',
    'vue/eqeqeq': 'off',
    'ts/no-unused-expressions': 'off',
    'unused-imports/no-unused-vars': 'off',
    'unused-imports/no-unused-imports': 'off',
    'vue/no-v-text-v-html-on-component': 'off',
    'style/eol-last': 'off',
    'perfectionist/sort-imports': 'off',
    'vue/no-irregular-whitespace': 'off',
    'no-irregular-whitespace': 'off',
    'eslint-comments/no-unlimited-disable': 'off',
    'vue/custom-event-name-casing': 'off',
    'vue/html-closing-bracket-newline': [
      'error',
      {
        singleline: 'never',
        multiline: 'never',
        selfClosingTag: {
          singleline: 'never',
          multiline: 'never',
        },
      },
    ],
    'vue/padding-line-between-tags': 'off',
    'vue/padding-line-between-blocks': ['error', 'always'],
    'vue/multiline-html-element-content-newline': ['error'],
    'vue/max-attributes-per-line': ['error', {
      singleline: {
        max: 1,
      },
      multiline: {
        max: 1,
      },
    }],
  },
  formatters: {
    /**
     * Format CSS, LESS, SCSS files, also the `<style>` blocks in Vue
     * By default uses Prettier
     */
    css: true,
    /**
     * Format HTML files
     * By default uses Prettier
     */
    html: true,
    /**
     * Format Markdown files
     * Supports Prettier and dprint
     * By default uses Prettier
     */
    markdown: 'prettier',
  },
},
)
