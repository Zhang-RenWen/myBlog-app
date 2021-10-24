const StylelintPlugin = require('stylelint-webpack-plugin')

module.exports = {
  plugins: [
    new StylelintPlugin({
      files: ['**/*.vue']
    })
  ]
}
