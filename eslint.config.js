import pluginJs from "@eslint/js";
import eslintPluginReadableTailwind from "eslint-plugin-readable-tailwind";
import pluginVue from "eslint-plugin-vue";
import globals from "globals";

export default [
  { files: ["**/*.{js,mjs,cjs,vue}"] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...pluginVue.configs["flat/essential"],
  {
    rules: {
      "no-unused-vars": "0",
      "no-undef": "error",
    },
  },
  {
    ignores: ["../notes/*", "/notes/*", "./notes/*"],
  },
  {
    plugins: {
    "readable-tailwind": eslintPluginReadableTailwind
  },
  rules: {
    // enable all recommended rules to warn
    ...eslintPluginReadableTailwind.configs.warning.rules,
    // enable all recommended rules to error
    ...eslintPluginReadableTailwind.configs.error.rules,

    // or configure rules individually
    "readable-tailwind/multiline": ["warn", { printWidth: 100 }]
  }
}
];

