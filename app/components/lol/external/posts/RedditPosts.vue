<script lang="ts" setup>
import { usePostModal } from "~/components/lol/external/posts/usePostModal"

const { data: postList } = await useFetch<PostListResponse>(
  "/api/feed/reddit",
  {
    query: {
      limit: 25
    }
  }
)

const list = computed<PostListResponse>(() => safeObject(postList.value))
  const items = computed (() => list.value.items)
const activeIndex = shallowRef(0)
const carousel = useTemplateRef("carousel")
const { openPostModal } = usePostModal()

function handleOpen(i: number) {
  if (!items.value.length) return

  const target = items.value[i]
  if (!target) return

  activeIndex.value = i
  openPostModal(i, items.value, (selectedIndex) => {
    activeIndex.value = selectedIndex
  })
}

watch(activeIndex, (index) => {
  carousel.value?.emblaApi?.scrollTo(index)
})
</script>

<template>
  <UCarousel
    ref="carousel"
    :items="items"
    dots
    :slides-to-scroll="1"
    wheel-gestures
    next-icon="i-right"
    prev-icon="i-left"
    drag-free
    :prev="{
      variant: 'outline',
      color: 'base',
      ui: {
        base: 'hover:bg-p1! aspect-square !bg-p0 hover:fx-noise hover:fx-depth'
      }
    }"
    :next="{
      variant: 'outline',
      color: 'base',
      ui: {
        base: 'opacity-100! aspect-square !bg-p0  hover:bg-p1! hover:fx-noise hover:fx-depth'
      }
    }"
    arrows
    :breakpoints="{
      '(min-width: 576px)': {
        slidesToScroll: 2
      },
      '(min-width: 768px)': {
        slidesToScroll: 3
      },
      '(min-width: 1024px)': {
        slidesToScroll: 4
      },
      '(min-width: 1260px)': {
        slidesToScroll: 5
      }
    }"
    :ui="{
      root: 'group/posts @container h-98 w-full px-2',
      viewport: 'overflow-hidden pl-2',
      item: 'h-90 max-h-90 grow basis-full justify-center overflow-hidden px-8 py-1 @xl:basis-1/2 @2xl:basis-1/3 @5xl:basis-1/4 @7xl:basis-1/5',
      dots: 'scale-70'
    }"
    orientation="horizontal">
    <template #default="{ item, index }">
      <RedditPost
        v-if="items.length"
        :key="item?.source_id"
        :post="item"
        :post-list="items"
        :index
        @set-index="handleOpen($event)" />
    </template>
  </ucarousel>
</template>
