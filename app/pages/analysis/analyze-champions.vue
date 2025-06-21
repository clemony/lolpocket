<script lang="ts" setup>
const { matches } = defineProps<{
  matches: SimplifiedMatchData[]
}>()
console.log('💠 - matches:', matches)

definePageMeta({
  name: 'champion analysis',
  altName: 'champions',
  path: '/analysis/champions',
  section: 'analysis',
  icon: 'typcn:user',
})

const { bayesianChampions } = await useMatchChampions(matches)
</script>

<template>
  <div class="size-full pt-16 ">
    <div class="grid grid-cols-[0.9fr_1fr]  gap-6 size-full justify-center ">
      <div class="flex flex-col items-center gap-8 size-full">
        <PocketPickChampion v-if="bayesianChampions.length && bayesianChampions[0]" :champion="bayesianChampions[0]" />

        <ChampionBarChart v-if="bayesianChampions.length" :champions="bayesianChampions" />
      </div>

      <div class="grid h-190  ">
        <ChampionDataGrid :champions="bayesianChampions" />
      </div>
    </div>
  </div>
</template>
