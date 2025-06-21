<script lang="ts" setup>
import { Bar } from 'vue-chartjs'
import { BarElement, CategoryScale, Chart, LinearScale, Title, Tooltip } from 'chart.js'

const props = defineProps<{
  data: any
  chartId?: string
}>()

const styles = getComputedStyle(document.documentElement)

Chart.register(Title, Tooltip, BarElement, CategoryScale, LinearScale)
Chart.defaults.color = styles.getPropertyValue('--color-neutral')
Chart.defaults.font.family = styles.getPropertyValue('--font-sans')
Chart.defaults.font.weight = 400
Chart.defaults.font.size = 16

const data = computed (() => {
  return props.data
})
const options = {
  backgroundColor: styles.getPropertyValue('--color-neutral'),
  color: styles.getPropertyValue('--color-neutral'),
  maxBarThickness: 32,
  barThickness: 32,
  responsive: true,
  maintainAspectRatio: false,
  skipNull: false,
  minBarLength: 4,
  elements: {
    bar: {
      borderRadius: 4,
      // barPercentage: 0.1,
      // categoryPercentage: 0.1,
    },
  },
  scales: {
    y: {
      beginAtZero: true,
      grid: {
        // display: false,
        color: `${styles.getPropertyValue('--color-b2')}`,
        drawTicks: false,
      },
      min: 0,
      max: 100,
      ticks: {
        display: true,
        font: {
          size: 16,
        },

        stepSize: 20,
        callback(value, index, ticks) {
          return `${value}%`
        },
        padding: 12,
      },
      border: {
        color: `${styles.getPropertyValue('--color-b2')}`,
      },
    },
    x: {
      grid: {
        display: false,
      },
      ticks: {
        display: false,
      },
      border: {
        color: `${styles.getPropertyValue('--color-b2')}`,
      },
      title: {
        display: false,
      },
    },
  },
  plugins: {
    tooltip: {

      titleMarginBottom: 0,
      displayColors: false,
      caretPadding: 20,
      intersect: false,
      enabled: true,
      callbacks: {
        label: (context) => {
          const dataPoint = context.raw
          return `${dataPoint.toFixed(2)}% winrate`
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