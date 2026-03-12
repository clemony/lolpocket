// prettier.config.js, .prettierrc.js, prettier.config.mjs, or .prettierrc.mjs

/**
 * @see https://prettier.io/docs/configuration
 * @type {import("prettier").Config}
 */
const config = {
  tabWidth: 2,
  bracketSameLine: true,
  htmlWhitespaceSensitivity: "css",
  semi: false,
  singleAttributePerLine: false,
  tailwindPreserveDuplicates: false,
  tailwindPreserveWhitespace: false,
  tailwindStylesheet: "./layers/ui/app/assets/css/tailwind.css",
  trailingComma: "all",
  overrides: [
    {
      files: ["*.json", "*.jsonc", "*.json5"],
      options: { trailingComma: "none" },
    },
  ],
  plugins: [
    "@prettier/plugin-xml",
    "@svgr/plugin-prettier",
    "prettier-plugin-tailwindcss",
    "prettier-plugin-sh",
  ],
  tailwindFunctions: ["clsx", "tw", "tv", "cn", "cva"],
}

export default config
