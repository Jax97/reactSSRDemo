const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  mode: 'development',
  target: 'node',
  entry: {
    index: path.join(__dirname, '../src/server/app.tsx'),
  },
  output: {
    path: path.join(__dirname, '../dist'),
    filename: 'app.js',
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
  externals: [nodeExternals()],
};
