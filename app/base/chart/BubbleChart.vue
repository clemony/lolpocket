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

const data = computed(() => {
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
      img.src = `/img/items/circle/${point.itemId}.webp` // Ensure image path is correct

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
  clip: 30,
  drawActiveElementsOnTop: false,
  elements: {
    point: {
      hitRadius: 15,
    },
  },
  layout: {
    padding: {
      right: 30,
    },
  },
  maintainAspectRatio: false,
  plugins: {
    tooltip: {
      boxWidth: 2,
      boxHeight: 2,
      boxPadding: 14,
      callbacks: {
        beforeLabel: (context) => {},
        label: (context) => {
          const dataPoint = context.raw
          return `${dataPoint.label} - ${dataPoint.x} games, ${dataPoint.y.toFixed()}% wr`
        },
      },
      caretPadding: 20,
      enabled: true,
      intersect: false,
      padding: {
        bottom: 6,
        left: 2,
        right: 12,
        top: 6,
      },
      usePointStyle: true,
    },
  },
  responsive: true,
  scales: {
    x: {
      grid: {
        display: false,
      },
      title: {
        color: 'var(--text-bc)',
        display: true,
        text: 'Games Played',
      },
      border: {
        color: `${styles.getPropertyValue('--b2')}`,
      },
      ticks: {
        callback: value => Math.round(value),
        padding: 14,
        stepSize: 1, // Force whole number increments
      },
    },
    y: {
      grid: {
        color: `${styles.getPropertyValue('--b2')}`,
        drawTicks: false,
      },
      title: {
        color: 'var(--text-bc)',
        display: true,
        padding: { bottom: -16, left: 0, right: 0, top: 24 },
        text: 'Winrate',
      },
      border: {
        color: `${styles.getPropertyValue('--b2')}`,
      },
      grace: '20%',
      max: 100,
      min: 0,
      stepSize: 20,
      ticks: {
        callback(value, index, ticks) {
          return `${value}%`
        },
        display: true,
        font: {
          size: 11,
          weight: 500,
        },
        padding: 30,
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
