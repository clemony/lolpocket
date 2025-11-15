// prettier.config.ts, .prettierrc.ts, prettier.config.mts, or .prettierrc.mts
import type { Config } from 'prettier'

/** @type {import('prettier').Config & import('prettier-plugin-tailwindcss').PluginOptions} */

/**
 * @see https://prettier.io/docs/configuration
 * @type {import("prettier").Config}
 */

const config: Config = {
  tabWidth: 2,
  bracketSameLine: true,
  experimentalTernaries: true,
  htmlWhitespaceSensitivity: 'ignore',
  plugins: [
    'prettier-plugin-tailwindcss',
    'prettier-plugin-organize-attributes',
  ],
  semi: false,
  singleAttributePerLine: false,
  tailwindFunctions: ['clsx', 'tw', 'tv', 'cn', 'cva'],
  tailwindPreserveDuplicates: false,
  tailwindPreserveWhitespace: false,
  tailwindStylesheet: './app/assets/css/tailwind.css',
  trailingComma: 'es5',
}

export default config
