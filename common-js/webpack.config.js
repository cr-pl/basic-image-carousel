const path = require('path');

module.exports = {
  entry: './carousel.js',
  output: {
    filename: 'carousel-common.js',
    path: path.resolve(__dirname, '../dist'),
  },
  experiments: {
    outputModule: true,
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};
