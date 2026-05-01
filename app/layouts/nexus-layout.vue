<script setup lang="ts">
import {
  providePostModal,
  usePostModal
} from "~/components/lol/external/posts/usePostModal"
const {
  public: { postalBaseUrl }
} = useRuntimeConfig()

const { data: postList, execute } = await useFetch<PostListResponse>(
  "/api/feed/reddit",
  {
    baseURL: postalBaseUrl || undefined,
    immediate: false,
    lazy: true,
    query: {
      limit: 25
    },
    server: false
  }
)

onMounted(async () => {
  await execute()
})

const posts = computed<Post[]>(() => postList.value?.items ?? [])

const postState = usePostModal(posts)
providePostModal(postState)
</script>

<template>
  <Layout>
    <slot />
  </Layout>
</template>
