const path = require('path');

module.exports = {
  entry: {
    app: ['babel-polyfill', './src/app.js']
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'app.bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
    ]
  }
}