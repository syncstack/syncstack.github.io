module.exports = {
  title: 'SyncStack',
  tagline: 'Fault tolerant high performance SQL database 🚀',
  url: 'syncstack.github.io',
  baseUrl: '/syncstack.github.io/',
  favicon: 'img/favicon.ico',
  organizationName: 'syncstack', // Usually your GitHub org/user name.
  projectName: 'syncstack.github.io', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'SyncStack',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      links: [
        {
          to: 'docs/getting-started/getting-started',
          activeBasePath: 'docs',
          label: 'Documentation',
          position: 'right',
        },
        {
          to: 'docs/doc1',
          activeBasePath: 'docs',
          label: 'Downloads',
          position: 'right',
        },        
        {
          to: 'docs/getting-started/clients',
          activeBasePath: 'docs',
          label: 'Clients',
          position: 'right',
        },        
        /*{to: 'blog', label: 'Blog', position: 'left'},*/
        {
          href: 'https://github.com/syncstack',
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
              label: 'Getting Started',
              to: 'docs/getting-started/getting-started',
            },
            {
              label: 'Clients',
              to: 'docs/doc1',
            },
            {
              label: 'FAQ',
              to: 'docs/doc2',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/syncstack',
            },
          ],
        },
        {
          title: 'Social',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/syncstack',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/syncstack',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} SyncStack`,
    },
    googleAnalytics: {
      trackingID: 'UA-141789564-1',
    },    
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  plugins: [
    '@docusaurus/plugin-google-analytics',
    [
      '@docusaurus/plugin-sitemap',
      {
        cacheTime: 600 * 1000, // 600 sec - cache purge period
        changefreq: 'weekly',
        priority: 0.5,
      }
    ],
  ]
};
