import antfu from '@antfu/eslint-config'

export default antfu({
  formatters: true,
}, {
  files: ['**/*.ts'],
  rules: {
    'node/prefer-global/process': 'off',
  },
})
