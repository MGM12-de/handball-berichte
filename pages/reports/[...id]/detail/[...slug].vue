<script lang="ts" setup>
const route = useRoute()

const orgId = ref(route.params.id)
const slug = ref(route.params.slug[0])

const postId = ref(slug.value.split('-')[0])
const clubId = ref(slug.value.split('-')[1])

const { data: post } = await useAsyncData(
  `post-${slug.value}`,
  () => $fetch(`/api/${orgId.value}/report`, {
    query: {
      postId: postId.value,
      clubId: clubId.value,
    },
  }),
)
</script>

<template>
  <UContainer v-if="post">
    <UPageHeader
      :title="post.title"
      :description="post.description"
    >
      <template #headline>
        <UBadge
          v-bind="post.badge"
          variant="subtle"
        />
        <span class="text-gray-500 dark:text-gray-400">&middot;</span>
        <time class="text-gray-500 dark:text-gray-400">{{ new Date(post.date).toLocaleDateString('en', { year: 'numeric', month: 'short', day: 'numeric' }) }}</time>
      </template>

      <div class="flex flex-wrap items-center gap-3 mt-4">
        <UButton
          v-for="(author, index) in post.authors"
          :key="index"
          :to="author.to"
          color="white"
          target="_blank"
          size="sm"
        >
          <UAvatar
            v-bind="author.avatar"
            :alt="author.name"
            size="2xs"
          />

          {{ author.name }}
        </UButton>
      </div>
    </UPageHeader>
    <UPage>
      <UPageBody prose>
        <div v-html="post.content" />
      </UPageBody>
    </UPage>
  </UContainer>
</template>

<style>

</style>
