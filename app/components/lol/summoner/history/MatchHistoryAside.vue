<script lang="ts" setup>
const { clearFilters, summoner } = useSummonerInject()
</script>

<template>
  <div
    class="sticky top-0 grid w-108 auto-rows-max items-start gap-8 justify-self-end overflow-y-auto py-24">
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
    <Button
      class="w-full"
      variant="neutral"
      @click="clearFilters()">
      Clear Filters
    </Button>
  </div>
</template>
