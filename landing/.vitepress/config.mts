import { defineConfig } from 'vitepress'
import tailwindcss from '@tailwindcss/vite'

// -----------------------------------------------------------------------------
// Tunnelbox VitePress Site Config
// Developer-first, product-focused docs + marketing site
// -----------------------------------------------------------------------------

export default defineConfig({
  base: '/tunnelbox.net/',
  title: 'Tunnelbox',
  description: 'A plug-and-play hardware tunneling solution for developers',

  cleanUrls: true,
  lastUpdated: true,

  appearance: 'force-dark', 

  head: [
    ['meta', { name: 'theme-color', content: '#000000' }],
    ['meta', { name: 'og:type', content: 'website' }],
    ['meta', { name: 'og:title', content: 'Tunnelbox' }],
    ['meta', { name: 'og:description', content: 'Expose local services securely. No network configuration required.' }],
  ],

  themeConfig: {
    // logo: '/logo.svg',

    nav: [
      {
        text: 'Docs',
        items: [
          { text: 'Getting Started', link: '/docs/setup' },
          { text: 'Registration', link: '/docs/registration' },
          { text: 'Routing', link: '/docs/routing' },
          { text: 'Domains', link: '/docs/configurations' },
          { text: 'Troubleshooting', link: '/docs/troubleshooting' },
        ]
      },
      { text: 'Features', link: '/features' },
      { text: 'Q&A', link: '/qanda' },
    ],

    sidebar: {
      '/docs/': [
        {
          text: 'Getting Started',
          collapsed: false,
          items: [
            { text: 'What is TunnelBox', link: '/docs/overview' }
          ]
        },
        {
          text: 'Configurations',
          collapsed: false,
          items: [
            { text: 'Setup', link: '/docs/setup' },
            { text: 'Registering Domains', link: '/docs/registration' },
            { text: 'Routing Traffic', link: '/docs/routing' },
            { text: 'Domain Configuration', link: '/docs/configurations' },
          ]
        },

        {
          text: 'Services',
          collapsed: false,
          items: [
            { text: 'Types of Services', link: '/docs/services' },
          ]
        },
        {
          text: 'Help & Reference',
          collapsed: false,
          items: [
            { text: 'Troubleshooting', link: '/docs/troubleshooting' },
          ]
        }
      ]
    },

    // socialLinks: [
    //   { icon: 'github', link: 'https://github.com/irvinesoft' },
    // ],

    footer: {
      message: 'test',
      copyright: '© ' + new Date().getFullYear() + ' Irvinesoft'
    },

    search: {
      provider: 'local'
    },
    
  },

  
})