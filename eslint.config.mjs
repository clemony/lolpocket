// eslint.config.mjs
import antfu from "@antfu/eslint-config"
import eslintPluginBetterTailwindcss from "eslint-plugin-better-tailwindcss"
import pluginJsonc from "eslint-plugin-jsonc"
import pluginVue from "eslint-plugin-vue"
import jsoncParser from "jsonc-eslint-parser"
import eslintParserVue from "vue-eslint-parser"

const customGroups = [
  {
    groupName: "pinned",
    elementNamePattern: [
      "name",
      "id",
      "key",
      "title",
      "slots",
      "color",
      "variant",
      "variants",
      "extends",
      "files",
      "formatters",
      "language",
      "languageOptions",
      "settings",
    ],
  },
  {
    groupName: "structural",
    elementValuePattern: [
      "^\\[", // array literal
      "^\\{", // object literal
    ],
  },
]

export default antfu(
  {
    stylistic: false,
    ignores: [
      "./dist",
      "./node_modules",
      "./schema",
      "./.vscode",
      "./.nuxt",
      "./.notes",
      "./supabase",
      "*.scopesnippet",
      "./shared/records",
      "./public",
      "**/raw/**",
      ".save.json",
    ],
    /* ---------- JSONC ---------- */

    jsonc: {
      languageOptions: {
        parser: jsoncParser,
      },
      overrides: {
        "jsonc/sort-keys": [
          "error",
          {
            pathPattern: "^$",
            order: ["name", "version", "private", "publishConfig", "scripts"],
          },
          {
            pathPattern: "^(?:dev|peer|optional|bundled)?[Dd]ependencies$",
            order: { type: "asc" },
          },
          {
            pathPattern: ".*",
            order: { type: "asc" },
          },
        ],
      },
      plugins: { pluginJsonc },
    },

    /* ---------- VUE ---------- */

    vue: {
      overrides: {
        "vue/html-closing-bracket-newline": [
          "error",
          {
            multiline: "never",
            singleline: "never",
            selfClosingTag: { multiline: "never", singleline: "never" },
          },
        ],

        "vue/html-self-closing": "off",

        "vue/multiline-html-element-content-newline": "error",
        "vue/no-unused-properties": "off",
        "vue/no-unused-refs": "off",
        "vue/no-unused-vars": "off",
        "vue/no-v-text-v-html-on-component": "off",
        "vue/operator-linebreak": "off",

        "vue/padding-line-between-tags": "off",
        "vue/require-typed-ref": "warn",
        "vue/padding-line-between-blocks": ["error", "always"],
      },
    },
  },

  /* ---------- TAILWIND ---------- */

  {
    extends: [eslintPluginBetterTailwindcss.configs.recommended],

    settings: {
      "better-tailwindcss": {
        detectComponentClasses: true,
        entryPoint: "./layers/ui/app/assets/css/tailwind.css",
        callees: ["cn", "clsx", "cva", "tw", "tv", "defineAppConfig"],
        attributes: [
          "class",
          "className",
          [
            "ui",
            [
              { match: "objectValues" },
            ],
          ],
          "content",
          "variant",
          "base",
          "root",
          "trailingIcon",
          "trailing",
          "leading",
        ],
        tags: ["style"],
      },
    },
    rules: {
      "better-tailwindcss/no-unregistered-classes": "off",
      "better-tailwindcss/enforce-consistent-line-wrapping": "off",
      "better-tailwindcss/no-unknown-classes": "off",
      "better-tailwindcss/enforce-canonical-classes": "off" /* [
        "warn",
        {
          collapse: true,
          logical: true,
          rootFontSize: 12,
        },
      ], */,
      "better-tailwindcss/enforce-consistent-important-position": "warn",
      "better-tailwindcss/enforce-shorthand-classes": "warn",
      "better-tailwindcss/enforce-consistent-variable-syntax": "warn",
      "better-tailwindcss/no-unnecessary-whitespace": "warn",
      "better-tailwindcss/no-duplicate-classes": "warn",
    },
    files: ["**/*.vue"],

    languageOptions: {
      parser: eslintParserVue,
    },
  }
)
  .override(
    "antfu/perfectionist/setup",
    {
      files: ["**/*.{js,ts,jsx,tsx}"],
      rules: {
        "perfectionist/sort-exports": "warn",
      },
    },
    {
      rules: {
        /* ---------- PERFECTIONIST ---------- */

        "perfectionist/sort-interfaces": [
          "warn",
          {
            customGroups,
            order: "asc",
            partitionByNewLine: true,
            type: "natural",
            fallbackSort: { order: "asc", type: "natural" },
            groups: ["pinned", "unknown"],
          },
        ],
        "perfectionist/sort-objects": [
          "warn",
          {
            customGroups,
            order: "asc",
            partitionByNewLine: true,
            type: "natural",
            fallbackSort: { order: "asc", type: "natural" },
            groups: ["pinned", "unknown", "structural"],
          },
        ],
      },
    }
  )
  .overrideRules({
    "antfu/if-newline": "off",
    "no-console": "off",
    "no-irregular-whitespace": "off",
    "no-undef": "off",
    "no-unused-expressions": "off",
    "no-unused-vars": "off",
    "style/comma-dangle": "off",
    "style/eol-last": "off",
    "unused-imports/no-unused-imports": "off",
    "unused-imports/no-unused-vars": "off",
    "command/command": "off",
    "perfectionist/sort-imports": "off",
  })
  .override(
    "antfu/regexp/rules",
    {
      files: ["**/*.{js,ts,jsx,tsx}"],
      rules: {
        "regexp/no-legacy-features": "error",
      },
    },
    {
      rules: {
        "regexp/no-legacy-features": "off",
      },
    }
  )
