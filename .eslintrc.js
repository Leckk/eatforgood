module.exports = {
  extends: ['airbnb', 'prettier', 'prettier/react', 'plugin:react/recommended', 'codingitwrong'],
  settings: {
    react: {
      version: '16.5',
    },
  },
  env: {
    browser: true,
    es6: true,
    'jest/globals': true,
    node: true,
  },
  plugins: ['prettier'],
  rules: {
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.js', '.jsx'],
      },
    ],
    'react/prop-types': 0,
    'no-underscore-dangle': 0,
    'import/imports-first': ['error', 'absolute-first'],
    'import/newline-after-import': 'error',
  },
  globals: {
    window: true,
    document: true,
    localStorage: true,
    FormData: true,
    FileReader: true,
    Blob: true,
    navigator: true,
  },
  parser: ['babel-eslint', 'jest'],
};