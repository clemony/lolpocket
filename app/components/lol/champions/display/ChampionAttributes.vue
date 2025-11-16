<script lang="ts" setup>
import {
  Chart,
  Filler,
  LineElement,
  PointElement,
  RadarController,
  RadialLinearScale,
} from 'chart.js'
import { Radar } from 'vue-chartjs'

const { champion } = defineProps<{
  champion: Champion
}>()

Chart.register(
  RadarController,
  LineElement,
  PointElement,
  RadialLinearScale,
  Filler,
)

const rawKeys = Object.keys(champion.attributeRatings)
const normalizedKeys = rawKeys.map((val, index) => {
  if (index === 5)
    return ['Ability', 'Reliance']
  return val.charAt(0).toUpperCase() + val.slice(1)
})
const rawValues = Object.values(champion.attributeRatings)
const normalizedValues = rawValues.map((val, index) => {
  if (index !== 5)
    return val

  if (val < 20)
    return 0
  if (val < 50)
    return 1
  if (val < 70)
    return 2
  return 3
})
console.log(
  '💠 - Object.values(champion.attributeRatings):',
  Object.values(champion.attributeRatings),
)
const data = {
  datasets: [
    {
      data: normalizedValues,
      label: 'My First Dataset',
    },
  ],
  labels: normalizedKeys,
}

const options = {
  elements: {
    line: {
      borderWidth: 1,
      backgroundColor: 'rgba(0, 0, 0, 0.6)',
      borderCapStyle: 'round' as const,
      borderColor: 'rgb(0, 0, 0)',
      borderJoinStyle: 'round' as const,
      fill: 'origin',
      spanGaps: true,
      tension: 0.1,
    },
    point: {
      borderColor: '#000',
      pointBackgroundColor: '#000',
      pointHoverBackgroundColor: '#000',
      pointHoverBorderColor: 'rgb(255, 99, 132)',
      pointRadius: 1,
    },
  },
  plugins: {
    filler: {
      propagate: true,
    },
  },
  scales: {
    r: {
      grid: {
        display: false,
      },
      title: {
        align: 'start',
      },
      angleLines: {
        display: false,
      },
      backgroundColor: `color-mix(in oklch, ${getColorFromVariable('--color-b3')} 40%, #00000000 60%)`,
      beginAtZero: true,
      pointLabels: {
        font: {
          weight: 'bold' as const,
        },
      },
      ticks: {
        display: false,
      },
    },
  },
}
</script>

<template>
  <div class="relative m-0 w-full justify-self-center bg-b3/30 pt-6 pb-0!">
    <div
      class="
        absolute top-5 left-6 text-3 font-bold tracking-tight text-bc/50
        drop-shadow-sm
      ">
      Champion Attributes
    </div>

    <Radar
      :data="data"
      :options="options"
      class="drop-shadow-sm" />
  </div>
</template>
