<script setup lang="ts">
import {
  providePostModal,
  usePostModal
} from "~/components/lol/external/posts/usePostModal"

definePageMeta({
  id: "8e12p21b-2f27-43b0-b7e7-77c49bbe972d",
  title: "Nexus",
  layout: "default",
  class: "",
  icon: "i-nexus",
  description: "",
  order: 0
})
const {
  public: { postalBaseUrl }
} = useRuntimeConfig()

const {
  data: postList,
  execute,
} = await useFetch<PostListResponse>("/api/feed/reddit", {
  baseURL: postalBaseUrl || undefined,
  immediate: false,
  lazy: true,
  query: {
    limit: 25
  },
  server: false
})

onMounted(async () => {
  await execute()
})

const posts = computed<Post[]>(() => postList.value?.items ?? [])

const postState = usePostModal(posts)
providePostModal(postState)
</script>

<template>
  <NuxtPage />
</template>
