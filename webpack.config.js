const path = require('path');

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
};
