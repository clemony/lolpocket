<script setup lang="ts">
import type { ChartData, ChartOptions } from 'chart.js'
import {
  ArcElement,
  Chart,
  DoughnutController,
  RadialLinearScale,
  Tooltip,
} from 'chart.js'
import { Doughnut } from 'vue-chartjs'

const {
  class: className,
  cutout,
  data,
  gauge,
  noTooltip,
  overlap,
} = defineProps<{
  data: ChartData<'doughnut', number[], string>
  overlap?: boolean
  class?: HTMLAttributes['class']
  cutout?: string
  gauge?: boolean
  noTooltip?: boolean
}>()
Chart.defaults.datasets.doughnut.borderRadius = 100
Chart.defaults.datasets.doughnut.borderJoinStyle = 'round'
Chart.defaults.datasets.doughnut.hoverBorderWidth = 1

Chart.register(Tooltip, DoughnutController, ArcElement, RadialLinearScale)

const chartOptions = computed<ChartOptions<'doughnut'>>(() => ({
  cutout: cutout || '80%',
  elements: {
    arc: {
      backgroundColor: 'rgba(0,0,0,0)',
      borderColor: 'rgba(0,0,0,0)',
      hoverOffset: 1,
      roundedCornersFor: overlap ? 0 : null,
    },
  },
  plugins: {},
  responsive: true,
  spacing: gauge ? -4 : 2,
}))
</script>

<template>
  <Doughnut
    :data
    :options="chartOptions"
    :aria-label="data.labels"
    role="img"
    :class="className"
  />
</template>
