<script setup lang="ts">
definePageMeta({
  name: 'analysis',
  background: 'b2',
})

const ds = useDataStore()
const as = useAccountStore()
const ans = useAnalysisStore()
watchEffect(() => {
  ans.patchGames = as.userMatchData.filter(g => g.patch == ans.patchSelect)
})
</script>

<template>
  <div class="absolute inset-0  px-18 pt-48 grid grid-cols-4 auto-rows-max overflow-auto items-start  g gap-8">
    <AnalysisHeader />
    <RecentPatchWinrates />

    <div class="col-start-3 col-span-2 row-span-2 h-130 max-h-130">
      <AnalysisItemChart :patch-games="ans.patchGames" />
    </div>

    <div class="col-start-1 row-start-2 col-span-2 row-span-2 h-130 max-h-130">
      <AnalysisChampionChart :patch-games="ans.patchGames" />
    </div>
    <div class="row-span-3">
      <PocketPickItem :patch-games="ans.patchGames" />
    </div>
    <div class="col-span-2">
      <PocketPickChampion :patch-games="ans.patchGames" />
    </div>
  </div>
</template>

<style scoped>

</style>
