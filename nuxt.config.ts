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