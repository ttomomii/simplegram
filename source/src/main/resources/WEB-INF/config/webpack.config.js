'use strict'
const path = require('path');
const PATH_DIST = path.resolve('public/dist');
const proxy = {};
proxy[`${process.env._CONTEXT_PATH}/public/resource-dev/dist/bundle.css`] = {
    target: "http://localhost:3600",
    pathRewrite: {'bundle.css': 'blank.css'}
};

const commonConfig = {
    devServer: {
        contentBase: PATH_DIST,
        // watchContentBase: true,
        // host: "0.0.0.0",
        // port: 3600,
        hotOnly: true,
        overlay: false,
        proxy: proxy
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.ts$/,// 拡張子がjsで
                exclude: /node_modules/,// node_modulesフォルダ配下は除外
                loader: 'ts-loader',// babel-loaderを使って変換する
            },
            {
                test: /\.s?css$/,// 拡張子がscssまたはcssで
                use: [
                    require.resolve('style-loader'),
                    {
                        loader: require.resolve('css-loader'),
                        options: {
                            importLoaders: 1
                        }
                    },
                    {
                        loader: require.resolve('sass-loader'),
                        options: {
                            importLoaders: 1
                        }
                    },
                    {
                        loader: require.resolve('postcss-loader'),
                        options: {
                            ident: 'postcss',
                            parser: 'postcss-scss',
                            plugins: () => [
                                require('postcss-flexbugs-fixes'),
                                autoprefixer({
                                    browsers: ['>5%', 'last 4 version', 'Firefox ESR', 'not ie < 11',],
                                    flexbox: 'no-2900',
                                }),
                            ],
                        },
                    },

                ]
            },
            {
                test: /\.(jpg|ping)$/,
                loader: 'url-loader',
            },

        ]
    }
}
module.exports = {
    ...commonConfig,
    //エントリポイントのJavaScript
    entry:  path.resolve(__dirname, 'index.js'),
    output: {
        filename: 'bundle.js',
        path: PATH_DIST,
        publicPath: PATH_DIST
    },
    module: {
        rules: [
            {
                test: /\.js$/,// 拡張子がjsで
                exclude: /node_modules/,// node_modulesフォルダ配下は除外
                loader: 'babel-loader',// babel-loaderを使って変換する
                options: {
                    presets: ['@babel/preset-env','@babel/preset-react']
                }
            }
        ]
    }
};