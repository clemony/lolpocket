<script setup lang="ts">
import type { RecordEntry, RecordEntryArrayItem } from "fuse.js"

const props = defineProps<{
  labels?: string[]
  data: any
  aria?: string
  overlap?: boolean
  class?: HTMLAttributes["class"]
  noTooltip?: boolean
}>()

const chartOptions = computed<any>(() => ({
  maintainAspectRatio: false,
  responsive: true,
  elements: {
    arc: {
      borderWidth: 0,
      hoverOffset: 4,
    },
  },
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      enabled: !props.noTooltip,
    },
  },
  scales: {
    r: {
      grid: {
        display: false,
      },
      ticks: {
        display: false,
      },
    },
  },
}))
</script>

<template>
  <PolarArea
    :data="props.data"
    :options="chartOptions"
    :aria-label="aria"
    role="img"
    :class="cn('max-h-200', props.class)" />
</template>
