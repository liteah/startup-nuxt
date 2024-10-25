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
    detectBrowserLanguage: false,
    locales: [
      {
        code: "en",
        language: "en-US",
        file: "en.json",
        name: "English",
      },
      {
        code: "de",
        language: "de-DE",
        file: "de.json",
        name: "Deutsch",
      },
      {
        code: "es",
        language: "es-ES",
        file: "es.json",
        name: "Español",
      },
      {
        code: "fr",
        language: "fr-FR",
        file: "fr.json",
        name: "Français",
      },
      {
        code: "pt",
        language: "pt-PT",
        file: "pt.json",
        name: "Português",
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
  colorMode: {
    classSuffix: '',
  },
  shadcn: {
    prefix: 'U',
    componentDir: './app/components/ui',
  },
  future: {
    compatibilityVersion: 4,
  },
})