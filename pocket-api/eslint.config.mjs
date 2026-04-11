// @ts-check
import eslint from "@eslint/js"
import { defineConfig } from "eslint/config"
import tseslint from "typescript-eslint"

export default defineConfig(
  {
    ignores: ["**/node_modules/**", "**/public/**"],
    linterOptions: {
      noInlineConfig: true,
      reportUnusedDisableDirectives: "off"
    }
  },
  eslint.configs.recommended,
  tseslint.configs.recommended,
  {
    files: ["**/*.ts"],
    rules: {
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-unused-vars": "off",
      "no-console": "off",
      "no-irregular-whitespace": "off",
      "no-useless-assignment": "off",
      "no-useless-escape": "off"
    }
  }
)
