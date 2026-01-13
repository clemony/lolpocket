<script lang="ts" setup>
import type { Easing } from 'motion-v'
import { AnimatePresence, motion } from 'motion-v'

const { clearFilters, filteredMatches, filterEmpty, query, summoner } = useSummonerInject()
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
const searchFocused = shallowRef<boolean>(false)

const wrapVar = {
  closed: {
  },
  open: {
    maxWidth: '1400px',
  },
}
</script>

<template>
  <div
    :initial="getDevice() === 'Mobile' ? 'closed' : 'open'"
    :animate="open ? 'open' : 'closed'"
    class="relative z-auto mx-auto flex h-fit min-h-screen w-full max-w-[1400px] flex-col items-center gap-y-6 px-24 pt-8 pb-44">
    <div
      :class="cn('sticky -top-56 z-2 flex h-20 w-full max-w-384 items-center justify-between gap-4 bg-b1/94 px-1 backdrop-blur-md transition-all duration-300', { 'max-w-260': !open })">
      <Toggle
        v-model:model-value="open"
        on="inset"
        class="fx-0 hover:bg-b2 hover:fx-1 on:bg-transparent!"
        variant="ghost">
        <Icon
          :name="open ? 'menu' : 'menu'"
          class="**:stroke-[1.6]" />
      </Toggle>

      <UpdateSummoner
        variant="ghost"
        placement="top"
        size="sq-10" />

      <Button
        data-placement="left"
        data-theme="mini-tip neutral line"
        :data-tip="filterEmpty() ? 'No filters applied' : 'Clear filters'"
        size="sq-10"
        hover="neutral"
        :disabled="filterEmpty()"
        class="duration-0! disabled:pointer-events-none"
        :variant="filterEmpty() ? 'ghost' : 'neutral'"
        @click="clearFilters()">
        <Icon
          name="lucide:filter-x"
          class="" />
      </Button>

      <Grow />

      <InputGroup
        class="max-w-258 grow transition-all duration-300"
        size="10">
        <InputGroupSearch />
        <InputGroupInput @update:model-value="e => query = e" />
        <InputGroupClear />
      </InputGroup>
    </div>
    <TransitionSlide
      group
      :offset=" {
        enter: [0, '10%'],
        leave: [0, '10%'],
      } "
      class="z-auto flex w-full origin-right justify-center gap-14">
      <MatchHistoryAside
        v-if="open" />

      <MatchList :class="cn('', { '': !open })" />
    </TransitionSlide>
  </div>
</template>
