const { default:parser } = require('../dist/md-yaml-json.js');
const { resolve } = require('path');

const log = (json) => console.log(JSON.stringify(json, null, 2));

const inDir = resolve(__dirname, './posts')

log(parser(inDir, {
  sanitize: false
}));
