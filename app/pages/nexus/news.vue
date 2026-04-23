<script lang="ts" setup>
import {
  buildPatchPost,
  buildPbePost,
  buildRedditPost
} from "~/components/lol/external/posts/post_cards"
import {
  providePostModal,
  usePostModal
} from "~/components/lol/external/posts/usePostModal"

definePageMeta({
  title: "News",
  layout: "default",
  class: "scale-110 **:stroke-[2.2]", //"scale-96 **:stroke-[1.2]",
  icon: "i-iconamoon-news", //"i-hugeicons-news", //"i-streamline-news-paper",
  description: "The latest.",
  order: 0
})

const {
  public: { postalBaseUrl }
} = useRuntimeConfig()

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

const offset = computed(() => (page.value - 1) * itemsPerPage)

const { data: postList, refresh } = await useFetch<PostListResponse>(
  "/api/feed/reddit",
  {
    baseURL: postalBaseUrl || undefined,
    default: () => ({
      items: [],
      total: 0
    }),
    key: () => `nexus-news-${page.value}`,
    query: computed(() => ({
      limit: itemsPerPage,
      offset: offset.value
    })),
    server: false
  }
)
const newsPosts = computed<Post[]>(() => postList.value?.items ?? [])
const total = computed(() => postList.value?.total ?? 0)
const maxPage = computed(() =>
  Math.max(1, Math.ceil(total.value / itemsPerPage))
)

watchEffect(() => {
  if (page.value > maxPage.value) {
    page.value = maxPage.value
  }
})

const postState = usePostModal(newsPosts)
providePostModal(postState)

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
    <UPageBody id="updates" class="relative w-full overflow-y-auto px-8">
      <section class="z-auto grid auto-rows-max gap-4">
        <div class="sticky top-0 flex h-10 w-full items-center bg-p0">
          <h2 class="align-center inline tracking-tight">Game Updates</h2>
        </div>
        <LazyPostCard :post="buildPatchPost()" />
        <LazyPostCard :post="buildPbePost()" />
      </section>
      <Separator class="mt-6 mb-12" />
      <section id="news-feed" class="z-auto grid auto-rows-max gap-4">
        <div
          class="align-center sticky top-30 z-10 inline-flex h-10 w-full items-center justify-between">
          <h2 class="align-center inline h-10 tracking-tight drop-shadow-xs">
            Feed
          </h2>
          <Pagination
            v-model:page="page"
            :items-per-page="itemsPerPage"
            :total="total"
            :first="false"
            :sibling-count="0"
            :last="false"
            :show-edges="false"
            :to="pageTo" />
        </div>
        <LazyPostCard
          v-for="(item, index) in newsPosts"
          :key="item.source_id"
          :post="buildRedditPost(item)"
          :index="index"
          orientation="horizontal"
          @open-reddit-post="
            (post: Post, index: number) => postState.open(post, index)
          " />

        <Separator class="mt-8 mb-6" />
        <Pagination
          v-model:page="page"
          :ui="{ root: 'justify-self-center' }"
          :items-per-page="itemsPerPage"
          :total="total"
          :to="pageTo" />
      </section>
    </UPageBody>
  </UPage>
</template>
