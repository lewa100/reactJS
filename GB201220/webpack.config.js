const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    context: path.resolve(__dirname, 'src'),
    entry: './index.jsx',
    output: {
        filename: 'app.js',
        path: path.resolve(__dirname, 'static', 'build'),
        publicPath: ''
    },
    devServer: {
        historyApiFallback: true,
        contentBase: path.resolve(__dirname, 'static', 'build'),
        open: true,
        compress: true,
        hot: true,
        port: 8888,
    },
    module: {
        rules: [{
            test: /\.jsx?$/,
            include: path.resolve(__dirname, 'src'),
            exclude: path.resolve(__dirname, 'node_modules'),
            loader: 'babel-loader',
            options: {
                presets: ['@babel/env', '@babel/react']
            }
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src/index.html'),
            filename: 'index.html',
            minify: {
                collapseWhitespace: false
            }
        }),
    ]
};