var path = require('path');
var webpack = require('webpack');

module.exports = {
    // watch: true,
    entry: './public/src/index.js',
    output: {
        path: path.resolve(__dirname, 'public', 'src', 'dist'),
        filename: 'index.bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                query: {
                    presets: ['env', 'react', 'stage-2']
                }
            },{
                test: /\.css/,
                loader: 'css-loader'
            }
        ]
    },
    stats: {
        colors: true
    },
    devtool: 'source-map'
};