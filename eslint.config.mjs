// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs';
import pluginVue from 'eslint-plugin-vue';

export default withNuxt({
  ...pluginVue.configs['flat/essential'],
  rules: {
    'no-undef': 'off',

    'vue/html-self-closing': 'off',
    'no-unused-vars"': 'off',
  },
});
