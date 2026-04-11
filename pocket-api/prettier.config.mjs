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
  trailingComma: "none",
  overrides: [
    {
      files: ["*.json", "*.jsonc", "*.json5"],
      options: { trailingComma: "none" }
    }
  ]
}

export default config
