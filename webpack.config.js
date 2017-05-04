const webpack = require('webpack');
const path = require('path');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');

let config = {

    entry: './src/index.js', // entry file
    output: {
      path: path.resolve(__dirname, './public'), // ouput path
      filename: 'output.js' // output filename
    },
    module: {
      rules: [{
          test: /\.js$/, // files ending with .js
          exclude: /node_modules/, // exclude the node_modules directory
          loader: "babel-loader" // use this (babel-core) loader
        },
        {
          test: /\.scss$/, // files ending with .scss
          use: ExtractTextWebpackPlugin.extract({ // call our plugin with extract method
            use: ['css-loader', 'sass-loader'], // use these loaders
            fallback: 'style-loader' // fallback for any CSS not extracted
          }) // end extract
        },
        {
          test: /\.(png|jpg)$/,
          use: [{
            loader: 'url-loader',
            options: {
              limit: 10000
            } // Convert images < 10k to base64 strings
          }]
        },
        {
          test: /\.(gif|png|jpe?g|svg)$/i,
          loaders: [
              'file-loader',
              {
                loader: 'image-webpack-loader',
                query: {
                  progressive: true,
                  optimizationLevel: 7,
                  interlaced: false,
                  pngquant: {
                    quality: '65-90',
                    speed: 4
                  }
                }
              }
            ]
          }
         ] // end rules
        },
        plugins: [
          new ExtractTextWebpackPlugin('styles.css') // call the ExtractTextWebpackPlugin constructor and name our css file
        ],
        devServer: {
          contentBase: path.resolve(__dirname, './public'), // A directory or URL to serve HTML content from.
          historyApiFallback: true, // fallback to /index.html for Single Page Applications.
          inline: true, // inline mode (set to false to disable including client scripts (like livereload)
          open: true // open default browser while launching
        },
        devtool: 'eval-source-map' // enable devtool for better debugging experience
      }

      module.exports = config;
