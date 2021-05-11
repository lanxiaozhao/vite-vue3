/*
 * @Descripttion:
 * @version:
 * @Author: zhaopan
 * @Date: 2021-05-09 11:09:00
 * @LastEditors: zhaopan
 * @LastEditTime: 2021-05-11 11:07:26
 */
module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'plugin:vue/vue3-essential',
    'airbnb-base',
    'plugin:prettier/recommended',
    'plugin:jest/recommended'
  ],
  parserOptions: {
    ecmaVersion: 12,
    parser: '@typescript-eslint/parser',
    sourceType: 'module'
  },
  plugins: ['vue', '@typescript-eslint'],
  rules: {
    'no-console': ['error', { allow: ['warn', 'error'] }],
    'import/no-extraneous-dependencies': [
      'error',
      { devDependencies: true, optionalDependencies: true, peerDependencies: false }
    ],
    'import/extensions': 0,
    'no-param-reassign': ['error', { props: false }],
    'no-plusplus': 0,
    'import/no-unresolved': 0
  }
}
