const path = require('path');
const webpack = require("webpack");

module.exports = {
    mode: 'development',
    devtool: 'inline-source-map',
    entry: './src/js/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
        new webpack.ProvidePlugin({
          $: 'jquery',
          jQuery: 'jquery',
        })
    ],
};