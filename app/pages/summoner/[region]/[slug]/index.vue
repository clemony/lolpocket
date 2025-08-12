<script lang="ts" setup>
const { summoner } = defineProps<{
  summoner: Summoner
}>()

definePageMeta({
  name: 'history',
  order: 0,
  title: 'match history',
  icon: 'history',
  iconStyle: '',
})
</script>

<template>
  <div
    :class="cn('flex mx-auto  gap-6  bg-b1 w-full z-auto justify-start items-start')">
    <div class="w-[43%] grid z-auto justify-end px-6">
      <MatchHistoryPageAside :summoner />
    </div>
    <SlideInTopOutBottom
      group
      :class="cn('flex flex-col gap-10  justify-center w-[57%] px-4 pb-px')">
      <SummonerChampionModule
        v-if="ms().mf?.champion"
        :summoner
        :champion-name="ms().mf?.champion" />
      <MatchList
        v-if="summoner.puuid"
        :puuid="summoner.puuid" />
    </SlideInTopOutBottom>
  </div>
</template>
