var path = require('path');

module.exports = {
    mode: 'development',
    //エントリポイントのJavaScript
    entry:{
        'index': [
            path.resolve(__dirname, './app/index.js')
        ]
    },
    devtool: 'source-map',
    output: {
        //出力先のフォルダ
        path: path.resolve(__dirname, 'public'),
        //出力先のファイル名
        filename: 'bundle.js',
        publicPath: '/',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['babel-preset-env']
                    }
                }
            }
        ]
    }
};