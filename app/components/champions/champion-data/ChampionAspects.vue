<script setup lang="ts">
import { Chart, Filler, LineElement, PointElement, RadarController, RadialLinearScale, Tooltip } from 'chart.js'
import { Radar } from 'vue-chartjs'

const cs = useChampStore()

Chart.register(Tooltip, RadarController, RadialLinearScale, LineElement, PointElement, Filler)
const c = ref(cs.selectedChampion)

const cdata = [c.value.control, c.value.damage, c.value.mobility, c.value.toughness, c.value.utility]

function createRadialGradient3(context) {
  const chartArea = context.chart.chartArea
  if (!chartArea) {
    // This case happens on initial chart load
    return
  }
  const chartWidth = chartArea.right - chartArea.left
  const chartHeight = chartArea.bottom - chartArea.top

  const centerX = (chartArea.left + chartArea.right) / 2
  const centerY = (chartArea.top + chartArea.bottom) / 2

  const ctx = context.chart.ctx

  const gradient = ctx.createConicGradient(-1.0472, centerX, centerY)

  // The pattern is 30 degrees of blend between quadrants
  // 60 degrees of pure color in the quadrant
  gradient.addColorStop(0, '#be86b5') // blue
  gradient.addColorStop(0.23, '#bf616a') // blue
  gradient.addColorStop(0.41667, '#ebcb8b') // orange
  gradient.addColorStop(0.6, '#8fbec3') // turqoise
  gradient.addColorStop(0.9, '#be86b5') // turqoise

  // Set the fill style and draw a rectangle
  ctx.fillStyle = gradient
  ctx.fillRect(chartArea.left, chartArea.top, chartWidth, chartHeight)

  return gradient
}

const data = {
  labels: ['Control', 'Damage', 'Mobility', 'Toughness', 'Utility'],
  datasets: [
    {
      data: cdata,
      fill: 'origin',
      borderColor: 'transparent',
      pointBackgroundColor: 'transparent',
      pointBorderColor: 'transparent',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgb(255, 99, 132)',
      backgroundColor(context) {
        return createRadialGradient3(context)
      },
    },
  ],
}

const options = {
  fill: 'origin',
  scales: {
    r: {
      angleLines: {
        display: false,
      },
      ticks: {
        display: false,
      },
      grid: {
        display: false,
      },
    },
  },
  elements: {
    fill: true,
    line: {
      borderWidth: 1,
      fill: true,
      spanGaps: true,
    },
  },
}
</script>

<template>
  <!-- Pass data and options separately -->
  <Radar
    :data="data"
    :options="options" />
</template>

<style scoped></style>
