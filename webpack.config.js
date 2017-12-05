const webpack = require('webpack');
const { CheckerPlugin } = require('awesome-typescript-loader')

module.exports = {
    entry: './src/index.ts',

    output: {
        filename: './dist/bundle.js'
    },

    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx']
    },

    devtool: 'inline-source-map',

    module: {
        loaders: [
            {
                test: /\.ts?$/,
                loader: 'awesome-typescript-loader',
            }
        ]
    },
    
    plugins: [
        new CheckerPlugin(),
        new webpack.HotModuleReplacementPlugin(),
    ],
};
