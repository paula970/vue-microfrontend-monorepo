// eslint-configs/base.js
import globals from 'globals';
import js from '@eslint/js';

export const baseConfig = [
  {
    ignores: ['**/dist/**', '**/node_modules/**'],
  },
  js.configs.recommended,
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },
];