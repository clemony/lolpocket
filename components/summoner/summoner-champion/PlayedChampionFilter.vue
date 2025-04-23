<script setup lang="ts">

const ms = useMatchStore()
const playedChampions = computed(() => {
  const counts: Record<string, number> = {}

  for (const match of ms.matches) {
    counts[match.championName] = (counts[match.championName] || 0) + 1
  }

  return Object.entries(counts)
    .sort((a, b) => b[1] - a[1]) // sort by descending frequency
    .map(([champion]) => champion)
})

function handleReset(){
ms.championSelect = 'All'
}


const {bayesianChampions} = useMatchChampions(computed (() => ms.queueSelect))
console.log("💠 - bayesianChampions:", bayesianChampions)
</script>

<template>
<div class="w-full">
<div class="flex items-center mb-2 -ml-1">
      <label :class="{'pointer-events-none':ms.championSelect == 'All' }" @click="ms.championSelect = 'All'" class="btn btn-sm gap-2 font-medium rounded-lg px-2.5 place-self-center text-3  btn-ghost">
    <input
      class="peer hidden"
      aria-label="All"
             v-model="ms.championSelect"
        name="match-champion-filter"
      value="All" />
 {{ ms.championSelect != 'All' ? ms.championSelect : 'Champions'}}

      <icon v-if="ms.championSelect != 'All'" name="x-sm" class=" shrink-0 -mt-px" />

      </label>
</div>

<div class="w-full h-90 overflow-hidden grid tldr-30 delay-600 justify-center w-fit" >
    <transition-slide group class="grid grid-cols-5 grid-flow-col auto-rows-auto p-1 w-full h-fit overflow-scroll justify-between scroll-smooth gap-4 relative items-center no-scrollbar">

      
      <template
        v-for="champion in bayesianChampions"
        :key="champion.champion.id">
    <LazyLabel v-if="ms.championSelect == 'All' || ms.championSelect != 'All' && ms.championSelect == champion.champion.name"
     class="size-14 cursor-pointer group/filter rounded-full shadow-sm drop-shadow-sm overflow-auto" :class="{'opacity-30 ': ms.championSelect != 'All' && ms.championSelect != champion.champion.name}">

      <input
        v-model="ms.championSelect" class="peer hidden"
        type="radio"
        :value="champion.champion.name"
        name="match-champion-filter" />
<div class="overflow-hidden rounded-full">
              <LazyChampionIconFromName :name="champion.champion.name" class=" size-14" hydrate-on-visible />
              </div>
    </LazyLabel>
  </template>

  </transition-slide>
</div>
</div>
</template>

<style scoped></style>
