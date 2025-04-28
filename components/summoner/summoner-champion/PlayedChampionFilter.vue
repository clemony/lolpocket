<script setup lang="ts">
const { summoner } = defineProps<{
  summoner: Summoner
}>()

const ms = useMatchStore()

const { bayesianChampions } = useMatchChampions(computed (() => ms.queueSelect), summoner.puuid, computed (() => summoner.simplifiedMatches))
</script>

<template>
  <div class="w-full h-full">
    <div class="flex items-center mb-2  -ml-1">
      <FilterLabel v-model="ms.championSelect" :active="ms.championSelect != 'All'" @click="ms.championSelect = 'All'">
        {{ ms.championSelect != 'All' ? ms.championSelect : 'Champions' }}
      </filterlabel>
    </div>

    <div class="w-full  h-90  overflow-y-scroll  relative tldr-30 delay-600 justify-start ">
      <transition-slide as="div" group class="grid grid-cols-5 absolute grid-flow-col auto-rows-max overflow-auto inset-0 top-0 left-0 scroll-smoot w-full  px-1 items-start gap-3 no-scrollbar">
        <template
          v-for="champion in bayesianChampions"
          :key="champion.champion.id">
          <LazyLabel
            v-if="ms.championSelect == 'All' || ms.championSelect != 'All' && ms.championSelect == champion.champion.name" v-tippy="champion.champion.name"
            class="size-full aspect-square cursor-pointer border border-b3  relative grid place-items-center group/filter rounded-xl shadow-warm-2 drop-shadow-sm overflow-auto" :class="{ 'opacity-30 ': ms.championSelect != 'All' && ms.championSelect != champion.champion.name }">
            <input
              v-model="ms.championSelect" class="peer hidden"
              type="radio"
              :value="champion.champion.name"
              name="match-champion-filter" />

            <div class="overflow-hidden size-full rounded-xl inset-shadow-sm">
              <LazyImage :image="`/img/champion/${champion.champion.id}.webp`" :alt="champion.champion.name" class="scale-116 size-full" />
            </div>
          </LazyLabel>
        </template>
      </transition-slide>
    </div>
  </div>
</template>

<style scoped></style>
