// @ts-check
'use strict';

module.exports = ((/** @type {import('eslint').Linter.Config} */ e) => e)({
  extends: './node_modules/@arthurka/eslint',
  overrides: [
    {
      files: ['tests/**'],
      rules: {
        '@typescript-eslint/no-unused-vars': 'off',
        'no-prototype-builtins': 'off',
      },
    },
  ],
});
