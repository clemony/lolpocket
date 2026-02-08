<script lang="ts" setup>
const { rank, winrate } = defineProps<{
  winrate: number
  rank: string
}>()

const color1 = computed(() =>
  getComputedStyle(document.documentElement).getPropertyValue(`--color-${rank}`)
)

const data = computed(() => {
  return {
    datasets: [
      {
        label: 'Recent winrate in percentage',
        backgroundColor: [cssVar('--color-p3'), color1.value],
        data: [100 - winrate, winrate],
      },
    ],
    labels: ['Loss', 'Win'],
  }
})
</script>

<template>
  <Donut
    class="size-24"
    :data
    gauge
    aria-label="Recent winrate in percentage" />
</template>
