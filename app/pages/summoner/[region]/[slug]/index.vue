<script lang="ts" setup>
import type { Easing } from 'motion-v'
import { AnimatePresence, motion } from 'motion-v'

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

const open = shallowRef<boolean>(true)
</script>

<template>
  <div
    :initial="getDevice() === 'Mobile' ? 'closed' : 'open'"
    :animate="open ? 'open' : 'closed'"
    class="relative z-auto mx-auto flex h-fit min-h-screen w-full max-w-[1400px] flex-col items-center gap-y-6 px-24 pt-8 pb-44">
    <MatchHistoryMenu @open="e => open = e" />
    <TransitionSlide
      group
      :offset=" {
        enter: [0, '10%'],
        leave: [0, '10%'],
      } "
      class="z-auto flex w-full origin-right justify-center gap-14">
      <MatchHistoryAside
        v-if="open" />

      <MatchList />
    </TransitionSlide>
  </div>
</template>
