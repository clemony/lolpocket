<script lang="ts" setup>
const { matches } = defineProps<{
  matches: SimplifiedMatchData[]
}>()
console.log('💠 - matches:', matches)

definePageMeta({
  name: 'analyze-champions',
  title: 'analytics',
  path: '/analytics/champions',
  section: 'analytics',
})

const { bayesianChampions } = useMatchChampions(matches)
</script>

<template>
  <div class="size-full pt-16">

<div class="w-full flex items-center h-28">
      <h1 class="dst">Champion Analysis</h1>
  </div>
  <div class="flex  gap-10 size-full ">
      <div class="flex flex-col gap-8 size-full">
    <ChampionBarChart v-if="bayesianChampions.length" :champions="bayesianChampions" />

    <div class="grid grid-cols-[100px_1fr] size-full gap-8">
      <PocketPickChampion v-if="bayesianChampions.length && bayesianChampions[0]" :champion="bayesianChampions[0]" />
      <div class="relative size-full grid place-items-center pb-10">
        <div class="absolute inset-0 top-0 left-0 overflow-auto">
          <!-- list here -->
        </div>
      </div>
    </div>
    </div>
    <div class="size-full grow">
    <ChampionDataGrid :champions="bayesianChampions"  />
    </div>
    </div>
</div>
</template>
