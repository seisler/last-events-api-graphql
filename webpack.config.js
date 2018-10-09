const webpack = require('webpack');
const path = require('path');
const nodeExternals = require('webpack-node-externals');
const NodemonWebpackPlugin = require('nodemon-webpack-plugin');

module.exports = {
  entry: ['./src/server.ts'],
  watch: true,
  target: 'node',
  externals: [
    nodeExternals({
      whitelist: [],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  mode: "development",
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  plugins: [
    new NodemonWebpackPlugin(),
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'server.js',
  },
};
