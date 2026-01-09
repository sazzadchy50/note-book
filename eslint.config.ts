import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,cts}'],
    plugins: { js },
    extends: ['js/recommended'],
    languageOptions: {
      globals: {
        ...globals.browser,
        process: 'readonly',
      },
    },
  },
  {
    rules: {
      eqeqeq: 'off',
      // "no-unused-vars": "error",
      // "no-unused-expressions": "error",
      // "prefer-const": "error",
      // "no-console": "warn",
    },
  },
  {
    ignores: [
      'node_modules',
      '.next',
      'out',
      'dist',
      'build',
      'coverage',
      'public',
      '*.min.js',
    ],
  },
  tseslint.configs.recommended,
 
]);
