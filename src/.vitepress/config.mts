import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'API Grip',
  description: 'API Grip Documentation',

  locales: {
    root: {
      label: 'English',
      lang: 'en',
      themeConfig: {
        nav: [
          { text: 'Guide', link: '/guide/getting-started' },
          { text: 'API Reference', link: '/api/' },
        ],
        sidebar: {
          '/guide/': [
            {
              text: 'Introduction',
              items: [
                { text: 'What is API Grip?', link: '/guide/what-is-api-grip' },
                { text: 'Getting Started', link: '/guide/getting-started' },
              ],
            },
          ],
        },
      },
    },
    zh: {
      label: '简体中文',
      lang: 'zh-CN',
      link: '/zh/',
      themeConfig: {
        nav: [
          { text: '指南', link: '/zh/guide/getting-started' },
          { text: 'API 参考', link: '/api/' },
        ],
        sidebar: {
          '/zh/guide/': [
            {
              text: '介绍',
              items: [
                { text: '什么是 API Grip?', link: '/zh/guide/what-is-api-grip' },
                { text: '快速开始', link: '/zh/guide/getting-started' },
              ],
            },
          ],
        },
      },
    },
  },

  themeConfig: {
    logo: '/logo.svg',

    socialLinks: [
      { icon: 'github', link: 'https://github.com/API-Grip' },
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024-present API Grip',
    },

    search: {
      provider: 'local',
    },
  },
})
