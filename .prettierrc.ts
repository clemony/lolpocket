// prettier.config.js

/** @type {import('prettier').Config & import('prettier-plugin-tailwindcss').PluginOptions} */
export default {
  tabWidth: 2,
  bracketSameLine: true,
  experimentalTernaries: true,
  htmlWhitespaceSensitivity: 'ignore',
  plugins: ['prettier-plugin-tailwindcss'],
  semi: false,
  singleAttributePerLine: false,
  tailwindFunctions: ['clsx', 'tw', 'tv', 'cn', 'cva'],
  tailwindPreserveDuplicates: false,
  tailwindPreserveWhitespace: false,
  tailwindStylesheet: './assets/css/tailwind.css',
  trailingComma: 'es5',
}