<script setup lang="ts">
const links = [{
  label: 'Nuxt UI',
  to: 'https://ui.nuxt.com/',
}]
</script>

<template>
  <UFooter :links="links">
    <template #left>
      Copyright © 2024 - {{ new Date().getFullYear() }}
    </template>

    <template #right>
      <UButton icon="i-simple-icons-github" color="gray" variant="ghost" to="https://github.com/nuxt/nuxt" target="_blank" />
    </template>
  </UFooter>
</template>
