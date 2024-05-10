<script lang="ts" setup>
const route = useRoute()
const response = ref(null)

const orgId = ref(route.params.id)
response.value = await useAsyncData(`${orgId.value}-reports`, () => $fetch(`/api/${orgId.value}/reports`))
</script>

<template>
  <div />
  {{ response.data }}
</template>

<style>

</style>
