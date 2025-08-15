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
  <main class="size-full">
    <div
      :class="cn('flex mx-auto  gap-6 sticky  bg-b1  z-1    w-full justify-start items-start')">
      <div class="w-[43%] grid z-auto sticky top-0 mb-42 justify-end pl-6 pr-8">
        <MatchHistoryAside :summoner />
      </div>
      <SlideInTopOutBottom
        group
        :class="cn('flex flex-col gap-10  justify-center w-[57%] pl-8 mpr-4 pb-px')">
        <SummonerChampionModule
          v-if="ms().mf?.champion"
          :summoner
          :champion-name="ms().mf?.champion" />
        <MatchList
          v-if="summoner.puuid"
          :summoner />
      </SlideInTopOutBottom>
    </div>
    <SiteFooter />
  </main>
</template>
