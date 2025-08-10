<script lang="ts" setup>
const { summoner } = defineProps<{
  summoner: Summoner
}>()
</script>

<template>
  <div class="w-124 sticky top-24 scrollbar-none overflow-y-auto pb-44 max-h-screen justify-center gap-10 auto-rows-max items-start grid">
    <SummonerHeader
      :show="us().tabsSticky == true"
      :summoner
      class="order-first mb-8 w-full px-2" />

    <RankCard
      v-if="summoner.ranked?.solo && as().settings?.showSolo"
      title="Solo/Duo"
      :entry="summoner.ranked.solo"
      class="order-2" />

    <Unranked
      v-else-if="as().settings?.showSolo"
      title="Solo/Duo"
      class="order-2" />

    <RankCard
      v-if="summoner.ranked?.flex && as().settings?.showFlex"
      title="Flex"
      :entry="summoner.ranked.flex"
      class="order-3" />

    <Unranked
      v-else-if=" as().settings?.showFlex"
      title="Flex"
      class="order-4" />

    <QueueFilters
      :summoner
      class="order-5" />

    <MatchChampionFilters
      :summoner
      class="order-6" />

    <div class="order-7">
      <MatchPositionFilter :summoner />
    </div>

    <MatchAlliesFilter
      v-if="as().settings.showAllies"
      :summoner
      class="order-last" />
  </div>
</template>