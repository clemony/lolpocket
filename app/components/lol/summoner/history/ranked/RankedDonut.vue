<script lang="ts" setup>
const { rank, winrate } = defineProps<{
  winrate: number
  rank: string
}>()

const color1 = computed(() => getComputedStyle(document.documentElement).getPropertyValue(
  `--color-${rank}`,
))

const data = computed(() => {
  return {
    datasets: [{ backgroundColor: [
      cssVar('--color-b3'),
      color1.value
    ], data: [100 - winrate, winrate], label: 'Recent winrate in percentage' }],
    labels: ['Loss', 'Win']
  }
})
</script>

<template>
  <Donut
    :data
    gauge
    aria-label="Recent winrate in percentage"
    class="size-24" />
</template>
