const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');


module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
      static: './dist',
      port: 3000,
      hot: true,
    },
    module: {
        rules: [
          {
            test: /\.css$/i,
            use: [
              'style-loader',
              'css-loader',
            ]
          },
          {
            test: /\.(woff|woff2|eot|ttf|otf)$/i,
            type: 'asset/resource',
          },
          {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            type: 'asset/resource',
          },    
        ]
    },
    optimization: {
      splitChunks: {
        chunks: 'all',
      },
    },
});