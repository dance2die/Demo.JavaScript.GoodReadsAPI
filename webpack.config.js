var path = require('path');

// https://www.slightedgecoder.com/2017/05/22/setting-es6-environment-asp-net-mvc-5/
module.exports = {
    node: {
        __dirname: true
    },
    entry: './js/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './js/dist')
    },
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                test: /\.js$/,
                exclude: /node_modules/
            }
        ]
    },
    // https://github.com/StephenGrider/ReduxSimpleStarter/blob/master/webpack.config.js
    devServer: {
        port: 9000,
        headers: {
            "User-Agent": "Fiddler",
            "Access-Control-Allow-Origin": "http://localhost:9000",
            "Access-Control-Allow-Credentials": "true"
        },
        proxy: {
            '/api': {
                target: 'http://localhost:8080',
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    }
}