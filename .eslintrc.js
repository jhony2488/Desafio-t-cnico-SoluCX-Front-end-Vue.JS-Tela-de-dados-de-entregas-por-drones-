module.exports = {
  root: true,
  env: {
    node: true,
    jest: true,
    browser: true,
    node: true,
    es6: true,
    jest: true,
    jquery: true,
  },
  extends: [
    'plugin:vue/vue3-essential',
    '@vue/airbnb',
    '@vue/typescript/recommended',
    'plugin:vue-a11y/base',
    'prettier',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    allowImportExportEverywhere: true,
    ecmaVersion: 2020,
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
  },
  overrides: [
    {
      files: ['**/__tests__/*.{j,t}s?(x)', '**/tests/unit/**/*.spec.{j,t}s?(x)'],
      env: {
        jest: true,
      },
    },
  ],
}
