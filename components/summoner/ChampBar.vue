<script setup lang="ts">
import { Chart, type ChartData, type ChartOptions } from 'chart.js'
import ChartjsPluginStacked100 from 'chartjs-plugin-stacked100'
import { externalTooltip } from 'plugins/chartJS/externalTooltip'

import { Bar } from 'vue-chartjs'

const props = defineProps<{
  champion: any
}>()

Chart.register(ChartjsPluginStacked100)

const as = useAccountStore()
const a = computed(() => {
  return (props.champion.wins / props.champion.games) * 100
})
const b = computed(() => {
  return 100 - a.value
})

const color1 = computed(() => {
  return 'oklch(76.93% 0.0494 204.19)'
})

const chartData: ChartData<'bar'> = {
  labels: [''],
  datasets: [
    {
      backgroundColor: [color1.value],
      hoverBorderColor: [color1.value],

      borderColor: [color1.value],
      data: [a.value],
    },
    {
      backgroundColor: ['oklch(60.61% 0.1206 15.34)'],
      hoverBorderColor: ['oklch(60.61% 0.1206 15.34)'],

      borderColor: ['oklch(60.61% 0.1206 15.34)'],
      data: [b.value],
    },
  ],
}
const chartOptions: ChartOptions<'bar'> = {
  indexAxis: 'y',
  responsive: false,
  datasets: {
    bar: {
      barPercentage: 1,
      hoverBorderWidth: 1,
      borderColor: 'transparent',
      borderSkipped: true,

      xAxisID: '',
      yAxisID: '',
      pointStyle: false,
      borderRadius: 6,
    },
  },
  scales: {
    x: {
      stacked: true,
      grid: {
        display: false,
      },
    },
    y: {
      grid: {
        display: false,
      },
    },
  },
  plugins: {
    tooltip: {
      enabled: false,
      external: externalTooltip,
    },
    legend: {
      display: false,
    },
    stacked100: {
      enable: true,
      replaceTooltipLabel: false,
      precision: 3,
    },
  },
}
</script>

<template>
  <div class="relative -mt-1 flex w-[90%] items-center justify-center overflow-hidden rounded-lg p-0">
    <div class="h-7 w-full overflow-hidden rounded-lg">
      <Bar
        :data="chartData"
        :options="chartOptions"
        class="-mt-13 -ml-4.5 !h-50 w-31"
      />
    </div>
  </div>
</template>

<style scoped></style>
