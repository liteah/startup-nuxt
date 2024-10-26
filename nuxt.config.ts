// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
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
    // '@sidebase/nuxt-auth'
    '@nuxtjs/color-mode',
    'radix-vue/nuxt',
    'shadcn-nuxt',
  ],
  i18n: {
    defaultLocale: 'en',
    langDir: './locales',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root',
      fallbackLocale: 'en'
    },
    locales: [
      {
        code: "en",
        language: "en-US",
        file: "en.json",
        name: "English",
      },
      {
        code: "ru",
        language: "ru-RU",
        file: "ru.json",
        name: "Русский",
      },
      {
        code: "zh",
        language: "zh-CN",
        file: "zh.json",
        name: "简体中文",
      },
      {
        code: "tw",
        language: "zh-TW",
        file: "tw.json",
        name: "繁體中文",
      },
      {
        code: "ja",
        language: "ja-JP",
        file: "ja.json",
        name: "日本語",
      },
    ],
  },
  content: {
    markdown: {
      toc: { depth: 3, searchDepth: 3 },
      remarkPlugins: ['remark-emoji'],
      rehypePlugins: ['rehype-slug', 'rehype-autolink-headings'],
    },
    documentDriven: true,
    locales: ['en', 'ru', 'zh', 'tw', 'ja'],
    defaultLocale: 'en'
  },
  colorMode: {
    classSuffix: '',
  },
  shadcn: {
    prefix: 'U',
    componentDir: './app/components/ui',
  },
  eslint: {
    config: {
      standalone: false,
      nuxt: {
        sortConfigKeys: true,
      },
    },
  },
  future: {
    compatibilityVersion: 4,
  },
})