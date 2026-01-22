// eslint.config.mjs
import antfu from "@antfu/eslint-config"
import css from "@eslint/css"
import eslintPluginBetterTailwindcss from "eslint-plugin-better-tailwindcss"
import pluginJsonc from "eslint-plugin-jsonc"
import pluginVue from "eslint-plugin-vue"
import jsoncParser from "jsonc-eslint-parser"
import path from "node:path"
import { tailwind4 } from "tailwind-csstree"

import eslintParserVue from "vue-eslint-parser"

const customGroups = [
  {
    groupName: "pinned",
    elementNamePattern: ["name", "id", "key", "title"],
  },
]
export default antfu({
  ecmaVersion: "latest",

  plugins: {
    "better-tailwindcss": eslintPluginBetterTailwindcss,
    css,
    pluginJsonc,
    pluginVue,
  },

  formatters: {
    css: "prettier",
    html: true,
    json: "prettier",
    markdown: "prettier",
  },

  ignores: [
    "./dist",
    "./node_modules",
    "./schema",
    "./.vscode",
    "./.nuxt",
    "./.notes",
    "./supabase",
    "./public",
    "**/raw/**",
    ".save.json",
  ],

  rules: {
    // tw
    ...eslintPluginBetterTailwindcss.configs["recommended-warn"].rules,
    "better-tailwindcss/enforce-consistent-important-position": [
      "warn",
      { position: "recommended" },
    ],

    "better-tailwindcss/enforce-consistent-line-wrapping": [
      "off",
      {
        group: "never",
        preferSingleLine: true,
      },
    ],
    "better-tailwindcss/enforce-canonical-classes": [
      "warn",
      {
        rootFontSize: 12,
        collapse: true,
        logical: true,
      },
    ],
    "better-tailwindcss/no-unregistered-classes": "off",
    "better-tailwindcss/no-unknown-classes": ["off", {}],
    // other
    eqeqeq: ["error", "smart"],
    "eslint-comments/no-unlimited-disable": "off",
    "no-console": "off",
    "no-irregular-whitespace": "off",
    "no-undef": "off",
    "no-unused-expressions": "off",
    "no-unused-vars": "off",
    "perfectionist/sort-imports": [
      "warn",
      { newlinesBetween: 0, order: "asc", type: "natural" },
    ],
    "perfectionist/sort-interfaces": [
      "warn",
      {
        fallbackSort: { order: "asc", type: "natural" },
        groups: ["pinned", "unknown"],
        order: "asc",
        partitionByNewLine: true,
        type: "natural",
        customGroups,
      },
    ],
    "perfectionist/sort-objects": [
      "warn",
      {
        customGroups,
        fallbackSort: { order: "asc", type: "natural" },
        groups: ["pinned", "unknown"],
        order: "asc",
        partitionByNewLine: true,
        type: "natural",
      },
    ],
    "style/comma-dangle": "off",
    "style/eol-last": "off",
    "ts/no-unused-expressions": "off",
    "unused-imports/no-unused-imports": "off",
    "unused-imports/no-unused-vars": "off",
  },
  "no-restricted-imports": [
    "error",
    {
      paths: [{ name: "lodash", message: "Use lodash/<method> imports only." }],
    },
  ],
  settings: {
    "better-tailwindcss": {
      callees: ["cn", "clsx", "cva", "tw", "tv"],
      entryPoint: path.resolve("./app/ui/css/tailwind.css"),
      detectComponentClasses: true,
      tags: ["style"],
    },
  },
  sourceType: "module",
  stylistic: true,

  // plugins
  vue: {
    overrides: {
      "vue/custom-event-name-casing": "off",
      "vue/eqeqeq": ["error", "smart"],
      "vue/html-closing-bracket-newline": [
        "error",
        {
          multiline: "never",
          selfClosingTag: { multiline: "never", singleline: "never" },
          singleline: "never",
        },
      ],
      "vue/html-self-closing": "off",
      "vue/max-attributes-per-line": [
        "error",
        {
          multiline: { max: 1 },
          singleline: { max: 1 },
        },
      ],
      "vue/multiline-html-element-content-newline": ["error"],
      "vue/no-unused-properties": "off",
      "vue/no-unused-refs": "off",
      "vue/no-v-text-v-html-on-component": "off",
      "vue/padding-line-between-blocks": ["error", "always"],
      "vue/padding-line-between-tags": "off",
      "vue/require-typed-ref": "warn",
    },
    files: ["**/*.vue"],
    languageOptions: {
      parser: eslintParserVue,
    },
  },

  // overrides
  overrides: [
    {
      files: ["*.json", "*.jsonc"],
      languageOptions: {
        parser: jsoncParser,
      },
      rules: {
        "jsonc/sort-keys": [
          "error",
          {
            order: ["name", "version", "private", "publishConfig", "scripts"],
            pathPattern: "^$", // root
          },
          {
            order: { type: "asc" },
            pathPattern: "^(?:dev|peer|optional|bundled)?[Dd]ependencies$", // deps
          },
          {
            order: ["name", "id", "key"],
            pathPattern: ".*", // identifiers first
          },
          {
            order: { type: "asc" },
            pathPattern: ".*", // everything else
          },
        ],
        "jsonc/valid-jsonc": "error",
      },
    },
    // CSS
    {
      files: ["**/*.css"],
      ...css.configs.recommended,
      language: "css/css",
      languageOptions: {
        customSyntax: tailwind4,
      },
      rules: {
        ...css.configs.recommended.rules,
        "css/no-duplicate-imports": "error",
        "prettier/prettier": ["error", { parser: "css" }],
      },
    },
    {
      files: ["**/*.vue"],
      processor: "vue/block",
    },
    {
      files: ["**/*.vue/*.css"],
      ...css.configs.recommended,
      language: "css/css",
      languageOptions: {
        customSyntax: tailwind4,
      },
      rules: {
        ...css.configs.recommended.rules,
        "css/no-duplicate-imports": "error",
        "prettier/prettier": ["error", { parser: "css" }],
      },
      settings: {
        tailwindcss: { callees: ["tw"], cssFiles: ["**/*.vue/*.css"] },
      },
    },
  ],
})
