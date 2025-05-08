<script lang="ts" setup>
const { stats } = defineProps<{
  stats: Record<string, ChampionStat>
}>()
</script>

<template>
  <div class="grid grid-cols-[2fr_1fr]">
    <div class="col-start-1"></div>

    <div>
   <ChampionStats  :stats="stats" />
    </div>
  </div>
</template>