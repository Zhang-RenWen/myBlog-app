module.exports = {
  extends: [
    'stylelint-config-standard-scss',
    'stylelint-config-prettier',
    'stylelint-config-recommended-vue',
    'stylelint-config-html'
  ],
  plugins: ['stylelint-scss', 'stylelint-order'],
  rules: {
    'declaration-colon-space-after': 'always-single-line',
    'declaration-colon-space-before': 'never',
    'declaration-block-trailing-semicolon': 'always',
    'rule-empty-line-before': [
      'always',
      {
        ignore: ['after-comment', 'first-nested']
      }
    ]
  },
  overrides: [
    {
      files: ['*.html', '**/*.html'],
      customSyntax: 'postcss-html'
    }
  ],
  ignoreFiles: ['./node_modules/**/*.{css,scss,sass}', './dist/**/*.{css,scss,sass}']
}
