const { description } = require('../../package')

module.exports = {
  title: 'EventFahrplan',
  description: description,
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    nav: [
      {
        text: 'tobias.preuss@googlemail.com',
        link: 'mailto:tobias.preuss@googlemail.com'
      },
      {
        text: 'Features',
        link: '/features/',
      },
      {
        text: 'Source code',
        link: 'https://github.com/EventFahrplan/EventFahrplan'
      }
    ],
    search: false
  },

  plugins: [
    [
      'vuepress-plugin-medium-zoom',
      {
        selector: '.app-features-details img',
        delay: 1000,
        options: {
          margin: 24,
          background: '#f5f5f5ee',
          scrollOffset: 0,
        },
      },
    ],
  ],

  markdown: {
    // options for markdown-it-anchor
    anchor: { permalink: false },
    // options for markdown-it-toc
    toc: { includeLevel: [1, 2] },
    extendMarkdown: md => {
      // use more markdown-it plugins!
      md.use(require('markdown-it-attrs'))
    }
  }
}