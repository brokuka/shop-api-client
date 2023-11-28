// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {
    enabled: true,

    timeline: {
      enabled: true,
    },
  },

  modules: ['@nuxt/ui', '@pinia/nuxt', '@vueuse/nuxt'],

  ui: {
    icons: ['mdi'],
  },

  runtimeConfig: {
    public: {
      API_DOMAIN: process.env.API_DOMAIN,
    },
  },
});
