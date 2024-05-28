import { version } from './package.json'

/** В будущем если нужно будет можно добавить остальные тэги */
const META_CONTENT = {
  DESCRIPTION: 'Демонстративный проект который показывает как работает интерфейс интернет-магазина',
}

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    rootId: 'app',
    head: {
      htmlAttrs: {
        lang: 'ru',
      },
      meta: [
        {
          name: 'description',
          content: META_CONTENT.DESCRIPTION,
        },
      ],
    },
  },

  runtimeConfig: {
    public: {
      version,
      API_DOMAIN: process.env.API_DOMAIN,
    },
  },

  typescript: {
    strict: true,
  },

  routeRules: {
    '/api/**': {
      proxy: {
        to: `${process.env.API_DOMAIN}/api/**`,
      },
    },
  },

  components: [
    { path: '~/components/skeleton', pathPrefix: false },
    { path: '~/components/cart', pathPrefix: false },
    { path: '~/components/layout', pathPrefix: false },
    '~/components',
  ],

  devtools: {
    enabled: true,

    timeline: {
      enabled: true,
    },
  },

  modules: ['@pinia/nuxt', '@vueuse/nuxt', 'dayjs-nuxt', '@nuxt/ui'],

  ui: {
    icons: ['mdi'],
  },

  dayjs: {
    locales: ['en', 'ru'],
    defaultLocale: 'ru',
    plugins: ['localizedFormat'],
  },

  tailwindcss: {
    editorSupport: true,
  },
})
