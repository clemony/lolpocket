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
      cn('z-auto mx-auto mb-42 flex h-max min-h-screen w-fit gap-10 justify-self-center',
      )
    ">
    <div class="scrollbar-none grid shrink justify-end">
      <MatchHistoryAside />
    </div>
    <SlideInTopOutBottom
      group
      :class="cn('flex h-max min-w-210 grow flex-col justify-center')">
      <MatchList ref="scrollMain" />
    </SlideInTopOutBottom>
  </div>
</template>
