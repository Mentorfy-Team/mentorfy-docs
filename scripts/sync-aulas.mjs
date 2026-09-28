// Copies the tutorial video catalog from mentorfy-backend into src/data/aulas.json.
//
// The backend catalog (src/tutorials/tutorials.catalog.ts) is what the app plays, so the
// docs read the same list: when a lesson is re-recorded its Bunny guid changes there, and
// re-running this script is all the docs need.
//
// Usage: node scripts/sync-aulas.mjs [path/to/tutorials.catalog.ts]
import { readFileSync, writeFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const source =
  process.argv[2] ?? resolve(root, '../mentorfy-backend/src/tutorials/tutorials.catalog.ts');
const text = readFileSync(source, 'utf8');

const str = (row, key) => row.match(new RegExp(`${key}: "((?:[^"\\\\]|\\\\.)*)"`))?.[1] ?? '';
const num = (row, key) => Number(row.match(new RegExp(`${key}: (\\d+)`))?.[1] ?? 0);
const unescape = (s) => JSON.parse(`"${s}"`);

const tracks = [...text.matchAll(/\{ key: "([^"]+)", title: "([^"]+)" \}/g)].map((m) => ({
  key: m[1],
  title: unescape(m[2]),
}));

const lessons = [...text.matchAll(/^ {2}\{ slug: .*\},$/gm)].map(([row]) => ({
  slug: str(row, 'slug'),
  track: str(row, 'track'),
  title: unescape(str(row, 'title')),
  description: unescape(str(row, 'description')),
  route: str(row, 'route'),
  external: /external: true/.test(row),
  durationSec: num(row, 'durationSec'),
  guid: str(row, 'bunnyGuid'),
}));

const libraryId = Number(text.match(/TUTORIALS_LIBRARY_ID = (\d+)/)?.[1]);
const cdnHostname = text.match(/TUTORIALS_CDN_HOSTNAME = "([^"]+)"/)?.[1];

const missing = lessons.filter((l) => !l.slug || !l.guid || !l.durationSec);
if (!libraryId || !cdnHostname || lessons.length === 0 || missing.length > 0) {
  console.error('sync-aulas: catalog did not parse cleanly', { libraryId, cdnHostname, lessons: lessons.length, missing });
  process.exit(1);
}

const out = resolve(root, 'src/data/aulas.json');
writeFileSync(out, `${JSON.stringify({ libraryId, cdnHostname, tracks, lessons }, null, 2)}\n`);
console.log(`sync-aulas: ${lessons.length} lessons in ${tracks.length} tracks -> ${out}`);
