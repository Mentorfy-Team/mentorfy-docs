#!/usr/bin/env node
// Translate the Markdown docs (and their category metadata) from the default
// Portuguese source into each target locale, writing the result into the
// Docusaurus i18n folders. Incremental: a file is only re-translated when its
// source content changes (tracked by SHA-256 in .translation-cache.json).
//
// Usage:  ANTHROPIC_API_KEY=... node scripts/translate-docs.mjs

import fs from 'node:fs';
import path from 'node:path';
import {
  ROOT,
  LOCALES,
  sha256,
  translateMarkdown,
  translateJsonStrings,
  loadCache,
  saveCache,
  mapWithConcurrency,
} from './lib/translate-core.mjs';

const SOURCE_DIR = path.join(ROOT, 'docs');
const CONCURRENCY = Number(process.env.TRANSLATE_CONCURRENCY || 4);

function localeDocsDir(locale) {
  return path.join(
    ROOT,
    'i18n',
    locale,
    'docusaurus-plugin-content-docs',
    'current',
  );
}

// Collect every translatable file under docs/: markdown pages and the
// _category_.json sidebar metadata.
function collectFiles(dir, acc = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      collectFiles(full, acc);
    } else if (/\.mdx?$/.test(entry.name)) {
      acc.push({ full, kind: 'markdown' });
    } else if (entry.name === '_category_.json') {
      acc.push({ full, kind: 'category' });
    }
  }
  return acc;
}

function writeOut(outPath, content) {
  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  fs.writeFileSync(outPath, content);
}

async function translateCategory(content, langName) {
  const data = JSON.parse(content);
  const map = {};
  if (typeof data.label === 'string') map.label = data.label;
  if (data.link && typeof data.link.description === 'string') {
    map.description = data.link.description;
  }
  if (Object.keys(map).length > 0) {
    const translated = await translateJsonStrings(map, langName);
    if ('label' in map) data.label = translated.label;
    if ('description' in map) data.link.description = translated.description;
  }
  return JSON.stringify(data, null, 2) + '\n';
}

async function run() {
  if (!fs.existsSync(SOURCE_DIR)) {
    console.error(`No docs directory found at ${SOURCE_DIR}`);
    process.exit(1);
  }

  const files = collectFiles(SOURCE_DIR);
  const cache = loadCache();
  cache.docs ??= {};

  for (const [locale, langName] of Object.entries(LOCALES)) {
    const outDir = localeDocsDir(locale);
    console.log(`\n→ ${locale} (${langName}) — ${files.length} files`);

    let translated = 0;
    let skipped = 0;

    await mapWithConcurrency(files, CONCURRENCY, async (file) => {
      const rel = path.relative(SOURCE_DIR, file.full);
      const source = fs.readFileSync(file.full, 'utf-8');
      const hash = sha256(source);
      const cacheKey = `${locale}:${rel}`;
      const outPath = path.join(outDir, rel);

      if (cache.docs[cacheKey] === hash && fs.existsSync(outPath)) {
        skipped += 1;
        return;
      }

      const output =
        file.kind === 'category'
          ? await translateCategory(source, langName)
          : await translateMarkdown(source, langName);

      writeOut(outPath, output);
      cache.docs[cacheKey] = hash;
      translated += 1;
      console.log(`  ✓ ${rel}`);
    });

    console.log(`  ${translated} translated, ${skipped} unchanged`);
    saveCache(cache);
  }

  console.log('\nDone. Translated docs written to i18n/<locale>/.');
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
