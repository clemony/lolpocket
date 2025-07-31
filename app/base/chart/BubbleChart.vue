<script lang="ts" setup>
import {
  CategoryScale,
  Chart as ChartJS,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
} from 'chart.js'
import { Bubble } from 'vue-chartjs'

// Define props for the chart
const props = defineProps<{
  data: any
}>()

// Register necessary Chart.js components
ChartJS.register(Title, Tooltip, PointElement, LinearScale, CategoryScale)

const styles = getComputedStyle(document.documentElement)

const data = computed (() => {
  return props.data
})

const customPlugin = {
  id: 'customImages',
  afterDraw(chart) {
    const ctx = chart.ctx
    const dataset = chart.data.datasets[0]

    dataset.data.forEach((point, index) => {
      const meta = chart.getDatasetMeta(0)
      const x = meta.data[index].x
      const y = meta.data[index].y
      const radius = point.r || 20 // Adjust the size of the image

      const img = new Image()
      img.src = `/img/item/circle/${point.itemId}.webp` // Ensure image path is correct

      img.onload = () => {
        ctx.save()

        // Draw the image directly centered at (x, y) with the specified radius
        ctx.drawImage(img, x - radius, y - radius, radius * 2, radius * 2) // Use radius for circular fit

        ctx.restore()
      }
    })
  },
}

const options = {
  responsive: true,
  clip: 30,
  layout: {
    padding: {
      right: 30,
    },
  },
  drawActiveElementsOnTop: false,
  maintainAspectRatio: false,
  elements: {
    point: {
      hitRadius: 15,

    },
  },
  scales: {
    y: {
      grace: '20%',
      grid: {
        color: `${styles.getPropertyValue('--b2')}`,
        drawTicks: false,
      },
      title: {
        display: true,
        text: 'Winrate',
        color: 'var(--text-bc)',
        padding: { top: 24, left: 0, right: 0, bottom: -16 },
      },
      stepSize: 20,
      min: 0,
      max: 100,
      ticks: {
        display: true,
        padding: 30,
        callback(value, index, ticks) {
          return `${value}%`
        },
        font: {
          size: 11,
          weight: 500,
        },
      },
      border: {
        color: `${styles.getPropertyValue('--b2')}`,
      },
    },
    x: {
      title: {
        display: true,
        text: 'Games Played',
        color: 'var(--text-bc)',
      },
      ticks: {
        stepSize: 1, // Force whole number increments
        callback: value => Math.round(value),
        padding: 14,

      },
      grid: {
        display: false,
      },

      border: {
        color: `${styles.getPropertyValue('--b2')}`,
      },
    },
  },
  plugins: {
    tooltip: {
      padding: {
        left: 2,
        right: 12,
        top: 6,
        bottom: 6,
      },
      caretPadding: 20,
      intersect: false,
      usePointStyle: true,
      boxHeight: 2,
      boxWidth: 2,
      boxPadding: 14,
      enabled: true,
      callbacks: {

        label: (context) => {
          const dataPoint = context.raw
          return `${dataPoint.label} - ${dataPoint.x} games, ${dataPoint.y.toFixed()}% wr`
        },
        beforeLabel: (context) => {

        },
      },
    },
  },
}
</script>

<template>
  <Bubble
    :data="data"
    :options="options"
    :plugins="[customPlugin]" />
</template>