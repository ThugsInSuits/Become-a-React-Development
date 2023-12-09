module.exports = {
  entry: './src/main.js',
  output: {
    path: __dirname,
    filename: 'myaccount.dist.js'
  },
  module: {
    rules: [{
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
      options: {
        presets: ['es2015', 'stage-2']
      }
    }]
  }
};
