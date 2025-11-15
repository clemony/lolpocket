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
  backgroundColor: styles.getPropertyValue('--colorneutral'),
  barThickness: 32,
  color: styles.getPropertyValue('--colorneutral'),
  elements: {
    bar: {
      borderRadius: 4,
      // barPercentage: 0.1,
      // categoryPercentage: 0.1,
    },
  },
  maintainAspectRatio: false,
  maxBarThickness: 32,
  minBarLength: 4,
  plugins: {
    tooltip: {
      titleMarginBottom: 0,
      callbacks: {
        label: (context) => {
          const dataPoint = context.raw
          return `${dataPoint.toFixed(2)}% winrate`
        },
      },
      caretPadding: 20,
      displayColors: false,
      enabled: true,
      intersect: false,
    },
  },
  responsive: true,
  scales: {
    x: {
      grid: {
        display: false,
      },
      title: {
        display: false,
      },
      border: {
        color: `${styles.getPropertyValue('--color-b2')}`,
      },
      ticks: {
        display: false,
      },
    },
    y: {
      grid: {
        // display: false,
        color: `${styles.getPropertyValue('--color-b2')}`,
        drawTicks: false,
      },
      beginAtZero: true,
      border: {
        color: `${styles.getPropertyValue('--color-b2')}`,
      },
      max: 100,
      min: 0,
      ticks: {
        callback(value, index, ticks) {
          return `${value}%`
        },
        display: true,
        font: {
          size: 16,
        },
        padding: 12,
        stepSize: 20,
      },
    },
  },
  skipNull: false,
}
</script>

<template>
  <Bar
    :id="props.chartId"
    :options="options"
    :data="data" />
</template>
