<script lang="ts" setup>
import { Radar } from 'vue-chartjs'
import { Chart, Filler, LineElement, PointElement, RadarController, RadialLinearScale } from 'chart.js'

const { champion } = defineProps<{
  champion: Champion
}>()

Chart.register(RadarController, LineElement, PointElement, RadialLinearScale, Filler)

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
console.log('💠 - Object.values(champion.attributeRatings):', Object.values(champion.attributeRatings))
const data = {
  labels: normalizedKeys,
  datasets: [{
    label: 'My First Dataset',
    data: normalizedValues,

  }],
}

const options = {
  elements: {
    line: {
      borderWidth: 1,
      borderJoinStyle: 'round' as const,
      borderCapStyle: 'round' as const,
      fill: true,
      backgroundColor: 'rgba(0, 0, 0, 0.6)',
      borderColor: 'rgb(0, 0, 0)',
      tension: 0.3,
    },

    point: {
      pointBackgroundColor: '#000',
      borderColor: '#000',
      pointRadius: 1,
      pointHoverBackgroundColor: '#000',
      pointHoverBorderColor: 'rgb(255, 99, 132)',
    },
  },
  scales: {
    r: {
      backgroundColor: `color-mix(in oklch, ${getColorFromVariable('--color-b3')} 40%, #00000000 60%)`,
      angleLines: {
        display: false,
      },
      grid: {
        display: false,
      },
      ticks: {
        display: false,
      },
      title: {
        align: 'start',
      },
      pointLabels: {
        font: {
          weight: 'bold' as const,
        },
      },
    },
  },
}
</script>

<template>
  <Field class="w-84 bg-b3/30 m-0 relative !pb-0 pt-6 justify-self-center">
    <div class="absolute top-5 text-3 tracking-tight left-6 text-bc/50 font-bold drop-shadow-sm">
      Champion Attributes
    </div>
    <Radar :data="data" :options="options" class="drop-shadow-sm" />
  </Field>
</template>