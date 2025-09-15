// /eslint.config.ts (en la raíz)
import tseslint from 'typescript-eslint';
import { baseConfig } from './eslint-configs/base.js';
import { vueTsConfig } from './eslint-configs/vue-ts.js';
import { defineConfig } from 'eslint/config';
export default defineConfig(
  ...baseConfig,
  ...vueTsConfig,
  
  // --- Configuración Específica por Proyecto (resuelve tu error original) ---
  {
    files: ['apps/host/**/*.{ts,vue}'],
    languageOptions: {
      parserOptions: {
        project: './apps/host/tsconfig.json',
      },
    },
  },
  {
    files: ['apps/products-remote/**/*.{ts,vue}'],
    languageOptions: {
      parserOptions: {
        project: './apps/products-remote/tsconfig.json',
      },
    },
  },
  {
    files: ['apps/profile-remote/**/*.{ts,vue}'],
    languageOptions: {
      parserOptions: {
        project: './apps/profile-remote/tsconfig.json',
      },
    },
  },
);