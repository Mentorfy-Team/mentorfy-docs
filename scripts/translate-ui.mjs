#!/usr/bin/env node
// Translate the UI strings Docusaurus extracts with `write-translations`
// (navbar, footer, code.json from <Translate> components, sidebar category
// labels in current.json) for each target locale.
//
// Run AFTER `docusaurus write-translations --locale <locale>`, which creates
// the i18n/<locale>/**/*.json skeletons with the default (source) messages.
// Only the `message` field of each entry is translated; the developer-facing
// `description` is left untouched. Incremental via .translation-cache.json.
//
// Usage:  ANTHROPIC_API_KEY=... node scripts/translate-ui.mjs

import fs from 'node:fs';
import path from 'node:path';
import {
  ROOT,
  LOCALES,
  translateJsonStrings,
  loadCache,
  saveCache,
} from './lib/translate-core.mjs';

function localeDir(locale) {
  return path.join(ROOT, 'i18n', locale);
}

function collectJsonFiles(dir, acc = []) {
  if (!fs.existsSync(dir)) return acc;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      collectJsonFiles(full, acc);
    } else if (entry.name.endsWith('.json')) {
      acc.push(full);
    }
  }
  return acc;
}

async function run() {
  const cache = loadCache();
  cache.ui ??= {};

  for (const [locale, langName] of Object.entries(LOCALES)) {
    const dir = localeDir(locale);
    if (!fs.existsSync(dir)) {
      console.warn(
        `\n! i18n/${locale} not found — run "docusaurus write-translations --locale ${locale}" first. Skipping.`,
      );
      continue;
    }

    const files = collectJsonFiles(dir);
    console.log(`\n→ ${locale} (${langName}) — ${files.length} JSON files`);

    for (const file of files) {
      const rel = path.relative(dir, file);
      const data = JSON.parse(fs.readFileSync(file, 'utf-8'));

      // Collect entries whose translated value we don't already have cached.
      const pending = {};
      for (const [key, entry] of Object.entries(data)) {
        if (!entry || typeof entry.message !== 'string') continue;
        const cacheKey = `${locale}:${rel}:${key}`;
        const cached = cache.ui[cacheKey];
        if (cached && cached.out === entry.message) continue; // already translated
        pending[key] = entry.message;
      }

      const keys = Object.keys(pending);
      if (keys.length === 0) continue;

      const translated = await translateJsonStrings(pending, langName);
      for (const key of keys) {
        const cacheKey = `${locale}:${rel}:${key}`;
        data[key].message = translated[key];
        cache.ui[cacheKey] = { src: pending[key], out: translated[key] };
      }
      fs.writeFileSync(file, JSON.stringify(data, null, 2) + '\n');
      console.log(`  ✓ ${rel} (${keys.length} strings)`);
    }

    saveCache(cache);
  }

  console.log('\nDone. UI strings translated in i18n/<locale>/.');
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
