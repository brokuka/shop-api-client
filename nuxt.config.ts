// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    rootId: 'app',
  },

  routeRules: {
    '/cart/**': {
      prerender: true,
    },
  },

  components: [
    { path: '~/components/skeleton', pathPrefix: false },
    { path: '~/components/cart', pathPrefix: false },
    '~/components',
  ],

  devtools: {
    enabled: true,

    timeline: {
      enabled: true,
    },
  },

  modules: ['@nuxt/ui', '@pinia/nuxt', '@vueuse/nuxt', 'dayjs-nuxt'],

  ui: {
    icons: ['mdi'],
  },

  dayjs: {
    locales: ['en', 'ru'],
    defaultLocale: 'ru',
    plugins: ['localizedFormat'],
  },

  runtimeConfig: {
    public: {
      API_DOMAIN: process.env.API_DOMAIN,
    },
  },
});
