module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  test: /\.(png|jpg|gif|svg)$/,
  use: [{
    loader: 'file-loader',
    options: {
      name: '[name].[ext]?[hash:5]'
    }
  }]
}
