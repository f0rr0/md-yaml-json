## md-yaml-json
Parse Markdown files with YAML front matter to JSON in Node.JS

### Install
```
npm i -D md-yaml-json
```
### Usage
```js
// ES2015 Modules
import parser from 'md-yaml-json';
import { processFile as parseToJSON } from 'md-yaml-json';

// commonjs
const parser = require('md-yaml-json').default;
const parseToJSON = require('md-yaml-json').processFile;

// ES2015 destructuring assignment
const { default:parser, processFile:parseToJSON } = require('md-yaml-json');

// Use absolute paths
const { resolve } = require('path');

// Parse a directory of markdown files
const parsedDir = parser(resolve(__dirname, './path/to/md/dir'));

// Parse a single file
const parsedFile = parseToJSON(resolve(__dirname, './path/to/md/file'));

/*
** Pass an optional object with options. Uses marked for parsing md.
** See https://github.com/chjj/marked#options-1
*/
const another = parseToJSON(resolve(__dirname, './path/to/another'), {
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: false
});

// Parsed output is JSON. Serialize it before logging.
console.log(JSON.stringify(parsedDir, null, 2));
console.log(JSON.stringify(parsedFile, null, 2));

```
### License
MIT License

Copyright (c) 2016 Siddharth Jain

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
