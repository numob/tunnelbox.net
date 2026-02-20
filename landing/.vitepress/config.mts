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
          { text: 'Getting Started', link: '/docs/overview' },
          { text: 'TunnelBox Setup', link: '/docs/tunnelbox' },
          { text: 'Domains Setup', link: '/docs/domain' },
          { text: 'Routing Setup', link: '/docs/routing' },
          { text: 'Troubleshooting', link: '/docs/troubleshooting' },
        ]
      },
      // { text: 'Features', link: '/features' },
      { text: 'Q&A', link: '/qanda' },
      // {
      //   text: 'Console',
      //   link: 'https://console.tunnelbox.net',
      //   target: '_blank',
      // }
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
            { text: 'Registering a TunnelBox', link: '/docs/tunnelbox' },
            { text: 'Registering Domains', link: '/docs/domain' },
            { text: 'Routing Traffic', link: '/docs/routing' },
            // { text: 'Domain Configuration', link: '/docs/configurations' },
          ]
        },

        {
          text: 'Application Types',
          collapsed: false,
          items: [
            { text: 'HTTP', link: '/docs/http' },
            { text: 'HTTP/2', link: '/docs/http2' },
            { text: 'TCP', link: '/docs/tcp' },
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

    footer: {
      message: 'test',
      copyright: '© ' + new Date().getFullYear() + ' Irvinesoft'
    },

    search: {
      provider: 'local'
    },
    
  },

  
})