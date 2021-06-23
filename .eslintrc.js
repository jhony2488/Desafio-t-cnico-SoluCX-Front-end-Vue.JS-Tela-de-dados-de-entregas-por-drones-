module.exports = {
  root: true,
  env: {
    node: true,
    jest: true,
    browser: true,
    es6: true,
    jquery: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
    '@vue/typescript/recommended',
    'plugin:vue-a11y/base',
    'prettier',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    allowImportExportEverywhere: true,
    ecmaVersion: 2018,
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
