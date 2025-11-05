<script lang="ts" setup>
const { champion } = defineProps<{
  champion: Champion
}>()
</script>

<template>
  <div class="grid px-5">
    <div class="col-start-1"></div>

    <div>
      <ChampionAttributes :champion="champion" />
    </div>
  </div>
</template>
