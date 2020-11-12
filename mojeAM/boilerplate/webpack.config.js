const path = require('path')
module.exports = {
  // ulazne datoteke,  (babel-polyfill rijesava problem async await)
  entry:['babel-polyfill','./src/index.js'],
  output:  {
    path: path.resolve(__dirname,'public/scripts'),
    filename: 'bundle.js'
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
