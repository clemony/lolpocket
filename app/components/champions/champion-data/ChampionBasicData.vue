<script lang="ts" setup>
const { champion} = defineProps<{
champion: Champion
}>()
</script>

<template>
  <div class="grid grid-cols-[1fr_1.5fr]">
    <div class="col-start-1">
   <ChampionStats  :stats="champion.stats" />
    </div>
    <div>
<ChampionAttributes  :champion="champion" /></div>
  </div>
</template>