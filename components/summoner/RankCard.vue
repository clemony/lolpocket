<script setup lang="ts">
import { summoner } from 'shared/data/summonerData'

const props = defineProps<{
  queue: string
  title?: string
  class?: HTMLAttributes['class']

}>()

const queue = computed(() => {
  const a = props.queue == 'soloDuo' ? summoner.ranks.soloDuo : summoner.ranks.flex
  return a
})
const winrate = computed(() => {
  return (queue.value.win / queue.value.games) * 100
})
const rank = ref(queue.value.rank)
console.log('💠 - rank:', rank)

const color1 = computed(() => {
  return getComputedStyle(document.documentElement).getPropertyValue(`--color-${rank.value}`)
})

const labels = ['Loss', 'Win']
const datasets = [
  {
    data: [100 - winrate.value, winrate.value],
  },
]

const colors = [getColorFromVariable('--color-b3'), color1.value]
</script>

<template>
  <div :class="cn('size-fit', props.class)">
    <p class="text-4 mt-2 ml-2 font-medium drop-shadow-sm ranked-title">
      {{ `Ranked ${props.title}` }}
    </p>

    <div class="ranked-grid relative grid grid-cols-[1.1fr_1fr_1fr] place-items-center">
      <div class="grid size-36 place-items-center">
        <img
          :src="`/img/crests/${queue.rank}.webp`"
          class="object-contain drop-shadow-lg"
        />
      </div>

      <div class="relative -mt-1">
        <Donut
          :datasets="datasets"
          :colors="colors"
          :labels="labels"
          type="gauge"
          aria="Recent winrate in percentage"
          class="size-24"
        />

        <span class="text-bc absolute top-9 left-8 font-medium drop-shadow-sm"> {{ winrate }}% </span>
      </div>

      <div class="-mt-1 flex flex-col justify-center gap-2 font-medium">
        <p class="capitalize">
          {{ `${queue.rank} ${queue.tier}` }}
        </p>

        <p>{{ queue.games }} Games</p>

        <div class="flex items-center gap-2">
          <p class="flex items-center text-nowrap">
            {{ queue.win }}W
            <icon
              name="ion:caret-up-outline"
              class="text-inspiration"
            />
          </p>
          <p class="flex items-center text-nowrap">
            {{ queue.loss }}L
            <icon
              name="ion:caret-down-outline"
              class="text-domination"
            />
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .radial-progress::after,
.radial-progress::before {
  color: var(--rankColor);
}
</style>
