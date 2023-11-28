module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'import'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:nuxt/recommended',
    'plugin:vue/vue3-recommended',
    'plugin:prettier/recommended',
  ],
  rules: {
    '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
    '@typescript-eslint/consistent-type-imports': 'error',
    'vue/multi-word-component-names': 'off',
    'vue/no-duplicate-attr-inheritance': 'error',
    'vue/this-in-template': ['error', 'never'],
    'vue/v-on-style': ['error', 'shorthand'],
    'vue/no-multi-spaces': 'error',
    'vue/padding-line-between-blocks': 'error',
    'vue/component-tags-order': ['error', { order: ['template', 'script', 'style'] }],
    'vue/v-bind-style': 'error',
    'vue/v-slot-style': ['error', 'shorthand'],
  },
};
