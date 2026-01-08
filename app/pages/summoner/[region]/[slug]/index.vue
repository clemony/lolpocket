<script lang="ts" setup>
import type { RouteRecordRaw } from 'vue-router'

useSeoMeta({
  title: '[title]',
  description: '[description]',
  ogDescription: '[og:description]',
  ogImage: '[og:image]',
  ogTitle: '[og:title]',
  ogUrl: '[og:url]',
  twitterCard: 'summary',
  twitterDescription: '[twitter:description]',
  twitterImage: '[twitter:image]',
  twitterTitle: '[twitter:title]'
})
definePageMeta({
  title: 'match history',
  icon: 'history',
  listClass: '**:stroke-[1.6]',
  order: 0,
})
</script>

<template>
  <div
    :class="
      cn('relative z-auto mx-auto grid h-fit min-h-screen w-full max-w-[1280px] grid-cols-[330px_1fr] gap-14 px-24 pb-44',
      )
    ">
    <MatchHistoryAside />

    <MatchList />
  </div>
</template>
