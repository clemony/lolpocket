<script setup lang="ts">
import type { ChartData, ChartOptions } from 'chart.js'
import {
  ArcElement,
  Chart,
  PolarAreaController,
  RadialLinearScale,
  Tooltip,
} from 'chart.js'
import { PolarArea } from 'vue-chartjs'

const props = defineProps<{
  labels?: string[]
  data: ChartData<'polarArea', number[], string>
  aria?: string
  overlap?: boolean
  class?: HTMLAttributes['class']
  noTooltip?: boolean
}>()

Chart.register(PolarAreaController, ArcElement, RadialLinearScale, Tooltip)

const chartOptions = computed<ChartOptions<'polarArea'>>(() => ({
  elements: {
    arc: {
      borderWidth: 0,
      hoverOffset: 4,
    },
  },
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      enabled: !props.noTooltip,
    },
  },
  responsive: true,
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
    :class="cn('max-h-200', props.class)"
  />
</template>
