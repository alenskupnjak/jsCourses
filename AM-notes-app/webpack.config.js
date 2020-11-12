const path = require('path')
module.exports = {
  // ulazne datoteke,  (babel-polyfill rijesava problem async await)
  entry:{
    index:['babel-polyfill','./src/index.js'],
    edit:['babel-polyfill','./src/edit.js']
  },
  output:  {
    path: path.resolve(__dirname,'public/scripts'),
    filename: '[name]-bundle.js'
  },
  module: {
    rules:[{
      test: /\.js$/,
      exclude: /node_modules/,
      use:{
        loader: 'babel-loader',
        options: {
          presets:['env']
        }
      }
    }]
  },
  devServer: {
    // definiran servere sa kojeg se direktorija pokrece
    contentBase: path.resolve(__dirname,'public'),
    publicPath: '/scripts/'
  },
  // omogucava gledanje izvoenog script coda u pregledniku (browswru)
   devtool: 'source-map'
}
