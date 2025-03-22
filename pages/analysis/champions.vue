<script lang="ts" setup>

</script>

<template>
  <div>
    <div class="h-130 max-h-130">
      <AnalysisChampionChart :patch-games="ans.patchGames" />
    </div>
    <PocketPickChampion :patch-games="ans.patchGames" />
  </div>
</template>