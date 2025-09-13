<script lang="ts" setup>
const { state } = defineProps<{
  state: PlayerData
}>()
</script>

<template>
  <div class="w-124 sticky py-24 top-24 scrollbar-none overflow-y-auto max-h-screen justify-center gap-10 auto-rows-max items-start grid">
    <RankCard
      v-if=" as().settings?.showSolo && !state.loading"
      title="Solo/Duo"
      :entry="state?.summoner?.ranked?.solo"
      class="order-2" />

    <RankCard
      v-if="state.summoner.ranked?.flex && as().settings?.showFlex"
      title="Flex"
      :entry="state.summoner.ranked.flex"
      class="order-3" />

    <QueueFilters
      :state
      class="order-5" />

    <MatchChampionFilters
      :state
      class="order-6" />

    <div class="order-7">
      <LazyMatchPositionFilter />
    </div>

    <LazyMatchAlliesFilter
      v-if="as().settings.showAllies"
      :state
      class="order-last" />
  </div>
</template>