<script lang="ts" setup>
import { usePostModalInject } from "~/components/lol/external/posts/usePostModal"
import { patchIndex } from "~~/shared/constants/patch-index"

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
  <UPage class="mx-auto flex size-full max-w-5xl flex-col items-center">
    <UPageHeader
      title="News"
      class="w-full"
      description="The latest League updates all in one place." />
    <UPageBody class="w-full px-8">
      <div class="h-max">
        <h1 class="flex h-24 items-center px-3">Game Updates</h1>
        <div class="w-full">
          <LazyPatchPost
            size="lg"
            orientation="horizontal"
            :patch="patchIndex[0]"
            class="" />
          <LazyPbePost orientation="horizontal" class="" />
        </div>
      </div>

      <UPageSection
        id="news-feed"
        orientation="horizontal"
        class="w-full scroll-mt-24"
        :ui="{
          container: 'w-full lg:grid-cols-1',
          wrapper: 'w-full',
          header: 'flex w-full items-center justify-between',
          footer: 'mt-18 flex w-full justify-center'
        }"
        title="Feed">
        <template #description>
          <UPagination
            v-model:page="page"
            :sibling-count="0"
            :items-per-page="itemsPerPage"
            :total="total"
            :to="pageTo"
            size="sm"
            :show-edges="false"
            variant="outline"
            color="base">
            <template #first>
              <span class="hidden size-px" />
            </template>
            <template #item>
              <span class="hidden size-px" />
            </template>
            <template #last>
              <span class="hidden size-px" />
            </template>
          </UPagination>
        </template>

        <template #features>
          <div
            v-for="(item, index) in pagedPosts"
            :key="item.source_id"
            class="w-full">
            <LazyRedditPost
              :post="item"
              :index="(page - 1) * itemsPerPage + index"
              orientation="horizontal"
              @open-post="open" />
          </div>
        </template>
        <template #footer>
          <UPagination
            v-model:page="page"
            :items-per-page="itemsPerPage"
            :total="total"
            size="sm"
            :to="pageTo"
            variant="outline"
            active-variant="solid"
            color="base"
            :ui="{
              list: 'gap-1.5',
              item: 'disabled:hidden [&_svg]:opacity-60 [&_svg]:active:opacity-100',
              next: 'disabled:hidden [&_svg]:opacity-60 [&_svg]:hover:opacity-100',
              prev: 'disabled:hidden [&_svg]:opacity-60 [&_svg]:hover:opacity-100',
              first:
                'disabled:hidden! [&_svg]:opacity-60 [&_svg]:hover:opacity-100',
              last: 'disabled:hidden [&_svg]:opacity-60 [&_svg]:hover:opacity-100'
            }"
            active-color="neutral" />
        </template>
      </UPageSection>
    </UPageBody>
  </UPage>
</template>
