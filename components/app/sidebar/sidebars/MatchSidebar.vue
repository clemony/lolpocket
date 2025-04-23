<script setup lang="ts">
const as = useAccountStore()


const puuid = computed(() => as.userAccount?.puuid ?? '')
const ign = computed(() => as.userAccount?.gameName ?? '')

const {
  matchData,
  loading,
  fetchInitialMatches,
} = useMatchData(puuid.value)

onMounted(async () => {
  await fetchInitialMatches()
})
</script>

<template>
  <div class="size-full relative overflow-y-scroll overflow-x-hidden ">
    <SidebarTitle>
<UpdateMatchHistoryButton :loading="loading" :puuid="puuid" v-if="puuid" class=" absolute right-3" />
       
</SidebarTitle>
    <div class="px-3 grid h-fit gap-10 mt-5">
      <div class="input input w-full h-12">
        <icon name="search" />
    <input class="grow h-full" placeholder="Search Summoner..."/>
    </div>
        <QueueButtons />
        <PlayedWithList v-if="puuid && ign" :puuid="puuid" :game-name="ign" />

        <PositionTabs class=" mb-0 border-x-0 " />
<PlayedChampionFilter  />
    <Grow />
    <ClearMatchesButton />
    </div>
</div>
</template>
