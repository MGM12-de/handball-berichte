<script lang="ts" setup>
const route = useRoute()
const response = ref(null)

const orgId = ref(route.params.id)
response.value = await useAsyncData(`${orgId.value}-reports`, () => $fetch(`/api/${orgId.value}/reports`))
</script>

<template>
  <div>
    <UBlogList orientation="horizontal">
      <UBlogPost v-for="(post, index) in response.data" :key="index" v-bind="post" />
    </UBlogList>
  </div>
</template>

<style>

</style>
