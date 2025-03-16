<script setup lang="ts">
definePageMeta({
  name: 'match history',
  title: 'Match History',
  header: 'none',
})

const as = useAccountStore()

const matchArray = {
  NA1_5246472309,
    NA1_5246418931,
    NA1_5246189449,
    NA1_5246170813,
    NA1_5246149580,
    matchData
    }
</script>

<template>
  <div class=" pl-22 relative @max-7xl/app:!flex-col flex gap-[5%]  relative justify-start size-full overflow-hidden ">
    <div class=" w-110 min-w-110 overflow-y-scroll relative h-full ">
      <PlayerHeader :summoner="as.userAccount">
        <SummonerIcon class="rounded-full size-19" />
      </PlayerHeader>

      <div class="flex flex-col pt-36  overflow-y-scroll no-scrollbar absolute gap-8 inset-0 top-0 left-0 pr-1 ">
        <div class="h-45 pt-2 flex items-center ">
          <RankCard title="Solo/Duo" queue="soloDuo" />
        </div>
        <div class="h-45 pt-2 flex items-center  mb-2">
          <RankCard title="Flex" queue="flex" />
        </div>

        <ChampTabs />
      </div>
    </div>

    <div class="justify-center size-full overflow-hidden relative">
      <div class="w-full  top-0 left-0 absolute z-1  bg-gradient-to-b pb-3 from-b1 to-b1/60 backdrop-blur-md  ">
        <RecentPlayRate />
      </div>

      <div class=" relative pb-12 overflow-scroll size-full justify-start">
        <div class="flex flex-col pl-1  pr-6 pt-36 absolute inset-0 top-0 left-0 gap-7 overflow-scroll py-10 items-start">
          <MatchCard v-for="(match, i) in matchArray" :key="i" :match="match"/>
          <MatchCard v-for="i in 8" :key="i" :match="matchData"/>
        </div>
      </div>
    </div>
  </div>
</template>
