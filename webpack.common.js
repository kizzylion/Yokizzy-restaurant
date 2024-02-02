const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

    entry: {
      index: {
          import: './src/index.js',
      },
      restaurant: {
          import: './src/restaurant-page.js'
      }
    },
    
    module: {
        rules: [
          {
            test: /\.m?js$/,
            exclude: /node_modules/,
            use: {
              loader: "babel-loader",
              options: {
                presets: ['@babel/preset-env']
              }
            }
          },
          {
            test: /\.(png|svg|jpg|jpeg|gif|ico)$/i,
            type: 'asset/resource',
            generator: {
              filename: 'images/[name][ext]',
            },
            
          },
          {
            test: /\.(woff|woff2|eot|ttf|otf)$/i,
            type: 'asset/resource',
            generator: {
              filename: 'fonts/[name][ext]',
            },
          },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
          template: './src/index.html',
          inject: 'body',
        }),

    ],
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
      clean: true,
    },    
};