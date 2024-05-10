<script lang="ts" setup>

</script>

<template>
  <div>
    <ULandingHero
      title="Handball Berichte"
      description="Diese Seite zeigt verschiedene Handballberichte von verschiedenen Vereinen an. Die Berichte werden dabei von den Vereinshompages gelesen."
      orientation="horizontal"
    >
      <template #default>
        <LazyNuxtImg
          src="/logo.png" height="450px" width="auto"
        />
      </template>
    </ULandingHero>
  </div>
</template>

<style>

</style>
