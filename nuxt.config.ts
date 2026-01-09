import { pwa } from './config/pwa'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxt/ui',
    '@nuxt/content',
    '@nuxt/image',
    '@vite-pwa/nuxt',
    'nuxt-og-image',
  ],
  css: ['~/app/assets/css/main.css'],
  site: {
    url: 'https://handball-berichte.netlify.app',
  },
  pwa,
})
