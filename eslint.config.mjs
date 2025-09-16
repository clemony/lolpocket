// eslint.config.mjs
// CONFIG eslint
import antfu from '@antfu/eslint-config'
import pluginVue from 'eslint-plugin-vue'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
// @ts-check


export function resolvePath(filePath) {
  const __filename = fileURLToPath(import.meta.url)
  const __dirname = path.dirname(__filename)
  return path.resolve(__dirname, filePath)
}

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
    '.save.json',
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
    'vue/max-attributes-per-line': [
      'error',
      {
        singleline: {
          max: 1,
        },
        multiline: {
          max: 1,
        },
      },
    ],
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
settings: {
  tailwindcss: {
    // Attributes/props that could contain Tailwind CSS classes...
    // Optional, default values: ["class", "className", "ngClass", "@apply"]
    attributes: ['class'],
    // The absolute path pointing to you main Tailwind CSS v4 config file.
    // It must be a `.css` file (v4), not a `.js` file (v3)
    // REQUIRED, default value will not help
    cssConfigPath:  resolvePath('./app/assets/css/tailwind.css'),
    // Functions/tagFunctions that will be parsed by the plugin.
    // Optional, default values: ["classnames", "clsx", "ctl", "cva", "tv", "tw"]
    functions: ['classnames', 'clsx', 'ctl', 'cva', 'tv', 'tw', 'cn']
  },
}
})
