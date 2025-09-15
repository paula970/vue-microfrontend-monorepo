// eslint-configs/vue-ts.js
import pluginVue from 'eslint-plugin-vue';
import * as parserVue from 'vue-eslint-parser';
import tseslint from 'typescript-eslint';
import prettierConfig from 'eslint-config-prettier';

export const vueTsConfig = [
  ...pluginVue.configs['flat/vue3-recommended'],
  ...tseslint.configs.recommended,
  prettierConfig, // Siempre al final
  {
    languageOptions: {
      parser: parserVue,
      parserOptions: {
        parser: tseslint.parser,
        sourceType: 'module',
      },
    },
  },
];