module.exports = {
  linters: {
    '**/*.+(js|json|less|css|sass|ts|tsx|md)': [
      'prettier',
      'npm run test -- --coverage --findRelatedTests',
      'git add',
    ],
  },
}
