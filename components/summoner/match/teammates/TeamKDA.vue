<script lang="ts" setup>
const props = defineProps<{
  team: any
  class?: HTMLAttributes['class']
}>()

const team = computed (() => {
  return props.team
})
const kills = computed (() => {
  const a = team.value.map(p => p.kills)
  return a.reduce((partialSum, a) => partialSum + a, 0)
})

const deaths = computed (() => {
  const a = team.value.map(p => p.deaths)
  return a.reduce((partialSum, a) => partialSum + a, 0)
})

const assists = computed (() => {
  const a = team.value.map(p => p.assists)
  return a.reduce((partialSum, a) => partialSum + a, 0)
})

const math = computed (() => {
  return Math.round((kills.value + assists.value) / deaths.value * 100)
})
</script>

<template>
  <div class="" :class="cn('flex gap-6 pb-2 h-full justify-items-start items-center', props.class)">
    <p class="text-4 flex font-semibold  items-center tracking-wide">
      <span>{{ kills }}</span>/<span class="text-red-700">{{ deaths }}</span>/<span>{{ assists }}</span>
    </p>
    <p class="text-3 text-bc/80  pb-0.25  font-medium items-center">
      {{ math / 100 }}:1 <span class="font-mono ">KDA</span>
    </p>
  </div>
</template>