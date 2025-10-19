<script lang="ts" setup>
const props = defineProps<{
  winrate: number
  rank: string
}>()

const winrate = computed(() => {
  return props.winrate
})

const rank = computed(() => {
  return props.rank
})

const labels = ['Loss', 'Win']
const datasets = [
  {
    data: [100 - winrate.value, winrate.value],
  },
]
const color1 = computed(() => {
  return getComputedStyle(document.documentElement).getPropertyValue(
    `--color-${rank.value}`
  )
})
const colors = [getColorFromVariable('--color-b3'), color1.value]
</script>

<template>
  <Donut
    :datasets="datasets"
    :colors="colors"
    :labels="labels"
    type="gauge"
    aria="Recent winrate in percentage"
    class="size-24" />
</template>
