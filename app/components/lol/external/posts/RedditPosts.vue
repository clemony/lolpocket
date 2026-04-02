<script lang="ts" setup>
const { data: feed } = await useFetch<FeedListResponse>("/api/feed/reddit", {
  query: {
    limit: 25
  }
})
</script>

<template>
  <UCarousel
    :items="feed?.items"
    dots
    :slides-to-scroll="1"
    wheel-gestures
    next-icon="i-right"
    prev-icon="i-left"
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
      root: 'group/posts @container w-full px-2',
      viewport: 'overflow-hidden pl-2',
      item: 'h-90 max-h-90 grow basis-full justify-center overflow-hidden px-8 py-1 @xl:basis-1/2 @2xl:basis-1/3 @5xl:basis-1/4 @7xl:basis-1/5',
      controls: 'w-full shrink-0',
      arrows:
        'flex w-full shrink-0 -translate-y-48 items-center justify-between opacity-0 transition-opacity duration-300 *:aspect-square *:shrink-0 group-hover/posts:opacity-100',
      dots: 'scale-70'
    }"
    orientation="horizontal">
    <template #default="{ item }">
      <RedditPost :key="item.source_id" :post="item" />
    </template>
  </UCarousel>
</template>
