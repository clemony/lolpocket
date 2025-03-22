<script lang="ts" setup>
definePageMeta({

  alias: '/summoner/analysis',
})
</script>

<template>
  <div>
    <div class=" h-130 max-h-130">
      <AnalysisItemChart :patch-games="ans.patchGames" />
    </div>
    <PocketPickItem :patch-games="ans.patchGames" />
    <AnalysisItemList />
  </div>
</template>