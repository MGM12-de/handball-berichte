<script setup lang="ts">
import type { NavItem } from '@nuxt/content/dist/runtime/types'

const navigation = inject<Ref<NavItem[]>>('navigation', ref([]))

const links = [{
  label: 'Home',
  icon: 'i-heroicons-home',
  to: '/'
},{
  label: 'Berichte',
  icon: 'i-heroicons-newspaper',
  to: '/reports',
  children: [
  {
  label: 'HVW',
  icon: 'i-heroicons-newspaper',
  to: '/reports/hvw'
}, {
  label: 'BHV',
  icon: 'i-heroicons-newspaper',
  to: '/reports/bhv'
}
  ]
}]
</script>

<template>
  <UHeader :links="links">
    <template #logo>
      <AppLogo />
    </template>

    <template #right>
      <UColorModeButton />
    </template>

    <template #panel>
      <UAsideLinks :links="links" />

      <UNavigationTree :links="mapContentNavigation(navigation)" />
    </template>
  </UHeader>
</template>

