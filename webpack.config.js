const CopyPlugin = require('copy-webpack-plugin');
const webpack = require('webpack')
module.exports = {
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loaders: ["babel-loader"]
      },
      {
        test: /\.(less)$/,
        use: [{
          loader: 'style-loader' // creates style nodes from JS strings
        }, {
          loader: 'css-loader' // translates CSS into CommonJS
        }, {
          loader: 'less-loader' // compiles Less to CSS
        }]
      }
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx', '.json']
  },
  plugins: [
    new CopyPlugin([
      {
        from: 'src/Components',
        to: 'cake',
        toType: 'file',
      },
      {
        from: 'src/Components',
        to: 'rateDesc',
        toType: 'file',
      },
    ]),
   new webpack.HotModuleReplacementPlugin()
  ],
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './dist'
  }
};