<script lang="ts" setup>
import { AnimatePresence, motion } from 'motion-v'

const { class: className } = defineProps<{
  class?: HTMLAttributes['class']
}>()

const { clearFilters, summoner } = useSummonerInject()
onMounted(() => {
  if (clearFilters)
    clearFilters()
})
</script>

<template>
  <div
    :class="cn('sticky inset-y-0 -top-20 grid h-fit max-h-dvh w-110 origin-top auto-rows-max items-start gap-8 overflow-y-auto px-1 pt-2 *:w-108', className)">
    <RankCard
      v-if="as().settings?.show_solo"
      title="Solo/Duo"
      :entry="summoner?.ranked?.solo" />

    <RankCard
      v-if=" as().settings?.show_flex"
      title="Flex"
      :entry="summoner?.ranked?.flex" />

    <QueueFilters />

    <MatchChampionFilters />

    <LazyMatchPositionFilter />

    <LazyMatchAlliesFilter
      v-if="as().settings?.show_allies" />
  </div>
</template>
