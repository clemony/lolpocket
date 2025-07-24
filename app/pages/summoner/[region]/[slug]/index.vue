<script lang="ts" setup>
import { vScroll } from '@vueuse/components'
import type { UseScrollReturn } from '@vueuse/core'

const { summoner } = defineProps<{
  summoner: Summoner
}>()

const emit = defineEmits<{
  (e: 'update:scroll-y-position', value: number): void
}>()

function onScroll(state: UseScrollReturn) {
  console.log(state.y.value) // {x, y, isScrolling, arrivedState, directions}
  emit('update:scroll-y-position', state.y.value)
}
</script>

<template>
  <main
    v-scroll="onScroll"
    class="flex size-full overflow-y-auto !justify-start !items-start">
    <aside
      class="h-full w-[43.5%] px-10 grid justify-end relative sticky top-0 left-0">
      <transition-expand
        group
        class="overflow-y-scroll scrollbar-hidden gap-8 grid auto-rows-max items-start py-14">
        <RankCard
          v-if="summoner.ranked?.solo"
          title="Solo/Duo"
          :entry="summoner.ranked.solo"
          class="order-first" />

        <Unranked
          v-else
          title="Solo/Duo"
          class="order-first" />

        <RankCard
          v-if="summoner.ranked?.flex"
          title="Flex"
          :entry="summoner.ranked.flex"
          class="order-2" />

        <Unranked
          v-else
          title="Flex"
          class="order-2" />

        <QueueFilters
          :summoner
          class="order-3" />

        <MatchChampionFilters
          :summoner
          class="order-4" />

        <div class="order-5">
          <MatchPositionFilter :summoner />
        </div>

        <MatchAlliesFilter
          :summoner
          class="order-last" />
      </transition-expand>
    </aside>

    <div class="grid items-center relative w-[56.5%] px-2 pb-px">
      <MatchList
        v-if="summoner.puuid"
        :puuid="summoner.puuid"
        @update:scroll-y-position="
          (e) => emit('update:scroll-y-position', e)
        " />
    </div>
  </main>
</template>
