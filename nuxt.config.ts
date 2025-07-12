// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  css: [
    'bootstrap/dist/css/bootstrap.min.css',
    'normalize.css',
    '@/assets/styles/style.css'
  ],

  ssr: true,
  app: {
    baseURL: '/Frontend-nuxt/',
  },
  nitro: {
    preset: 'static'
  }
})
