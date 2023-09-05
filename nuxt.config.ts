// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: ['@nuxtjs/eslint-module', '@nuxtjs/tailwindcss', 'nuxt-icon'],
  css: [
    'primevue/resources/themes/lara-light-blue/theme.css',
    '@animxyz/core',
    '~/assets/index.css'
  ],
  build: {
    transpile: ['primevue']
  },
  eslint: {},
  plugins: ['~/plugins/animxyz.ts']
})
