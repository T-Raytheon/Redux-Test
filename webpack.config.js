var {resolve} = require('path');
//动态生成HTML的插件
var htmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');

module.exports = {
    //入口文件相对路径
    entry: resolve(__dirname, './src/index.jsx'),
    //出口文件相对路径
    output: {
        path: resolve(__dirname, './build'), // 出口文件地址
        filename: 'bundle.js' // 出口文件名
    },
    //模块加载器
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }, {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            }, {
                test: /\.(ttf|png|gif|jpg|svg)$/,
                use: 'url-loader'
            }, {
                test: /\.js?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015', 'react']
                    }
                }
            }, {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015', 'react', 'stage-0']
                    }
                }
            }
        ]
    },
    plugins: [//浏览器热更新
        new htmlWebpackPlugin({
            template: './public/index.html', //指定模板路径
            // filename: 'index.html', //指定文件名
        })]
}