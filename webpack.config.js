const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const path = require('path')
const webpack = require('webpack')

let serverIsRun = false

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name]-bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.js$|\.react.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      debug: true
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks(module, count) {
        var context = module.context;
        return context && (context.indexOf('node_modules/react-dom/') === -1 && context.indexOf('node_modules/react/') === -1 && context.indexOf('src') === -1);
      }
    }),
    new webpack.optimize.CommonsChunkPlugin({
      async: true,
      filename: 'react-bundle.js',
      minChunks(module, count) {
        var context = module.context;
        return context && (context.indexOf('node_modules/react/') >= 0)
      }
    }),
    new webpack.optimize.CommonsChunkPlugin({
      async: true,
      filename: 'react-dom-bundle.js',
      minChunks(module, count) {
        var context = module.context;
        return context && (context.indexOf('node_modules/react-dom/') >= 0);
      }
    })
  ],
  devtool: '#source-map',
  watch: true
}
