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

onMounted(async () => {
  await fetchInitialMatches()
})


const summoner = computed(() => {
  return as.userAccount ? as.userAccount : defaultUser
})


const target = ref(null)
const { y } = useScroll(target)

</script>

<template>
  <div  ref="target"  class="@max-7xl/app:!flex-col flex gap-20 items-center  relative  size-full overflow-hidden  ">
    <AppTitlebar>
      <motion.div></motion.div>
    </AppTitlebar>
    <div class="grid h-full relative w-[60%]  no-scrollbar  pl-16 relative pb-12 overflow-scroll size-full justify-end">
      <div class="flex  flex-col pl-1   pt-24  no-scrollbar  absolute inset-0 top-0 left-0 gap-7 overflow-scroll py-10 items-end">
   
          <RecentPlayRate v-if="matchData && puuid" :match-data="matchData" :puuid="puuid" />


        <MatchHistoryPagination v-if="matchData && puuid" :match-data="matchData" :puuid="puuid" />
      </div>
    </div>


    <div class="overflow-y-scroll no-scrollbar gap-8  pt-21   w-[40%] relative h-full pr-16 flex flex-col items-start">
   
      <PlayerHeader :summoner="summoner" class="px-1 " />


    
    <div class="h-42 -mt-1 flex items-center ">
        <RankCard title="Solo/Duo" queue="soloDuo" />
      </div>
      <div class="h-42  flex items-center  mb-4">
        <RankCard title="Flex" queue="flex" />
      </div>
      <ChampTabs />

    </div>
  </div>
</template>
