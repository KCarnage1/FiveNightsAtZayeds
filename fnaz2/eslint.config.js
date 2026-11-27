import js from '@eslint/js';
import globals from 'globals';
export default [
  js.configs.recommended,
  { files: ['src/**/*.js'], languageOptions: { ecmaVersion: 2023, sourceType: 'module', globals: { ...globals.browser, APP_VERSION: 'readonly' } }, rules: { 'no-unused-vars': ['warn', { args: 'none', caughtErrors: 'none' }], 'no-empty': ['warn', { allowEmptyCatch: true }], 'no-constant-binary-expression': 'warn' } },
  { ignores: ['*.bundle.js', 'node_modules/**', 'rust/**', 'tests/**'] }
];
