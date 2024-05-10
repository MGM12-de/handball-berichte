<script lang="ts" setup>
const route = useRoute()
const response = ref(null)

const orgId = ref(route.params.id)
response.value = await useAsyncData(`${orgId.value}-reports`, () => $fetch(`/api/${orgId.value}/reports`))
</script>

<template>
  <div>
    <UBlogList orientation="horizontal" prose>
      <UBlogPost
        v-for="(post, index) in response.data" :key="index"
        :title="post.title"
        :description="post.description"
        :date="new Date(post.date).toLocaleDateString('en', { year: 'numeric', month: 'short', day: 'numeric' })"
        :image="post.image"
        :to="`/reports/${orgId}/detail/${post.id}`"
        :badge="post.badge"
        :authors="post.authors"
      />
    </UBlogList>
  </div>
</template>

<style>

</style>
