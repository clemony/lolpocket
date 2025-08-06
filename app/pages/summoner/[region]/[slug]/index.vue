<script lang="ts" setup>
const { summoner } = defineProps<{
  summoner: Summoner
}>()

definePageMeta({
  name: 'summoner-history',
})

const as = useAccountStore()
</script>

<template>
  <main
    :class="cn('flex w-full overflow-auto relative gap-6  bg-b1  justify-start items-start')">
    <aside class="h-full max-h-[calc(100vh-72px)] grid  w-[43.5%] px-6  justify-end">
      <Teleport
        defer
        to="#asideRef">
        <div class="w-full top-0 bottom-0 gap-10 auto-rows-max items-start pb-40 pt-20 grid">
          <RankCard
            v-if="summoner.ranked?.solo && as.settings?.showSolo"
            title="Solo/Duo"
            :entry="summoner.ranked.solo"
            class="order-first" />

          <Unranked
            v-else-if="as.settings?.showSolo"
            title="Solo/Duo"
            class="order-first" />

          <RankCard
            v-if="summoner.ranked?.flex && as.settings?.showFlex"
            title="Flex"
            :entry="summoner.ranked.flex"
            class="order-2" />

          <Unranked
            v-else-if=" as.settings?.showFlex"
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
            v-if="as.settings.showAllies"
            :summoner
            class="order-last" />
        </div>
      </Teleport>
    </aside>
    <div
      :class="cn('flex flex-col py-20 gap-10  justify-center relative w-[56.5%] px-2 pb-px')">
      <SummonerChampionModule />
      <MatchList
        v-if="summoner.puuid"
        :puuid="summoner.puuid" />
    </div>
  </main>
</template>
