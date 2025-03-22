<script setup lang="ts">
definePageMeta({

  name: 'analysis',
  title: 'analysis',
  // path: '/summoner/analysis',
})

const ds = useDataStore()
const as = useAccountStore()
const ans = useAnalysisStore()
watchEffect(() => {
  ans.patchGames = ans.userMatchData.filter(g => g.patch == ans.patchSelect)
})
</script>

<template>
  <div class="absolute inset-0   grid grid-cols-[330px_1fr_200px] overflow-hidden gap-24">
    <div class="w-full flex  pl-18  flex-col gap-8 overflow-hidden pt-52 ">
    
      <Separator class="bg-b2" />
      <div class="w-full px-2">
        <PatchSelectDropdown />
      </div>
      <QueueRadio />
      <Separator class="bg-b2" />
      <RecentPatchWinrates />
      <Separator class="bg-b2" />
      <div class="w-full px-2">
      <PositionSelect  />
      </div>
    </div>
    <div class="overflow-hidden size-full justify-center justify-items-center  scrollbar-none pt-38 pb-14">
      <AnalysisPageTabs  />
      <div class="flex flex-col gap-8 size-full min-w-110 max-w-230 pb-10">
        <div class="min-h-130 h-130">
          <AnalysisItemChart />
        </div>
        <div class="relative size-full grid place-items-center pb-10">
          <div class="absolute inset-0 top-0 left-0 overflow-auto">
        <AnalysisItemList />
        </div>
        </div>
      </div>
    </div>

      <div class="w-full  pr-18  pt-48">
      <PocketPickItem :patch-games="ans.patchGames" />
      </div>
  </div>
</template>

<style scoped>

</style>
