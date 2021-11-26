const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const rootDir = __dirname;
const srcDir = path.join(rootDir, 'src');
const distDir = path.join(rootDir, 'dist');

module.exports = {
  mode: 'development',
  entry: path.join(srcDir, 'index.js'),
  // path.join( __dirname,'src','index.js' )
  output: {
    path: distDir,
    filename: 'bundle.js',
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(srcDir, 'index.html'),
      filename: 'index.html',
    }),
  ],

  devServer: {
    port: 8080,
    static: path.join(distDir),
  },
};
