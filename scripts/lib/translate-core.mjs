// Shared helpers for the documentation translation scripts.
// Talks to Claude through the official Anthropic SDK.
//
// Configure with env vars:
//   ANTHROPIC_API_KEY   (required) — your Anthropic API key
//   TRANSLATE_MODEL     (optional) — defaults to claude-opus-4-8

import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { fileURLToPath } from 'node:url';
import Anthropic from '@anthropic-ai/sdk';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Repo root is two levels up from scripts/lib/.
export const ROOT = path.resolve(__dirname, '..', '..');

// Target locales and the language name we ask Claude to translate into.
// `pt` is the default locale (source) and is intentionally absent here.
export const LOCALES = {
  en: 'English',
  es: 'Latin American Spanish',
};

export const MODEL = process.env.TRANSLATE_MODEL || 'claude-opus-4-8';

let _client = null;

export function getClient() {
  if (_client) return _client;
  if (!process.env.ANTHROPIC_API_KEY) {
    throw new Error(
      'ANTHROPIC_API_KEY is not set. Export it before running the translation scripts:\n' +
        '  export ANTHROPIC_API_KEY=sk-ant-...',
    );
  }
  _client = new Anthropic();
  return _client;
}

export function sha256(text) {
  return crypto.createHash('sha256').update(text, 'utf-8').digest('hex');
}

// Translated MDX files live deeper in the tree than the originals in docs/,
// so relative imports like `../../src/...` break. Rewrite them to the
// location-independent `@site/src/...` webpack alias.
export function rewriteRelativeSrcImports(text) {
  return text.replace(
    /(from\s+['"])(?:\.\.\/)+src\//g,
    '$1@site/src/',
  );
}

function stripCodeFence(text) {
  const trimmed = text.trim();
  const fenced = trimmed.match(/^```(?:json)?\s*\n([\s\S]*?)\n```$/);
  return fenced ? fenced[1] : trimmed;
}

function collectText(message) {
  return message.content
    .filter((block) => block.type === 'text')
    .map((block) => block.text)
    .join('');
}

const MARKDOWN_RULES = `Rules — follow these EXACTLY:
- Output ONLY the translated document. No explanations, no commentary, and do NOT wrap the whole output in a code fence.
- Keep the YAML frontmatter block (delimited by ---) EXACTLY as-is: do not translate, add, remove, or reorder its keys/values (e.g. sidebar_position).
- Never translate or alter fenced code blocks (\`\`\`), inline code (\`...\`), or their contents.
- Keep every import/export line unchanged. Keep all JSX/HTML tags, component names, and attribute NAMES unchanged. Keep identifier-like attribute values unchanged (src, href, className, style, id, width, height). DO translate human-readable attribute values: title, alt, aria-label, placeholder.
- Keep admonition markers exactly (:::tip, :::note, :::warning, :::info, :::caution, :::). Translate only the body text, never the keyword right after the colons.
- Keep every URL and path EXACTLY (the part inside parentheses of a link, and any src=). Translate only the visible link text and image alt text.
- Do NOT translate: the brand name "Mentorfy"; product and integration proper names (Stripe, Hotmart, Kiwify, Eduzz, Asaas, Guru, Digital Manager Guru, Voomp, Cademí, Lastlink, Hubla, Herospark, Zoom, etc.); technical tokens (webhook, slug, price_id, CSV, API, dashboard, URL, token, checkout, upsell, login).
- Preserve all Markdown formatting, whitespace, line breaks, lists, tables, and emphasis markers.
- Use natural, professional language appropriate for end-user product documentation.`;

// Translate a full Markdown/MDX document. Streams because documents can be
// long, then rewrites relative src imports for the new file location.
export async function translateMarkdown(content, targetLangName) {
  const client = getClient();
  const stream = client.messages.stream({
    model: MODEL,
    max_tokens: 64000,
    output_config: { effort: 'low' },
    system: `You are a professional technical translator for the Mentorfy product documentation (a SaaS platform for mentors). Translate the given Markdown/MDX document from Brazilian Portuguese to ${targetLangName}.\n\n${MARKDOWN_RULES}`,
    messages: [{ role: 'user', content }],
  });
  const message = await stream.finalMessage();
  const translated = collectText(message);
  return rewriteRelativeSrcImports(translated);
}

// Translate the string VALUES of a flat { key: text } object, returning a new
// object with the same keys. Used for UI strings and category metadata.
export async function translateJsonStrings(map, targetLangName) {
  const keys = Object.keys(map);
  if (keys.length === 0) return {};

  const client = getClient();
  const message = await client.messages.create({
    model: MODEL,
    max_tokens: 8000,
    output_config: { effort: 'low' },
    system: `You are a professional UI string translator for the Mentorfy product documentation. Translate each value of the given JSON object into ${targetLangName}.\n\nRules:\n- Return ONLY a JSON object with the SAME keys, each mapped to its translated string. No commentary, no code fence.\n- If a value is already written in ${targetLangName}, return it unchanged.\n- Preserve placeholders and markup exactly: ICU like {count} or {label}, HTML tags, and the brand "Mentorfy".\n- Keep translations concise and natural for a UI label or short description.`,
    messages: [{ role: 'user', content: JSON.stringify(map, null, 2) }],
  });

  const raw = stripCodeFence(collectText(message));
  let parsed;
  try {
    parsed = JSON.parse(raw);
  } catch (err) {
    throw new Error(
      `Failed to parse translation JSON for ${targetLangName}: ${err.message}\nResponse was:\n${raw}`,
    );
  }
  // Guard against missing keys — fall back to the source value.
  const result = {};
  for (const key of keys) {
    result[key] = typeof parsed[key] === 'string' ? parsed[key] : map[key];
  }
  return result;
}

// --- Incremental translation cache ----------------------------------------

const CACHE_PATH = path.join(ROOT, '.translation-cache.json');

export function loadCache() {
  try {
    return JSON.parse(fs.readFileSync(CACHE_PATH, 'utf-8'));
  } catch {
    return { docs: {}, ui: {} };
  }
}

export function saveCache(cache) {
  fs.writeFileSync(CACHE_PATH, JSON.stringify(cache, null, 2) + '\n');
}

// --- Small concurrency helper ----------------------------------------------

export async function mapWithConcurrency(items, limit, fn) {
  const results = new Array(items.length);
  let next = 0;
  async function worker() {
    while (next < items.length) {
      const index = next++;
      results[index] = await fn(items[index], index);
    }
  }
  const workers = Array.from({ length: Math.min(limit, items.length) }, worker);
  await Promise.all(workers);
  return results;
}
