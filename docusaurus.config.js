// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Motion Canvas',
  tagline: 'Create animations programmatically',
  url: 'https://motion-canvas.github.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'motion-canvas',
  projectName: 'motion-canvas.github.io',
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'dark',
      },
      navbar: {
        title: 'Motion Canvas',
        logo: {
          alt: 'Motion Canvas Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'guides',
            position: 'left',
            label: 'Guides',
          },
          {
            type: 'docSidebar',
            sidebarId: 'api',
            position: 'left',
            label: 'API',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/motion-canvas',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Guides',
                to: 'guides/intro',
              },
              {
                label: 'API',
                to: 'api',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Patreon',
                href: 'https://patreon.com/aarthificial',
              },
              {
                label: 'YouTube',
                href: 'https://youtube.com/aarthificial',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/motion-canvas',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Motion Canvas. Built with Docusaurus.`,
      },
      prism: {
        theme: require('./config/lightCodeTheme'),
        darkTheme: require('./config/darkCodeTheme'),
      },
    }),
  themes: [
    [
      '@docusaurus/theme-classic',
      {
        customCss: require.resolve('./src/css/custom.css'),
      },
    ],
  ],
  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        routeBasePath: '/',
        sidebarPath: 'sidebars.js',
        editUrl: ({versionDocsDirPath, docPath}) =>
          `https://github.com/motion-canvas/motion-canvas.github.io/blob/main/${versionDocsDirPath}/${docPath}`,
      },
    ],
    [
      '@docusaurus/plugin-content-blog',
      {
        showReadingTime: true,
        editUrl: ({blogDirPath, blogPath}) =>
          `https://github.com/motion-canvas/motion-canvas.github.io/blob/main/${blogDirPath}/${blogPath}`,
      },
    ],
    '@docusaurus/plugin-content-pages',
    '@docusaurus/plugin-debug',
    '@docusaurus/plugin-sitemap',
    [
      'docusaurus-plugin-typedoc',
      {
        excludeExternals: true,
        entryPoints: [
          '../motion-canvas/packages/core/src',
          '../motion-canvas/packages/core/src/animations',
          '../motion-canvas/packages/core/src/components',
          '../motion-canvas/packages/core/src/decorators',
          '../motion-canvas/packages/core/src/events',
          '../motion-canvas/packages/core/src/flow',
          '../motion-canvas/packages/core/src/helpers',
          '../motion-canvas/packages/core/src/media',
          '../motion-canvas/packages/core/src/player',
          '../motion-canvas/packages/core/src/scenes',
          '../motion-canvas/packages/core/src/styles',
          '../motion-canvas/packages/core/src/themes',
          '../motion-canvas/packages/core/src/threading',
          '../motion-canvas/packages/core/src/transitions',
          '../motion-canvas/packages/core/src/tweening',
          '../motion-canvas/packages/core/src/types',
          '../motion-canvas/packages/core/src/utils',
        ],
        tsconfig: '../core/tsconfig.json',
      },
    ],
  ],
};

module.exports = config;
