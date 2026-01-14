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
        hover="inset"
        size="sq-10"
        class="bg-transparent! fx-0 on:bg-transparent! hover:on:fx-1"
        variant="ghost">
        <Icon
          name="ic:baseline-menu"
          class="" />
      </Toggle>

      <Popover>
        <PopoverTrigger
          variant="ghost"
          on="inset"
          hover="inset"
          size="sq-10"
          class="bg-transparent! fx-0 on:bg-transparent! hover:on:fx-1">
          <Icon
            name="ic:baseline-filter-list"
            class="" />
        </PopoverTrigger>
      </Popover>

      <span
        :data-tip="filterEmpty() ? 'No filters applied' : 'Clear filters'">
        <Button
          size="sq-10"
          hover="inset"
          :disabled="filterEmpty()"
          class="bg-transparent! duration-0! disabled:pointer-events-none"
          :variant="filterEmpty() ? 'ghost' : 'neutral'"
          @click="clearFilters()">
          <Icon
            name="ic:baseline-filter-list-off"
            class="in-disabled:opacity-40" />
        </Button>
      </span>
      <UpdateSummoner
        variant="ghost"
        hover="inset"
        class="bg-transparent"
        placement="top"
        size="sq-10" />

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

      <MatchList />
    </TransitionSlide>
  </div>
</template>
