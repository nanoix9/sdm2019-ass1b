const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: __dirname + '/src/app/index.jsx',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  output: {
    filename: 'index_bundle.js',
    path: __dirname + '/dist/frontend'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: __dirname + '/src/views/index.html',
      filename: 'index.html'
    })
  ]
}