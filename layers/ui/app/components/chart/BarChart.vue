<script lang="ts" setup>
import {
  BarElement,
  CategoryScale,
  Chart,
  LinearScale,
  Title,
  Tooltip,
} from 'chart.js'
import { Bar } from 'vue-chartjs'

const props = defineProps<{
  data: any
  chartId?: string
}>()

const styles = getComputedStyle(document.documentElement)

Chart.register(Title, Tooltip, BarElement, CategoryScale, LinearScale)
Chart.defaults.color = styles.getPropertyValue('--colorneutral')
Chart.defaults.font.family = styles.getPropertyValue('--font-sans')
Chart.defaults.font.weight = 400
Chart.defaults.font.size = 16

const data = computed(() => {
  return props.data
})
const options = {
  color: styles.getPropertyValue('--colorneutral'),
  backgroundColor: styles.getPropertyValue('--colorneutral'),
  barThickness: 32,
  maintainAspectRatio: false,
  maxBarThickness: 32,
  minBarLength: 4,
  responsive: true,
  skipNull: false,
  elements: {
    bar: {
      borderRadius: 4,
      // barPercentage: 0.1,
      // categoryPercentage: 0.1,
    },
  },
  plugins: {
    tooltip: {
      titleMarginBottom: 0,
      caretPadding: 20,
      displayColors: false,
      enabled: true,
      intersect: false,
      callbacks: {
        label: (context) => {
          const dataPoint = context.raw
          return `${dataPoint.toFixed(2)}% winrate`
        },
      },
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
      title: {
        display: false,
      },
      border: {
        color: `${styles.getPropertyValue('--color-p2')}`,
      },
      ticks: {
        display: false,
      },
    },
    y: {
      grid: {
        // display: false,
        color: `${styles.getPropertyValue('--color-p2')}`,
        drawTicks: false,
      },
      beginAtZero: true,
      max: 100,
      min: 0,
      border: {
        color: `${styles.getPropertyValue('--color-p2')}`,
      },
      ticks: {
        callback(value, index, ticks) {
          return `${value}%`
        },
        display: true,
        padding: 12,
        stepSize: 20,
        font: {
          size: 16,
        },
      },
    },
  },
}
</script>

<template>
  <Bar
    :id="props.chartId"
    :options="options"
    :data="data" />
</template>
