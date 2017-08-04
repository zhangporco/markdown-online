var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
require("babel-core/register");
require("babel-polyfill");

var BUILD_DIR = path.resolve(__dirname, '../dist');
var APP_DIR = path.resolve(__dirname, '../src');

module.exports = function (NODE_ENV) {
    return {
        entry: {
            main: ['babel-polyfill', APP_DIR + '/main.js'],
            vendor: ['vue', 'vue-router']
        },
        output: {
            path: BUILD_DIR,
            filename: '[name].js',
        },
        devServer: {
            inline: true,
            host: '127.0.0.1',
            port: 3000,
            historyApiFallback: true,
            compress: true,
            disableHostCheck: true,
        },

        module: {
            noParse: /node_modules\/(moment|chart\.js)/,
            loaders: [
                {
                    test: /\.(vue)$/,
                    loader: 'vue-loader'
                },
                {
                    test: /\.s?css$/,
                    loader: ExtractTextPlugin.extract({
                        fallback: "style-loader",
                        use: "css-loader!sass-loader",
                    }),
                },
                {
                    test: /\.(png|jpg|jpeg|webp|gif)$/,
                    loader: 'url-loader',
                }
            ]
        },
        plugins: [
            new webpack.optimize.CommonsChunkPlugin({
                names: ['vendor', 'manifest'] // 指定公共 bundle 的名字。
            }),
            new ExtractTextPlugin('[name].css'),

            new webpack.DefinePlugin({
                'process.env': {
                    NODE_ENV: JSON.stringify(NODE_ENV ? 'production' : 'development')
                }
            }),
            // new webpack.optimize.UglifyJsPlugin({
            //     output: {
            //         comments: false, // remove all comments
            //     },
            //     compress: {
            //         warnings: false
            //     }
            // })
        ],
    }
}
