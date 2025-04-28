<script lang="ts" setup>
const route = useRoute()
const puuid = computed (() => route.params.puuid.toString())
const { summoner, loading, ready } = useSummoner(puuid.value)
console.log('💠 - summoner:', summoner)

definePageMeta({
  name: 'summoner',
  title: 'Summoner Profile',
  section: 'match',
  path: '/summoner/:puuid',
})
const tabs = ref('stats')
</script>

<template>
  <!--   <Transition name="fade-pulse">
    <div v-if="loading" class="loading-text loading-pulse">
      {{ loadingMessage }}
    </div>
  </Transition> -->

  <div class="justify-center h-full gap-10 flex ">
    <div class="h-full w-150 pl-10 flex justify-center relative overflow-y-scroll ">
      <div class="overflow-y-scroll no-scrollbar gap-10 pt-28     flex flex-col items-start">
        <PlayerHeader v-if="summoner" :summoner="summoner" class="px-1 " />

        <Tabs v-model:model-value="tabs" v class="w-110 ">
          <IndicatorTabsList class="bg-b2/60 w-full grid grid-cols-3">
            <IndicatorTabsTrigger value="stats" class="px-4">
              Stats
            </IndicatorTabsTrigger>

            <IndicatorTabsTrigger value="filters" class="">
              Filters
            </IndicatorTabsTrigger>

            <IndicatorTabsTrigger value="filters" class="">
              Live Match
            </IndicatorTabsTrigger>
            <TabIndicator />
          </IndicatorTabsList>

          <transition-slide>
            <TabsContent v-if="tabs == 'stats'" value="stats" as="div" class="gap-8 flex flex-col items-start gap-8 pt-5">
              <RankCard v-if="summoner.ranked.solo.tier != 'UNRANKED'" title="Solo/Duo" :entry="summoner.ranked.solo" />
              <Unranked v-else title="Solo/Duo" />

              <RankCard v-if="summoner.ranked.flex.tier != 'UNRANKED'" title="Flex" :entry="summoner.ranked.flex" />
              <Unranked v-else title="Flex" />

              <ChampTabs :summoner="summoner" />
            </TabsContent>
            <TabsContent v-if="tabs == 'filters'" value="filters" as="div" class="pt-6">
              <MatchSidebar :puuid="puuid" :summoner="summoner" />
            </TabsContent>
          </transition-slide>
        </Tabs>
      </div>
    </div>
    <div class=" flex items-center  relative  h-full w-fit overflow-hidden  ">
      <div class="grid h-full w-fit   relative  overflow-hidden size-full justify-center">
        <div class="size-full min-w-220 overflow-auto">
          <MatchHistoryScroller v-if="puuid" :puuid="puuid" :summoner="summoner" />
        </div>
      </div>
    </div>
  </div>
</template>