<script lang="ts" setup>
import { LayoutGroup } from 'motion-v'

const route = useRoute()
const puuid = computed (() => route.params.puuid.toString())
const { summoner, loading, ready } = useSummoner(puuid.value)
console.log('💠 - summoner:', summoner)

definePageMeta({
  name: 'summoner',
  title: 'Summoner Profile',
  section: 'summoner',
  path: '/summoner/:puuid',
})
</script>

<template>
  <!--   <Transition name="fade-pulse">
    <div v-if="loading" class="loading-text loading-pulse">
      {{ loadingMessage }}
    </div>
  </Transition> -->

  <div class="justify-center w-full h-full flex ">
    <div class="h-full  w-[43%] pl-10 grid justify-end relative   overflow-y-scroll   no-scrollbar ">
      <div class="gap-10 pt-34 h-full flex flex-col items-start pr-16">
        <PlayerHeader v-if="summoner" :summoner="summoner" class="px-1 " />


<LayoutGroup>
        <transition-expand group class="gap-8 flex flex-col items-start gap-8 pt-2">
          <RankCard v-if="summoner.ranked.solo.tier != 'UNRANKED'" title="Solo/Duo" :entry="summoner.ranked.solo" />
          <Unranked v-else title="Solo/Duo" />

          <RankCard v-if="summoner.ranked.flex.tier != 'UNRANKED'" title="Flex" :entry="summoner.ranked.flex" />
          <Unranked v-else title="Flex" />

          <QueueFilters v-if="summoner" :summoner="summoner" />
   

            <MatchChampionFilters v-if="summoner" :summoner="summoner" />
          <MatchPositionFilter v-if="summoner" :summoner="summoner" />
          <MatchAlliesFilter v-if="summoner" :summoner="summoner" />
        </transition-expand>
        </LayoutGroup>
      </div>
      <div class="h-28 w-full" />
    </div>
    <div class=" grid items-center  relative  w-[57%]  pl-2  ">

      <MatchHistoryScroller v-if="puuid" :puuid="puuid" :summoner="summoner" />

    </div>
  </div>
</template>