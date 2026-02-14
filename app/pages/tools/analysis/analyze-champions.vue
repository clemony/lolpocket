<script lang="ts" setup>
const { matches } = defineProps<{
  matches: MatchData[]
}>()
console.log("💠 - matches:", matches)

definePageMeta({
  name: "champion analysis",
  title: "champions",
  icon: "typcn:user",
  parent: "/analysis",
  path: "/analysis/champions",
})

/* const { bayesianChampions } = await useMatchChampions(user().account.puuid) */
</script>

<template>
  <div class="size-full pt-16">
    <div class="grid size-full grid-cols-[0.9fr_1fr] justify-center gap-6">
      <!--       <div class="flex flex-col items-center gap-8 size-full">
        <PocketPickChampion
          v-if="bayesianChampions.length && bayesianChampions[0]"
          :champion="bayesianChampions[0]" />

        <ChampionBarChart
          v-if="bayesianChampions.length"
          :champions="bayesianChampions" />
      </div>

      <div class="grid h-190  ">
        <ChampionDataGrid :champions="bayesianChampions" />
      </div> -->
    </div>
  </div>
</template>
