<script setup lang="ts">
const { params } = defineProps<{
  params: any
}>()

console.log('💠 - params:', params)
</script>

<template>
  <div class=" overflow-hidden size-12 rounded-lg shadow-sm drop-shadow-sm">
    <ChampionIcon :id="params.data.championId ?? params.data.id" :alt="params.data.champion ?? params.data.name" class="size-12 scale-118" />
  </div>
</template>
