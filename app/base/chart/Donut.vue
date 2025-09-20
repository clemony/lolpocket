<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import {
  ArcElement,
  CategoryScale,
  Chart,
  DoughnutController,
  Tooltip,
} from 'chart.js'
import { Doughnut } from 'vue-chartjs'

const props = defineProps<{
  labels?: Array<string>
  datasets: any
  colors: Array<string>
  aria?: string
  overlap?: boolean
  class?: HTMLAttributes['class']
  type?: string
  cutout?: string
  noTooltip?: boolean
}>()
Chart.defaults.datasets.doughnut.borderRadius = 100
Chart.defaults.datasets.doughnut.borderJoinStyle = 'round'
Chart.defaults.datasets.doughnut.hoverBorderWidth = 1

Chart.register(Tooltip, DoughnutController, ArcElement)

const chartData = computed(() => ({
  datasets: props.datasets,
  labels: props.labels,
  options: {
    cutout: props.cutout ? props.cutout : '80%',
    elements: {
      arc: {
        backgroundColor: props.colors,
        borderColor: 'rgba(0,0,0,0)',
        hoverOffset: 1,
        roundedCornersFor: props.overlap ? 0 : null,
      },
    },
    plugins: {
      tooltip: {
        enabled: false,
      },
    },
    spacing: props.type === 'gauge' ? -4 : 2,
  },
  type: 'doughnut',
}))
</script>

<template>
  <Doughnut
    :data="chartData"
    :options="chartData.options"
    :aria-label="props.aria"
    role="img"
    :class="props.class" />
</template>
