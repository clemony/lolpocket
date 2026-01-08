<script lang="ts" setup>
const { clearFilters, summoner } = useSummonerInject()
onMounted(() => {
  if (clearFilters)
    clearFilters()
})
</script>

<template>
  <div
    class="sticky inset-y-0 -top-66 grid h-fit max-h-dvh w-full auto-rows-max items-start gap-8 overflow-y-auto px-1 py-24 *:w-108">
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

    <AdvancedMatchFilters />
  </div>
</template>
