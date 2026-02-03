// eslint.config.mjs
import antfu from "@antfu/eslint-config"
import css from "@eslint/css"
import eslintPluginBetterTailwindcss from "eslint-plugin-better-tailwindcss"
import pluginJsonc from "eslint-plugin-jsonc"
import pluginVue from "eslint-plugin-vue"
import { globalIgnores } from "eslint/config"
import jsoncParser from "jsonc-eslint-parser"
import { tailwind4 } from "tailwind-csstree"
import eslintParserVue from "vue-eslint-parser"

const customGroups = [
  {
    elementNamePattern: [
      "name",
      "id",
      "key",
      "title",
      "slots",
      "color",
      "variant",
      "variants",
    ],
    groupName: "pinned",
  },
]

export default antfu({
  "better-tailwindcss": {
    extends: [eslintPluginBetterTailwindcss.configs.recommended],
    rules: {
      "better-tailwindcss/enforce-canonical-classes": [
        "warn",
        {
          collapse: true,
          logical: true,
          rootFontSize: 12,
        },
      ],
      "better-tailwindcss/enforce-consistent-important-position": [
        "warn",
        { position: "recommended" },
      ],
      // correctness only — no formatting

      "better-tailwindcss/enforce-consistent-line-wrapping": "off",
      "better-tailwindcss/no-unknown-classes": "off",
      "better-tailwindcss/no-unregistered-classes": "off",
    },
    settings: {
      /*       callees: ["cn", "clsx", "cva", "tw", "tv", "defineAppConfig"],
      detectComponentClasses: true,
      tags: ["style", "ui"], */
      entryPoint: "./layers/ui/app/assets/css/tailwind.css",
    },

    files: ["**/*.vue"],

    languageOptions: {
      parser: eslintParserVue,
    },
  },
  css: {
    extends: ["css"],
    files: ["**/*.css", "**/*.vue"],
    formatters: {
      css: "prettier",
    },
    language: "css/css",
    languageOptions: {
      customSyntax: tailwind4,
    },
    plugins: {
      css,
    },
    rules: {
      "css/no-duplicate-imports": "error",
    },
    settings: {
      callees: ["cn", "clsx", "cva", "tw", "tv", "defineAppConfig"],
      detectComponentClasses: true,
    },
  },
  jsonc: {
    overrides: {
      files: ["*.json", "*.jsonc"],
      formatters: {
        jsonc: "prettier",
      },
      languageOptions: {
        parser: jsoncParser,
      },
      plugins: {},
      rules: {
        "jsonc/sort-keys": [
          "error",
          {
            order: ["name", "version", "private", "publishConfig", "scripts"],
            pathPattern: "^$",
          },
          {
            order: { type: "asc" },
            pathPattern: "^(?:dev|peer|optional|bundled)?[Dd]ependencies$",
          },
          {
            order: { type: "asc" },
            pathPattern: ".*",
          },
        ],
        "jsonc/valid-jsonc": "error",
      },
    },
  },
  plugins: {
    "better-tailwindcss": eslintPluginBetterTailwindcss,
    jsonc: pluginJsonc,
  },
  vue: {
    overrides: {
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

      "vue/multiline-html-element-content-newline": "error",
      "vue/no-unused-properties": "off",
      "vue/no-unused-refs": "off",
      "vue/no-unused-vars": "off",
      "vue/no-v-text-v-html-on-component": "off",

      "vue/padding-line-between-blocks": ["error", "always"],
      "vue/padding-line-between-tags": "off",
      "vue/require-typed-ref": "warn",
    },
  },
})
  /* ---------- IGNORES---------- */
  .prepend([
    globalIgnores([
      "./dist",
      "./node_modules",
      "./schema",
      "./.vscode",
      "./.nuxt",
      "./.notes",
      "./supabase",
      "./shared/records",
      "./public",
      "**/raw/**",
      ".save.json",
    ]),
  ])
  /* ---------- PERFECTIONIST ---------- */
  .override("antfu/perfectionist/setup", {
    rules: {
      "perfectionist/sort-imports": [
        "warn",
        { newlinesBetween: 0, order: "asc", type: "natural" },
      ],

      "perfectionist/sort-interfaces": [
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
    },
  })
  .overrideRules({
    "css/no-invalid-at-rules": "error",
    "antfu/if-newline": "off",
    "css/no-duplicate-imports": "error",
    "no-console": "off",
    "no-irregular-whitespace": "off",
    "no-undef": "off",
    "no-unused-expressions": "off",
    "no-unused-vars": "off",
    "style/comma-dangle": "off",
    "style/eol-last": "off",
    "unused-imports/no-unused-imports": "off",
    "unused-imports/no-unused-vars": "off",
  })
