// prettier.config.js, .prettierrc.js, prettier.config.mjs, or .prettierrc.mjs

/**
 * @see https://prettier.io/docs/configuration
 * @type {import("prettier").Config}
 */
const config = {
  tabWidth: 2,
  bracketSameLine: true,
  experimentalTernaries: true,
  htmlWhitespaceSensitivity: "css",
  semi: false,
  singleAttributePerLine: false,
  tailwindPreserveDuplicates: false,
  tailwindPreserveWhitespace: false,
  tailwindStylesheet: "./layers/ui/app/assets/css/tailwind.css",
  trailingComma: "es5",
  plugins: [
    "@prettier/plugin-xml",
    "@svgr/plugin-prettier",
    "prettier-plugin-two-style-order",
    "prettier-plugin-tailwindcss",
  ],
  tailwindFunctions: ["clsx", "tw", "tv", "cn", "cva"],
}

export default config
