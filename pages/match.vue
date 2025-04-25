<script setup lang="ts">
import { useScroll } from '@vueuse/core'
import { motion } from 'motion-v'

definePageMeta({
  name: 'match history',
  title: 'Match History',
  section: 'match',
  path: '/match',
})

const as = useAccountStore()

const puuid = computed(() => as.userAccount?.puuid ?? '')

const {
  matchData,
  fetchInitialMatches,
} = useMatchData(puuid.value)


const summoner = computed(() => {
  return as.userAccount ? as.userAccount : defaultUser
})

const target = ref(null)
const { y } = useScroll(target)

console.log()


</script>

<template>
  <div ref="target" class="@max-7xl/app:!flex-col flex items-center  relative  size-full overflow-hidden  ">
    <AppTitlebar>
      <motion.div></motion.div>
    </AppTitlebar>
    <div class="grid h-full w-fit   px-40 relative  overflow-hidden size-full justify-center">
      <!--       <div class="w-full pb-7 ">
        <RecentPlayRate v-if="matchData && puuid" :match-data="matchData" :puuid="puuid" />
      </div> -->
      <div class="size-full min-w-220 overflow-auto">
        <MatchHistoryPagination v-if="matchData && puuid" :match-data="matchData" :puuid="puuid" />
      </div>
    </div>

    <div class="overflow-y-scroll no-scrollbar gap-8  pt-21   w-[42%] relative h-full pr-16 flex flex-col items-start">
      <PlayerHeader :summoner="summoner" class="px-1 " />


        <RankCard title="Solo/Duo"  v-if="as.rankedEntries['RANKED_FLEX_SR']"   :entry="as.rankedEntries['RANKED_FLEX_SR']" />
  
        <RankCard v-if="as.rankedEntries['RANKED_FLEX_SR']" title="Flex"  :entry="as.rankedEntries['RANKED_FLEX_SR']" />

      <ChampTabs />
    </div>
  </div>
</template>
