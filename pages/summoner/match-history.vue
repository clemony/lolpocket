<script setup lang="ts">
definePageMeta({
  name: 'match history',
  title: 'Match History',
  header: 'none',
})

const as = useAccountStore()
</script>

<template>
  <div class=" pl-24 relative flex gap-26 relative justify-start size-full overflow-hidden">
    <div class=" w-161 overflow-y-scroll relative h-full">
      <PlayerHeader :summoner="as.userAccount">
        <SummonerIcon class="rounded-full size-19" />
      </PlayerHeader>

      <div class="flex flex-col pt-36 w-111  overflow-y-scroll no-scrollbar absolute gap-8 inset-0 top-0 left-0 pr-1 ">
        <div class="h-45 pt-2 flex items-center ">
          <RankCard title="Solo/Duo" queue="soloDuo" />
        </div>
        <div class="h-45 pt-2 flex items-center ">
          <RankCard title="Flex" queue="flex" />
        </div>

        <ChampTabs />
      </div>
    </div>

    <LayoutGroup>
      <Motion
        :layout="true" :transition="{
          type: useSpring(0, {
            stiffness: 200,
            damping: 100,
            mass: 10,
          }) }" class="justify-center size-full overflow-hidden relative">
        <div class="w-full  top-0 left-0 absolute z-1  bg-gradient-to-b pb-3 from-b1 to-b1/60 backdrop-blur-md  ">
          <RecentPlayRate />
        </div>

        <Motion :layout="true" class=" relative pb-12 overflow-y-scroll size-full">
          <Motion class="flex flex-col  pt-36 absolute inset-0 top-0 left-0 gap-7 overflow-y-scroll py-10" :layout="true">
            <Motion v-for="i in 8" :key="i" :layout="true">
              <MatchCard />
            </Motion>
          </Motion>
        </Motion>
      </Motion>
    </LayoutGroup>
  </div>
</template>
