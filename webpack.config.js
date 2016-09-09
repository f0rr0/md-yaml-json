const { resolve } = require('path');
const { dependencies } = require('./package.json');

const nodeModules = {};

Object
    .keys(dependencies)
    .forEach((mod) => {
     nodeModules[mod] = `commonjs ${mod}`;
    });

module.exports = (env = { dev: true }) => ({
  context: resolve(__dirname, './src'),
  entry: {
    mdjson: './main.js'
  },
  target: "node",
  output: {
    filename: '[name].js',
    path: resolve(__dirname, './dist'),
    pathInfo: !env.prod,
    libraryTarget: 'commonjs2',
    library: "mdjson"
  },
  devtool: env.prod ? 'source-map' : 'eval',
  externals: nodeModules
});
