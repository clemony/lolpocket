<script lang="ts" setup>
const props = defineProps<{
  patchGames: any
}>()
const ds = useDataStore()
const ans = useAnalysisStore()
const championObjects = computed(() => {
  const result = [...getPatchChampions(props.patchGames)]
  // Ensure the array always has 5 elements by padding with null objects
  while (result.length < 5) {
    result.push({ champion: null, games: null, wins: null, losses: null, winrate: null })
  }

  return result.slice(0, 5) // Return exactly 5 elements
})

const data = computed(() => ({
  labels: championObjects.value.map(c => c.champion ?? ''),
  datasets: [{
    data: championObjects.value.map(c => c.winrate ?? 0),
  }],
}))

const champs = computed (() => {
  return championObjects.value.map(({ champion }) => ({
    champion: champion != 'none' ? ds.champions.find(c => c.name == champion) : null,
  }))
})

/* grayscale rounded-box shadow-warm-soft  border border-b3 relative flex flex-col h-full hover:grayscale-0 tldr-50 */
</script>

<template>
  <div class="py-8 pl-4 pr-14 bg-b1  size-full flex flex-col relative">
    <div class="grow pl-6 pt-2 flex w-full">
      <div class="">
        <h4 class="dst">
          Champion Winrates
        </h4>
        <p class="mt-2">
          <SummonerName class="capitalize " />
        </p>
      </div>
      <div class="font-medium grow justify-end text-end">
        {{ ans.patchSelect }}
      </div>
    </div>
    <div class="justify-self-end w-full pt-8  h-full">
      <BarChart :data="data" />
    </div>

    <div class="w-full  grid place-items-center grid-cols-[0.45fr_repeat(4,1fr)_1.03fr] -mt-4">
      <div />
      <template v-for="(champion, i) in champs" :key="i">
        <Champion v-if="champion.champion" v-tippy="champion.champion.name" :champion="champion.champion" class="size-10 !rounded-md  **:!rounded-md *:!rounded-md *:overflow-hidden " />
        <Placeholder v-else class="size-10 !rounded-md ">
          <i-no-champ class="size-8 text-bc/10" />
        </Placeholder>
      </template>
    </div>

    <NoDataOverlay v-if="!props.patchGames.length" />
  </div>
</template>