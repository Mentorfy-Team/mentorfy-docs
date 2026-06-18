# Website

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Using SSH:

```
$ USE_SSH=true yarn deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

### Translations (i18n)

The site is available in **Portuguese (`pt`, default), English (`en`) and Spanish (`es`)**. A language switcher appears in the navbar. Translated content lives under `i18n/` and is committed to the repo, so building and deploying does **not** require an API key.

Translations are generated automatically with Claude (Anthropic API). You only run this when the Portuguese source changes.

**One-time setup:** export an Anthropic API key.

```
$ export ANTHROPIC_API_KEY=sk-ant-...
```

**Generate / update translations:**

```
$ yarn translate
```

This runs three steps in order:

1. `yarn i18n:extract` — `docusaurus write-translations` for `en` and `es`, creating the UI string skeletons (navbar, footer, sidebar categories, and the `<Translate>` strings from React components).
2. `yarn translate:ui` — translates those UI strings (`scripts/translate-ui.mjs`).
3. `yarn translate:docs` — translates the Markdown docs into `i18n/<locale>/docusaurus-plugin-content-docs/current/` (`scripts/translate-docs.mjs`).

After translating, rebuild to pick up the new content:

```
$ yarn build
```

**Notes**

- **Incremental:** a docs file is only re-translated when its Portuguese source changes (tracked by SHA-256 in `.translation-cache.json`). UI strings are skipped once translated. Re-running `yarn translate` is cheap and safe.
- **Model:** defaults to `claude-opus-4-8`. Override with `TRANSLATE_MODEL` (e.g. `TRANSLATE_MODEL=claude-sonnet-4-6 yarn translate`). Tune parallelism with `TRANSLATE_CONCURRENCY` (default 4).
- **What's preserved:** code blocks, MDX imports/JSX, admonitions (`:::tip`), URLs/paths, image sources, the "Mentorfy" brand, integration names (Stripe, Hotmart, …) and technical terms. Relative `../../src/...` imports are rewritten to the `@site/src/...` alias so they work from the deeper `i18n/` location.
- **Search** is locale-aware: the custom search index is generated per locale (`build/`, `build/en`, `build/es`). Until a locale is translated, its search falls back to the Portuguese index.
