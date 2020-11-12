const path = require('path')

module.exports = {
    entry: ['babel-polyfill', './src/index.js'],
    output: {
        path: path.resolve(__dirname, 'public/scripts'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            // uključi sve javascript file-s REGEX
            test: /\.js$/,
            // isključi
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['env'],
                    plugins: ['transform-object-rest-spread']
                }
            }
        }]
    },
    // dolazi ako imamo dev server
    devServer: {
        contentBase: path.resolve(__dirname, 'public'),
        publicPath: '/scriptdev/'
    },
    devtool: 'source-map'
}