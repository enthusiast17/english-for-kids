const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const path = require('path');

module.exports = {
  entry: [
    './src/ts/index.ts',
    './src/styles/index.scss',
  ],
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        include: [path.resolve(__dirname, 'src/ts')],
      },
      {
          test: /\.ttf$/,
          use: 'url-loader',
          include: [path.resolve(__dirname, 'src/assets/fonts')]
      },
      {
          test: /\.(png|jpg)$/,
          type: "asset",
          include: [path.resolve(__dirname, 'src/assets')]
      },
      {
        test: /\.(s*)css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
        include: [path.resolve(__dirname, 'src/styles')],
      },
    ],
  },
  plugins: [new MiniCssExtractPlugin({ filename: 'index.css' }), new ESLintPlugin({ extensions: ['ts'] })],
  resolve: {
    extensions: ['.ts', '.js', '.scss', '.ttf', '.png'],
  },
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
    publicPath: 'public',
  },
  performance: {
    hints: false
  },
  devtool: 'source-map',
};
