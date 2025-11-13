<script lang="ts" setup>
const { loading, summoner } = useSummonerInject();
</script>

<template>
  <div
    class="grid w-124 auto-rows-max items-start justify-center gap-8 overflow-y-auto py-24"
  >
    <RankCard
      v-if="as().settings?.show_solo && !loading"
      title="Solo/Duo"
      :entry="summoner?.ranked?.solo"
      class="order-2"
    />

    <RankCard
      v-if="summoner.ranked?.flex && as().settings?.show_flex"
      title="Flex"
      :entry="summoner.ranked.flex"
      class="order-3"
    />

    <QueueFilters class="order-5" />

    <MatchChampionFilters class="order-6" />

    <div class="order-7">
      <LazyMatchPositionFilter />
    </div>

    <LazyMatchAlliesFilter
      v-if="as().settings.show_allies"
      class="order-last"
    />
  </div>
</template>
