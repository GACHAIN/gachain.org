// Nuxt 3 配置（终态）。替代旧 nuxt.config.js（Nuxt 2），详见 docs/plans/2026-10-01-nuxt3-migration.md
const siteTitle = '智乾区块链 | 政务链 | 全行业高效自主区块链底层架构'
const siteDescription =
  'GAchain是政务服务区块链平台，可将大多数类型的政府部门机构、事业单位、社会活动等的业务转移到区块链中，所有业务由智能法律和智能合约驱动。'

export default defineNuxtConfig({
  compatibilityDate: '2026-10-01',

  devtools: { enabled: true },

  modules: ['@nuxtjs/i18n', '@nuxt/image', '@nuxt/eslint', '@ant-design-vue/nuxt', '@vueuse/nuxt'],

  app: {
    head: {
      title: siteTitle,
      htmlAttrs: { lang: 'zh-CN' },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width,initial-scale=1.0,maximum-scale=1.0,user-scalable=0' },
        { name: 'description', content: siteDescription },
        {
          name: 'keywords',
          content: '区块链,智乾区块链,政务链,GACHAIN,区块链即政务,政务区块链,电子政务,区块链政务,区块链,blockchain,自主区块链',
        },
        { property: 'og:title', content: siteTitle },
        { property: 'og:description', content: siteDescription },
        { property: 'og:site_name', content: siteTitle },
        { property: 'og:url', content: 'https://gachain.org' },
        { name: 'apple-mobile-web-app-title', content: siteTitle },
        { name: 'mobile-web-app-capable', content: 'yes' },
        { name: 'shenma-site-verification', content: '402ffef735e5fdc4d7f8d87c8571b7c9_1617367481' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'stylesheet', href: '/animate/animate.min.css' },
        { rel: 'stylesheet', href: '/css/font.css' },
      ],
      // 百度统计；路由切换的 PV 上报见 plugins/baidu-analytics.client.ts
      script: [{ src: 'https://hm.baidu.com/hm.js?d28e5324af5934973a469bbfa5501c42', async: true }],
    },
  },

  css: ['~/assets/less/index.less', 'video.js/dist/video-js.css', 'overlayscrollbars/overlayscrollbars.css'],

  // 多语言：沿用旧站 URL 规则——默认中文无前缀，英文 /en/...、繁体 /tw/...
  i18n: {
    strategy: 'prefix_except_default',
    defaultLocale: 'zh',
    detectBrowserLanguage: false,
    langDir: 'locales',
    locales: [
      { code: 'zh', language: 'zh-CN', name: '简体中文', file: 'zh-cn.json' },
      { code: 'en', language: 'en-US', name: 'English', file: 'en-us.json' },
      { code: 'tw', language: 'zh-TW', name: '繁體中文', file: 'zh-tw.json' },
    ],
    // 运行时配置见 i18n/i18n.config.ts；文案中含 <br/> 等 HTML（模板以 v-html 渲染）
    compilation: { strictMessage: false },
    bundle: { optimizeTranslationDirective: false },
  },

  vite: {
    css: {
      preprocessorOptions: {
        less: { javascriptEnabled: true },
      },
    },
  },

  // 后端地址，运行时可由 NUXT_API_TARGET 覆盖；server/routes 代理读取
  runtimeConfig: {
    apiTarget: process.env.API_TARGET || 'http://localhost:9033',
  },
})
