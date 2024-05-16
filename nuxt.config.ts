import { pwa } from "./config/pwa";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  extends: ['@nuxt/ui-pro'],
  modules: [
    "@nuxt/content",
    "@nuxt/ui",
    "@nuxt/image",
    '@vite-pwa/nuxt',
    "nuxt-og-image"
  ],
  site: {
    url: 'https://handball-berichte.netlify.app'
  },
  pwa
})