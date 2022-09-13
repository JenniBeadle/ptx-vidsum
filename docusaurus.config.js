// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Paratext Documentation',
  tagline: 'Learning to use Scripture Translation Software',
  url: 'https://JenniBeadle.github.io/',
  baseUrl: '/ptx-vidsum/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  trailingSlash: false,
  favicon: 'img/Paratext_Icon-48px.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'JenniBeadle', // Usually your GitHub org/user name.
  projectName: 'ptx-vidsum', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr'], 
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
           routeBasePath: '/',
           sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/JenniBeadle/ptx-vidsum/tree/main',
        },
        blog: false,
      }),
    ],
  ],
  themes: [
    // ... Your other themes.
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        // ... Your options.
        // `hashed` is recommended as long-term-cache of index file is possible.
        hashed: true,
        language: ["en", "fr"],
        indexBlog: false,
        indexPages: false,
        docsRouteBasePath: "/",
      },
    ],
  ],
   
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Paratext Video summaries',
        items: [
          {
            href: 'https://github.com/JenniBeadle/ptx-vidsum/',
            label: 'GitHub',
            position: 'right',
          },
          {
            type: "localeDropdown",
            position: 'right',
          },
          {
            type: "docsVersionDropdown",
            position: 'right',
          }, 
        ],
      },
      footer: {
        style: 'dark',
        links: [
        ],
      
        copyright: `Copyright © ${new Date().getFullYear()} SIL International & United Bible Societies. All Rights Reserved. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
