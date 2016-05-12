var path = require('path');
var webpack = require('webpack');
var host = 'localhost';
var BrowserSyncPlugin = require('browser-sync-webpack-plugin');
var port = 5000;

var definePlugin = new webpack.DefinePlugin({
    __DEV__: process.env.NODE_ENV !== 'production'
});

module.exports = {
    devtool: 'source-map',
    entry: [
        'webpack-dev-server/client?http://' + host + ':' + port,
        'webpack/hot/only-dev-server',
        './index'
    ],
    output: {
        path: path.join(__dirname, 'dist/static'),
        filename: 'bundle.js',
        publicPath: '/static/'
    },
    plugins: [
        definePlugin,
        new webpack.HotModuleReplacementPlugin(),
        new BrowserSyncPlugin(
            {
                host: 'localhost',
                port: 5002,
                proxy: 'http://localhost:5000/',
            },
            {
                reload: false,
            }
        ),
    ],
    module: {
        loaders: [
            {
                test: /\.js$/,
                loaders: ['react-hot', 'babel'],
                exclude: /node_modules/,
                include: __dirname
            },
            {
                test: /\.scss$/,
                loader: 'style!css!sass'
            },
            {
                test: /\.css$/,
                loader: 'style!css'
            },
            {
                include: /\.json$/,
                loaders: ["json-loader"]
            }
        ]
    },
    resolve: {
        extensions: ['', '.json', '.jsx', '.js']
    }
};
