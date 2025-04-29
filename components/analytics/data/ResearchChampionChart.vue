<script lang="ts" setup>
const { summoner, queue, patch } = defineProps<{
  summoner: any
  queue: any
  patch: any
}>()
console.log('💠 - patch:', patch)
console.log('💠 - queue:', queue)
console.log('💠 - summoner:', summoner)


const matches = computedAsync (() => summoner.value.simplifiedMatches)
console.log('💠 - matches:', matches)

const { bayesianChampions } = useMatchChampions( patch, summoner.puuid, matches)

const championData = computedAsync (() => {
  if (!bayesianChampions)
    return

  let c = [...bayesianChampions.value]
  c = c.sort((a, b) => (b.games - a.games))
  while (c.length < 5) {
    c.push({ champion: null, games: null, wins: null, losses: null, winrate: null })
  }

  return c.slice(0, 5)
})

const data = computed(() => ({
  labels: championData.value.map(c => c.champion ?? ''),
  datasets: [{
    data: championData.value.map(c => c.winrate ?? 0),
  }],
}))
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
        {{ patch }}
      </div>
    </div>
    <div class="justify-self-end w-full pt-8  h-full">
      <BarChart :data="data" />
    </div>

    <div class="w-full  grid place-items-center grid-cols-[0.45fr_repeat(4,1fr)_1.03fr] -mt-4">
      <div />
      <template v-for="(champion, i) in bayesianChampions" :key="i">
        <Champion v-if="champion.champion" v-tippy="champion.champion.name" :champion="champion.champion" class="size-10 !rounded-md  **:!rounded-md *:!rounded-md *:overflow-hidden " />
        <Placeholder v-else class="size-10 !rounded-md ">
          <i-no-champ class="size-8 text-bc/10" />
        </Placeholder>
      </template>
    </div>

    <NoDataOverlay v-if="!bayesianChampions" />
  </div>
</template>