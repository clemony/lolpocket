import pluginJs from '@eslint/js';
import pluginVue, { configs, rules } from 'eslint-plugin-vue';
import globals from 'globals';
import { FlatCompat } from '@eslint/eslintrc';
import stylistic from '@stylistic/eslint-plugin';

const compat = new FlatCompat();

export default [
  ...compat({
    extends: [
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended',
      // ...
    ],
  }),
  // override the legacy rules
  StylisticPlugin.configs['disable-legacy'],

  { files: ['**/*.{js,mjs,cjs,vue}'] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...pluginVue.configs['flat/essential'],
  {
    extends: ['./.eslintrc-auto-import.json'],
  },
  {
    ignores: ['../notes/*', '/notes/*', './notes/*'],
  },
  {
    plugins: {
      '@stylistic': stylistic,
    },
    rules: {
      // enable all recommended rules to warn
      ...eslintPluginReadableTailwind.configs.warning.rules,
      // enable all recommended rules to error
      ...eslintPluginReadableTailwind.configs.error.rules,
      'no-unused-vars': '0',
      'no-undef': '0',
      '@stylistic/indent': ['error', 2],
    },
  },
];
