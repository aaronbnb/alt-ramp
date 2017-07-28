const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: {
    background: './src/background.jsx',
    // update: '.src/update.js'
  },
  output: {
    filename: 'background.bundle.js'
  },
  module: {
   rules: [
           {
          test: /\.jsx?$/,         // Match both .js and .jsx files
          exclude: /node_modules/,
          loader: "babel-loader",
          query:
            {
              presets:['react']
            }
      },
     {
       test: /\.css$/,
       loader: ExtractTextPlugin.extract({
         fallback: 'style-loader',
         use: 'css-loader'
       })
     },
     {
       test: /\.(ico|eot|otf|webp|ttf|woff|woff2)(\?.*)?$/,
       use: 'file-loader?limit=100000'
     },
     {
       test: /\.(jpe?g|png|gif|svg)$/i,
       use: [
         'file-loader?limit=100000',
         {
           loader: 'img-loader',
           options: {
             enabled: true,
             optipng: true
           }
         }
       ]
     }
   ]
 },
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.jsx', '*']
  },
  plugins: [
   new webpack.DefinePlugin({
     'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
   }),
 ]
};
