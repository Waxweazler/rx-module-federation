const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry: './src/index.js',
    mode: 'development',
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        port: 5000
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    presets: ['@babel/preset-react']
                }
            },
        ]
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'shell',
            remotes: {
                mfe: 'mfe@//localhost:3000/remoteEntry.js'
            },
            shared: {
                react: {singleton: true},
                'react-dom': {singleton: true}
            }
        }),
        new HtmlWebpackPlugin({
            template: './public/index.html'
        })
    ]
};
