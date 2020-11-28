const { resolve } = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: resolve(__dirname, 'build'),
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options:{
                            presets:['@babel/preset-env'],
                        }
                    }
                ]

            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: './src/template/index.html',
        }),
    ],
    devServer: {
        contentBase: resolve(__dirname, 'build'),
        port: 3000,
        hot: true,
    }
}