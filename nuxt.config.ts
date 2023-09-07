// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  ssr: false,
  modules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/tailwindcss',
    'nuxt-icon',
    '@pinia/nuxt',
    '@vueuse/nuxt'
  ],
  css: [
    'primevue/resources/themes/lara-light-blue/theme.css',
    '@animxyz/core',
    '~/assets/index.css',
    'primeicons/primeicons.css'
  ],
  build: {
    transpile: ['primevue']
  },
  eslint: {},
  plugins: ['~/plugins/animxyz.ts']
})
