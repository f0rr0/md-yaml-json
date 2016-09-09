const { default:mdjson } = require('../dist/mdjson.js');
const { resolve } = require('path');

const log = (json) => console.log(JSON.stringify(json, null, 2));

const inDir = resolve(__dirname, './posts')

log(mdjson(inDir, {
  sanitize: false
}));
