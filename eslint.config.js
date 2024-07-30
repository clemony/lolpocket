import globals from "globals";
import pluginJs from "@eslint/js";
import pluginVue from "eslint-plugin-vue";
import eslintPluginReadableTailwind from "eslint-plugin-readable-tailwind";

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
    ignores: ["./zzz-notes/*"],
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

