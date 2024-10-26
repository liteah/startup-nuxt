// https://nuxt.com/docs/api/configuration/nuxt-config
import process from 'node:process'

export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxtjs/tailwindcss',
    '@nuxt/icon',
    '@nuxt/fonts',
    '@nuxtjs/i18n',
    '@nuxt/scripts',
    '@nuxt/content',
    '@nuxt/image',
    '@vueuse/nuxt',
    '@nuxtjs/color-mode',
    'radix-vue/nuxt',
    'shadcn-nuxt',
    'nuxt-auth-utils',
    '@nuxtjs/seo',
  ],
  devtools: { enabled: true },
  colorMode: {
    classSuffix: '',
  },
  content: {
    markdown: {
      toc: { depth: 3, searchDepth: 3 },
      remarkPlugins: ['remark-emoji'],
      rehypePlugins: ['rehype-slug', 'rehype-autolink-headings'],
    },
    documentDriven: true,
    locales: ['en', 'ru', 'zh', 'tw', 'ja'],
    defaultLocale: 'en',
  },
  runtimeConfig: {
    // see https://github.com/Atinux/nuxt-auth-utils?tab=readme-ov-file#supported-oauth-providers
    oauth: {
      github: {
        clientId: process.env.GITHUB_CLIENT_ID,
        clientSecret: process.env.GITHUB_CLIENT_SECRET,
      },
      google: {
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      },
    },
    scripts: {
      // see https://analytics.google.com/
      googleAnalytics: {
        id: process.env.GOOGLE_ANALYTICS_ID,
      },
      // see https://clarity.microsoft.com/
      clarity: {
        id: process.env.CLARITY_ID,
      },
    },
  },
  future: {
    compatibilityVersion: 4,
  },
  compatibilityDate: '2024-04-03',
  eslint: {
    config: {
      standalone: false,
      nuxt: {
        sortConfigKeys: true,
      },
    },
  },
  i18n: {
    defaultLocale: 'en',
    langDir: './locales',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root',
      fallbackLocale: 'en',
    },
    locales: [
      {
        code: 'en',
        language: 'en-US',
        file: 'en.json',
        name: 'English',
      },
      {
        code: 'ru',
        language: 'ru-RU',
        file: 'ru.json',
        name: 'Русский',
      },
      {
        code: 'zh',
        language: 'zh-CN',
        file: 'zh.json',
        name: '简体中文',
      },
      {
        code: 'tw',
        language: 'zh-TW',
        file: 'tw.json',
        name: '繁體中文',
      },
      {
        code: 'ja',
        language: 'ja-JP',
        file: 'ja.json',
        name: '日本語',
      },
    ],
  },
  scripts: {
    registry: {
      googleAnalytics: true,
      clarity: true,
    },
  },
  shadcn: {
    prefix: 'U',
    componentDir: './app/components/ui',
  },
})