const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    index: path.join(__dirname, '../src/client/index.tsx'),
  },
  output: {
    path: path.join(__dirname, '../dist/public'),
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
  },
  module: {
    rules: [
      {
        test: /.tsx?$/,
        use: ['babel-loader'],
        exclude: /node_modules/,
      },
    ],
  },

  plugins: [],
};
