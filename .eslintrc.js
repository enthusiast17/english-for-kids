const { off } = require("process");

module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb-typescript/base',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint',
  ],
  rules: {
    'indent': ['error', 4],
    '@typescript-eslint/indent': ['error', 4],
    // 'import/prefer-default-export': [],
  },
  root: true,
  ignorePatterns: [
    '.eslintrc.js',
    'public/bundle.js',
    'webpack.config.js'
  ],
};
