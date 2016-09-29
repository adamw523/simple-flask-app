var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
let extractCSS = new ExtractTextPlugin('app/static/bundle.css');

module.exports = {
  // entry: './main.js',
  context: path.resolve(__dirname, 'app'),
  entry: './static/main.js',
  output: { path: __dirname, filename: 'app/static/bundle.js' },
  module: {
    loaders: [
      { test: /\.scss$/, loader: extractCSS.extract("style", "css", "sass") },
      { test: /\.css$/, loader: "style-loader!css-loader" },
      // { test: /\.css$/, loader: 'style-loader!css-loader' },
      // { test: /\.eot(\?v=\d+\.\d+\.\db+)?$/, loader: "file" },
      // { test: /\.(woff|woff2)$/, loader:"url?prefix=font/&limit=5000" },
      // { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/octet-stream" },
      // { test: /\.octetsvg(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=image/svg+xml" }
      {
        test: /\.(woff|woff2|ttf|svg|eot)/,
        loader: 'url?limit=100000',
      },

    ]
  },
  plugins: [
    extractCSS
  ]
}
