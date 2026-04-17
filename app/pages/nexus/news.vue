<script lang="ts" setup>
import type {
  OpenRedditPost,
  OpenRedditPostFn
} from "~/components/lol/external/posts/post.types"
import {
  buildPatchPost,
  buildPbePost,
  buildRedditPost
} from "~/components/lol/external/posts/post_cards"
import { usePostModalInject } from "~/components/lol/external/posts/usePostModal"

definePageMeta({
  title: "News",
  layout: "default",
  class: "scale-96",
  icon: "i-streamline-news-paper", //i-hugeicons-news
  description: "The latest.",
  order: 0
})

const { posts, open } = usePostModalInject()

const route = useRoute()
const router = useRouter()

const itemsPerPage = 10

const page = computed<number>({
  get() {
    const raw = Number(route.query.page ?? 1)
    return Number.isFinite(raw) && raw > 0 ? raw : 1
  },
  set(value) {
    router.replace({
      query: {
        ...route.query,
        page: String(value)
      },
      hash: "#news-feed"
    })
  }
})

const total = computed(() => posts.value.length)

const pagedPosts = computed(() => {
  const start = (page.value - 1) * itemsPerPage
  const end = start + itemsPerPage
  return posts.value.slice(start, end)
})

function pageTo(targetPage: number) {
  return {
    query: {
      ...route.query,
      page: String(targetPage)
    },
    hash: "#news-feed"
  }
}
</script>

<template>
  <UPage class="mx-auto flex size-full max-w-7xl flex-col items-center">
    <UPageHeader
      title="News"
      class="w-full"
      :ui="{
        root: 'mb-12 w-full border-b-0 px-8 pb-0',
        container: 'border-b border-b-p3/80 pb-6'
      }"
      description="The latest League updates all in one place." />
    <UPageBody id="updates" class="w-full px-8">
      <section class="grid auto-rows-max gap-4">
        <h2 class="align-center inline h-10 tracking-tight drop-shadow-xs">
          Game Updates
        </h2>
        <LazyPostCard :post="buildPatchPost()" />
        <LazyPostCard :post="buildPbePost()" />
      </section>

      <section id="news-feed" class="grid auto-rows-max gap-4">
        <h2 class="align-center inline h-10 tracking-tight drop-shadow-xs">
          Feed
        </h2>
        <UPagination
          v-model:page="page"
          :sibling-count="0"
          :items-per-page="itemsPerPage"
          :total="total"
          :to="pageTo"
          size="sm"
          :ui="{
            list: 'last:*:hidden [&>aria-label=Last_Page]:hidden!',
            first: 'hidden!',
            last: 'hidden!',
            item: 'hidden!'
          }"
          :show-edges="false"
          variant="outline"
          color="base" />

        <LazyPostCard
          v-for="(item, index) in pagedPosts"
          :key="item.source_id"
          :post="buildRedditPost(item)"
          :index="(page - 1) * itemsPerPage + index"
          orientation="horizontal"
          @open-reddit-post="
            (post: Post, index: number) => open(post, index)
          " />

        <Pagination
          v-model:page="page"
          :items-per-page="itemsPerPage"
          :total="total"
          :to="pageTo" />
      </section>
    </UPageBody>
  </UPage>
</template>
