const { default:mdjson } = require('../dist/md2json.js');
const { resolve } = require('path');

const log = (json) => console.log(JSON.stringify(json, null, 2));

const inDir = resolve(__dirname, './posts')

log(mdjson(inDir, {
  sanitize: false
}));
