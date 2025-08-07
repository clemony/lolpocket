<script lang="ts" setup>
const { summoner } = defineProps<{
  summoner: Summoner
}>()
</script>

<template>
  <TabsPageAsideWrapper>
    <div class="w-full gap-10 auto-rows-max items-start grid">
      <RankCard
        v-if="summoner.ranked?.solo && as().settings?.showSolo"
        title="Solo/Duo"
        :entry="summoner.ranked.solo"
        class="order-first" />

      <Unranked
        v-else-if="as().settings?.showSolo"
        title="Solo/Duo"
        class="order-first" />

      <RankCard
        v-if="summoner.ranked?.flex && as().settings?.showFlex"
        title="Flex"
        :entry="summoner.ranked.flex"
        class="order-2" />

      <Unranked
        v-else-if=" as().settings?.showFlex"
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
        v-if="as().settings.showAllies"
        :summoner
        class="order-last" />
    </div>
  </TabsPageAsideWrapper>
</template>