<script setup lang="ts">
const colorMode = useColorMode()

const color = computed(() => colorMode.value === 'dark' ? '#111827' : 'white')

useHead({
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { key: 'theme-color', name: 'theme-color', content: color },
  ],
  link: [
    { rel: 'icon', href: '/favicon.ico' },
  ],
  htmlAttrs: {
    lang: 'de',
  },
})

useSeoMeta({
  titleTemplate: '%s -  Handball Berichte',
  ogImage: 'https://handball-berichte.netlify.app/.netlify/images?h=450&url=%2Flogo.png',
  twitterImage: 'https://handball-berichte.netlify.app/.netlify/images?h=450&url=%2Flogo.png',
  twitterCard: 'summary_large_image',
})
</script>

<template>
  <div>
    <NuxtLayout>
      <NuxtPwaManifest />
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
