<script lang="ts" setup>
const { loading, summoner } = useSummonerInject()
</script>

<template>
  <div
    class="w-124 justify-center overflow-y-auto py-24 gap-8 auto-rows-max items-start grid">
    <RankCard
      v-if="as().settings?.showSolo && !loading"
      title="Solo/Duo"
      :entry="summoner?.ranked?.solo"
      class="order-2" />

    <RankCard
      v-if="summoner.ranked?.flex && as().settings?.showFlex"
      title="Flex"
      :entry="summoner.ranked.flex"
      class="order-3" />

    <QueueFilters
      class="order-5" />

    <MatchChampionFilters
      class="order-6" />

    <div class="order-7">
      <LazyMatchPositionFilter />
    </div>

    <LazyMatchAlliesFilter
      v-if="as().settings.showAllies"
      class="order-last" />
  </div>
</template>
