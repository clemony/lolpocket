// prettier.config.js, .prettierrc.js, prettier.config.mjs, or .prettierrc.mjs

/**
 * @see https://prettier.io/docs/configuration
 * @type {import("prettier").Config}
 */
const config = {
  tabWidth: 2,
  bracketSameLine: true,
  experimentalTernaries: true,
  htmlWhitespaceSensitivity: "ignore",
  plugins: ["prettier-plugin-tailwindcss"],
  semi: false,
  singleAttributePerLine: false,
  tailwindFunctions: ["clsx", "tw", "tv", "cn", "cva"],
  tailwindPreserveDuplicates: false,
  tailwindPreserveWhitespace: false,
  tailwindStylesheet: "./layers/ui/app/assets/css/tailwind.css",
  trailingComma: "es5",
}

export default config
