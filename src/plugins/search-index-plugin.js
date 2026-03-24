const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

const CATEGORY_LABELS = {};

function loadCategoryLabels(docsDir) {
  const entries = fs.readdirSync(docsDir, { withFileTypes: true });
  for (const entry of entries) {
    if (!entry.isDirectory()) continue;
    const catFile = path.join(docsDir, entry.name, '_category_.json');
    if (fs.existsSync(catFile)) {
      try {
        const data = JSON.parse(fs.readFileSync(catFile, 'utf-8'));
        CATEGORY_LABELS[entry.name] = data.label || entry.name;
      } catch {
        CATEGORY_LABELS[entry.name] = entry.name;
      }
    }
  }
}

function slugify(text) {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
}

function extractSections(content, filePath, docsDir) {
  const { data: frontmatter, content: body } = matter(content);

  const relativePath = path.relative(docsDir, filePath);
  const parts = relativePath.replace(/\.mdx?$/, '').split(path.sep);

  const breadcrumb = parts.map((part, i) => {
    if (i < parts.length - 1 && CATEGORY_LABELS[part]) {
      return CATEGORY_LABELS[part];
    }
    return frontmatter.title || part.charAt(0).toUpperCase() + part.slice(1);
  });

  const urlPath = '/docs/' + parts.join('/');

  const lines = body.split('\n');
  const sections = [];
  let currentHeading = frontmatter.title || parts[parts.length - 1];
  let currentLevel = 1;
  let currentAnchor = '';
  let currentContent = [];

  for (const line of lines) {
    const headingMatch = line.match(/^(#{1,3})\s+(.+)/);
    if (headingMatch) {
      if (currentContent.length > 0) {
        const text = currentContent
          .join(' ')
          .replace(/<!--[\s\S]*?-->/g, '')
          .replace(/<[^>]+>/g, '')
          .replace(/!\[.*?\]\(.*?\)/g, '')
          .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
          .replace(/```[\s\S]*?```/g, '')
          .replace(/`([^`]+)`/g, '$1')
          .replace(/\*\*([^*]+)\*\*/g, '$1')
          .replace(/\*([^*]+)\*/g, '$1')
          .replace(/\s+/g, ' ')
          .trim();

        if (text.length > 10) {
          sections.push({
            title: currentHeading,
            content: text.slice(0, 200),
            url: urlPath + (currentAnchor ? '#' + currentAnchor : ''),
            breadcrumb: breadcrumb.join(' → '),
            level: currentLevel,
          });
        }
      }

      currentHeading = headingMatch[2].trim();
      currentLevel = headingMatch[1].length;
      currentAnchor = slugify(currentHeading);
      currentContent = [];
    } else {
      const cleaned = line.trim();
      if (cleaned && !cleaned.startsWith('```') && !cleaned.startsWith('<img') && !cleaned.startsWith('<br')) {
        currentContent.push(cleaned);
      }
    }
  }

  if (currentContent.length > 0) {
    const text = currentContent
      .join(' ')
      .replace(/<!--[\s\S]*?-->/g, '')
      .replace(/<[^>]+>/g, '')
      .replace(/!\[.*?\]\(.*?\)/g, '')
      .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
      .replace(/```[\s\S]*?```/g, '')
      .replace(/`([^`]+)`/g, '$1')
      .replace(/\*\*([^*]+)\*\*/g, '$1')
      .replace(/\*([^*]+)\*/g, '$1')
      .replace(/\s+/g, ' ')
      .trim();

    if (text.length > 10) {
      sections.push({
        title: currentHeading,
        content: text.slice(0, 200),
        url: urlPath + (currentAnchor ? '#' + currentAnchor : ''),
        breadcrumb: breadcrumb.join(' → '),
        level: currentLevel,
      });
    }
  }

  if (frontmatter.description) {
    sections.unshift({
      title: frontmatter.title || currentHeading,
      content: frontmatter.description.slice(0, 200),
      url: urlPath,
      breadcrumb: breadcrumb.join(' → '),
      level: 0,
    });
  }

  return sections;
}

function collectMdFiles(dir) {
  const files = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...collectMdFiles(fullPath));
    } else if (/\.mdx?$/.test(entry.name)) {
      files.push(fullPath);
    }
  }
  return files;
}

module.exports = function searchIndexPlugin(context) {
  return {
    name: 'mentorfy-search-index',

    async postBuild({ outDir }) {
      const docsDir = path.join(context.siteDir, 'docs');
      if (!fs.existsSync(docsDir)) {
        console.warn('[search-index] No docs directory found, skipping index generation.');
        return;
      }

      loadCategoryLabels(docsDir);

      const mdFiles = collectMdFiles(docsDir);
      const allSections = [];

      for (const file of mdFiles) {
        const content = fs.readFileSync(file, 'utf-8');
        const sections = extractSections(content, file, docsDir);
        allSections.push(...sections);
      }

      const outputPath = path.join(outDir, 'search-index.json');
      fs.writeFileSync(outputPath, JSON.stringify(allSections, null, 0));
      console.log(`[search-index] Generated index with ${allSections.length} entries → ${outputPath}`);
    },

    configureWebpack() {
      return {
        devServer: {
          setupMiddlewares(middlewares, devServer) {
            const docsDir = path.join(context.siteDir, 'docs');
            devServer.app.get('/search-index.json', (_req, res) => {
              if (!fs.existsSync(docsDir)) {
                return res.json([]);
              }
              loadCategoryLabels(docsDir);
              const mdFiles = collectMdFiles(docsDir);
              const allSections = [];
              for (const file of mdFiles) {
                const content = fs.readFileSync(file, 'utf-8');
                allSections.push(...extractSections(content, file, docsDir));
              }
              res.json(allSections);
            });
            return middlewares;
          },
        },
      };
    },
  };
};
