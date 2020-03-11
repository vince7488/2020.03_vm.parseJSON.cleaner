const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const axios = require("axios").default;

module.exports = {
    watch: true,
    mode: "development",

    entry: "./src/index.js",

    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            }
        ] //rules
    }, //module

    plugins: [
        new CleanWebpackPlugin(),

        new HtmlWebpackPlugin({
            template: "src/index.html"
        })
    ] //plugins
};