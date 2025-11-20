<script lang="ts" setup>
const { loading, matches, summoner } = useSummonerInject()
</script>

<template>
  <div
    class="grid w-108 auto-rows-max items-start gap-8 overflow-y-auto py-24">
    <RankCard
      v-if="as().settings?.show_solo && !loading"
      title="Solo/Duo"
      :entry="summoner?.ranked?.solo" />

    <RankCard
      v-if="summoner.ranked?.flex && as().settings?.show_flex"
      title="Flex"
      :entry="summoner.ranked.flex" />

    <QueueFilters />

    <MatchChampionFilters />
    <div class="flex w-full items-center gap-2 px-3">
      <PatchDateRange />
      <h4>Past {{ matches?.length }} games</h4>
    </div>
    <div>
      <LazyMatchPositionFilter />
    </div>

    <LazyMatchAlliesFilter
      v-if="as().settings.show_allies"
      class="order-last" />
  </div>
</template>
