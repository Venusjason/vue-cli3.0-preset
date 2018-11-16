module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],
  globals: {
    __webpack_public_path__: true,
    __dirname: true,
    console: true,
    location: true,
    Vue: true,
    React: true,
    RAP: true,
    session: true,
    wx: true,
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    "no-shadow": ["error", { "allow": ["state"] }],
    "import/resolver": "webpack",
    'import/no-unresolved': 0,
    'linebreak-style': ["off", "windows"],
    semi: ['error', 'never'],
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
}
