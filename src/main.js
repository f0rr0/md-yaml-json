import { readdirSync, readFileSync, statSync } from 'fs';
import { inspect } from 'util';
import { basename, extname } from 'path';
import { loadFront as fm } from 'yaml-front-matter';
import marked from 'marked';

export const __esModule = true;

export function processFile(file, opts={}) {
  const source = readFileSync(file);
  const stats = statSync(file);
  const meta = fm(source);
  meta.stub = basename(file, extname(file)); // filename to stub
  meta.mtime = new Date(inspect(stats.mtime)); // unix mtime to ISO
  meta.birthtime = new Date(inspect(stats.birthtime)) // unix birthtime to ISO
  const html = marked(meta.__content, opts);
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
