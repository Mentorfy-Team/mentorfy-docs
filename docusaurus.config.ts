import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Documentação Mentorfy',
  tagline: 'De mentores para mentores.',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://docs.mentorfy.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'pt',
    locales: ['pt'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],



  themeConfig: {
    // Replace with your project's social card
    image: 'img/mfdocs.jpg',
    navbar: {
      title: 'Mentorfy Docs',
      logo: {
        alt: 'Mentorfy Logo',
        src: 'img/mfdocs.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Guia do Mentor',
        },

        {
          href: 'https://app.mentorfy.io',
          label: 'Ir para o App',
          position: 'right',
          className: 'button button--primary button--sm', // Add a class for styling if needed, or just use standard
        },
      ],
    },
    footer: {
      style: 'light', // Changed to light for a cleaner look, CSS will override background
      links: [
        {
          title: 'Documentação',
          items: [
            {
              label: 'Guia do Mentor',
              to: '/docs/intro',
            },

          ],
        },
        {
          title: 'Suporte',
          items: [
            {
              label: 'Central de Ajuda',
              href: 'https://help.mentorfy.io',
            },
            {
              label: 'Fale Conosco',
              href: 'mailto:suporte@mentorfy.io',
            },
          ],
        },
        {
          title: 'Legal',
          items: [
            {
              label: 'Termos de Uso',
              href: 'https://mentorfy.io/terms',
            },
            {
              label: 'Privacidade',
              href: 'https://mentorfy.io/privacy',
            },
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} Mentorfy. Todos os direitos reservados.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
