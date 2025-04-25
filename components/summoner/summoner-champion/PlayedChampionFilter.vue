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

function handleReset() {
  ms.championSelect = 'All'
}

const { bayesianChampions } = useMatchChampions(computed (() => ms.queueSelect))
console.log('💠 - bayesianChampions:', bayesianChampions)
</script>

<template>
  <div class="w-full h-full">
    <div class="flex items-center mb-2  -ml-1">
      <label :class="{ 'pointer-events-none': ms.championSelect == 'All' }" class="btn btn-sm gap-2 font-medium rounded-lg px-2.5 place-self-center text-3  btn-ghost" @click="ms.championSelect = 'All'">
        <input
          v-model="ms.championSelect"
          class="peer hidden"
          aria-label="All"
          name="match-champion-filter"
          value="All" />
        {{ ms.championSelect != 'All' ? ms.championSelect : 'Champions' }}

        <icon v-if="ms.championSelect != 'All'" name="x-sm" class=" shrink-0 -mt-px" />

      </label>
    </div>

  
    <div class="w-full  h-90  overflow-y-scroll  relative tldr-30 delay-600 justify-start ">
      <transition-slide as="div" group class="flex flex-wrap absolute overflow-auto inset-0 top-0 left-0 scroll-smooth start px-2 items-start gap-x-3 no-scrollbar">
        <template
          v-for="champion in bayesianChampions"
          :key="champion.champion.id">
          <LazyLabel
            v-if="ms.championSelect == 'All' || ms.championSelect != 'All' && ms.championSelect == champion.champion.name" v-tippy="champion.champion.name"
            class="size-14 cursor-pointer border border-b3 relative grid place-items-center group/filter rounded-lg shadow-sm drop-shadow-sm overflow-auto" :class="{ 'opacity-30 ': ms.championSelect != 'All' && ms.championSelect != champion.champion.name }">
            <input
              v-model="ms.championSelect" class="peer hidden"
              type="radio"
              :value="champion.champion.name"
              name="match-champion-filter" />

            <div class="overflow-hidden rounded-lg inset-shadow-sm">
              <LazyChampionIconFromName :name="champion.champion.name" class=" size-14" hydrate-on-visible />
            </div>
          </LazyLabel>
        </template>

      </transition-slide>
    </div>
  </div>
</template>

<style scoped></style>
