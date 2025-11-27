<script lang="ts" setup>
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
      cn('z-auto grid h-max min-h-screen w-screen grid-cols-[1fr_1.5fr] gap-10 justify-self-center',
      )
    ">
    <MatchHistoryAside />

    <MatchList
      ref="scrollMain" />
  </div>
</template>
