<script lang="ts" setup>
import { motion, useDomRef } from 'motion-v'

const { summoner } = defineProps<{
  summoner: Summoner
}>()

const emit = defineEmits<{
  (e: 'update:scroll-y-position', value: number): void
}>()

const container = useDomRef()
const { scrollY } = useScroll({
  container,
})
useMotionValueEvent(scrollY, 'change', (latest) => {
  if (latest <= 400)
    emit('update:scroll-y-position', latest)
})
</script>

<template>
  <motion.main
    ref="container"
    class="flex size-full overflow-y-auto overscroll-none !justify-start !items-start">
    <aside
      class="h-full w-[43.5%] px-10 grid justify-end relative sticky top-0 left-0">
      <transition-expand
        group
        class="overflow-y-scroll overscroll-none scrollbar-hidden gap-8 grid auto-rows-max items-start py-14">
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
  </motion.main>
</template>
