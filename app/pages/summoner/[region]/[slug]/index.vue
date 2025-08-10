<script lang="ts" setup>
const { summoner } = defineProps<{
  summoner: Summoner
}>()

definePageMeta({
  name: 'history',
  meta: {
    aside: import('components/ui/layout/TabsPageAsideWrapper.vue'),
  },
})
</script>

<template>
  <main
    :class="cn('flex mx-auto  gap-6  bg-b1  justify-start items-start')">
    <MatchHistoryPageAside :summoner />
    <SlideInTopOutBottom
      group
      :class="cn('flex flex-col py-20 gap-10  justify-center relative w-[56.5%] px-2 pb-px')">
      <SummonerChampionModule
        v-if="ms().mf?.champion"
        :summoner
        :champion-name="ms().mf?.champion" />
      <MatchList
        v-if="summoner.puuid"
        :puuid="summoner.puuid" />
    </SlideInTopOutBottom>
  </main>
</template>
