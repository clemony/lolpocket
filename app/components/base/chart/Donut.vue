<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { ArcElement, CategoryScale, Chart, DoughnutController, Tooltip } from 'chart.js'
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
  type: 'doughnut',
  labels: props.labels,
  datasets: props.datasets,
  options: {
    spacing: props.type == 'gauge' ? -4 : 2,
    plugins: {
      tooltip: {
        enabled: false,
      },
    },
    elements: {
      arc: {
        borderColor: 'rgba(0,0,0,0)',
        backgroundColor: props.colors,
        hoverOffset: 1,
        roundedCornersFor: props.overlap ? 0 : null,
      },
    },
    cutout: props.cutout ? props.cutout : '80%',
  },
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
