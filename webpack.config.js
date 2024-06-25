import { fileURLToPath } from 'url';
import { dirname } from 'path';

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [new HtmlWebpackPlugin({template: 'src/index.html'})],
  module: {
    rules: [
    {
      test: /\.(png|svg|jpg|jpeg|gif)$/i,
      type: 'asset/resource',
    },
    {
      test: /\.css$/i,
      use: ["style-loader", "css-loader"],
    }]}
};