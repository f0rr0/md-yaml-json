import { readdirSync, readFileSync, statSync } from 'fs';
import { inspect } from 'util';
import { basename, extname } from 'path';
import { loadFront as fm } from 'yaml-front-matter';
import markdownIt from 'markdown-it';

const md = markdownIt({
  html: true,
  linkify: true,
  typographer: true
}).use(require('markdown-it-emoji'))
  .use(require('markdown-it-implicit-figures'), {
    figcaption: true
  })
  .use(require('markdown-it-attrs'));

md.linkify.tlds('onion', true);
md.linkify.add('git:', 'http:');
md.linkify.add('ftp:', null);
md.set({ fuzzyIP: true });

export const __esModule = true;

export function processFile(file, opts={}) {
  const source = readFileSync(file);
  const stats = statSync(file);
  const meta = fm(source);
  meta.path = file; // filename
  meta.mtime = new Date(inspect(stats.mtime)); // unix mtime to ISO
  meta.birthtime = new Date(inspect(stats.birthtime)) // unix birthtime to ISO
  const html = opts.parser ? opts.parser.render(meta.__content) : md.render(meta.__content);
  delete meta.__content;
  return {
    meta,
    html
  };
}

export default function processDir(dir, opts={}) {
  const filenames = readdirSync(dir)
    .filter(path => path.endsWith('.md') || path.endsWith('.markdown') || path.endsWith('.MD'))
    .map(path => dir.concat(`/${path}`));
  const processed = filenames.map(file => processFile(file, opts));
  return processed;
}
