<script setup lang="ts">
import type { ChartData, ChartOptions } from 'chart.js'
import type { HTMLAttributes } from 'vue'
import { growth } from '@lolmath/calc'
import { BarController, BarElement, CategoryScale, Chart, LinearScale } from 'chart.js'
import ChartjsPluginStacked100 from 'chartjs-plugin-stacked100'
import { Bar } from 'vue-chartjs'

const props = defineProps<{
  champion: Champion
  stat: any
  lvl: any
  class?: HTMLAttributes['class']
}>()

Chart.register(ChartjsPluginStacked100, BarElement, BarController, CategoryScale, LinearScale)

const stat = ref(props.stat)
const lvl = ref(props.lvl)
const champion = ref(props.champion)

onMounted(async () => {
  await props.stat, props.lvl, (stat.value = props.stat), base.value, perLvl.value, growthVal.value, statVal.value
})

const champStats = Object.entries(champion.value.stats)

const base = computed(() => {
  if (!stat.value.stats[0].id || stat.value.stats[0].id == undefined) {
    return
  }
  const a = champStats.find(key => key[0] == stat.value.stats[0].id)
  return a[1] as number
})
// console.log('💠 - base - base:', base.value);

const perLvl = computed(() => {
  if (!stat.value.stats[1].id || stat.value.stats[1].id == undefined) {
    return
  }
  const a = champStats.find(key => key[0] == stat.value.stats[1].id)

  return a ? (a[1] as number) : null
})

const asRatio = computed(() => {
  if (stat.value.name != 'Attack Speed') {

  }
  else {
    const a = champStats.find(key => key[0] == stat.value.stats[2].id)
    return a ? (a[1] as number) : null
  }
})

const growthVal = computed(() => {
  return growth(props.lvl)
})
const statVal = computed(() => {
  return base.value + growthVal.value * perLvl.value
})

const statMin = computed(() => {
  return base.value + growth(1) * perLvl.value
})
// console.log('💠 - statMin - statMin:', statMin.value);

const statMax = computed(() => {
  return base.value + growth(18) * perLvl.value
})

const chart = ref()
function updateData(chart) {
  chart.update()
}

watch(
  () => statVal.value,
  (newVal) => {
    updateData(chart.value.chart)
  },
)

const abc = computed(() => {
  return statMax.value - statVal.value
})
// console.log('💠 - abc - abc:', abc.value);
/* CHART */

const color1 = computed(() => {
  return 'oklch(76.93% 0.0494 204.19)'
})

const chartData: ChartData<'bar'> = {
  labels: [''],
  datasets: [
    {
      backgroundColor: ['black'],

      data: [statVal.value],
    },

    {
      backgroundColor: [getColorFromVariable('--color-b3')],
      data: [statMax.value - statVal.value],
    },
  ],
}
const chartOptions: ChartOptions<'bar'> = {
  indexAxis: 'y',
  responsive: false,
  datasets: {
    bar: {
      barPercentage: 1,
      barThickness: 6,
      borderWidth: 1,
      borderRadius: 6,
      pointStyle: false,
      xAxisID: 'x',
      yAxisID: 'y',
    },
  },
  scales: {
    x: {
      type: 'linear',
      min: statMin.value,
      max: statMax.value,
      stacked: true,
      display: false,
      grid: {
        display: false,
      },
      ticks: {
        display: false,
      },
    },
    y: {
      display: false,
      grid: {
        display: false,
      },
    },
  },
  plugins: {
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
  <div :class="cn('w-full overflow-hidden', props.class)">
    <div class="text-3 flex items-end leading-none tracking-tight">
      <span class="grow font-medium">{{ stat.name }}</span>
      <span
        v-if="stat.name == 'Attack Speed'"
        class="text-bc/60"
      >
        {{ asRatio.toFixed(2) }} Ratio
      </span>
    </div>

    <div class="h-5 w-[140px]">
      <Bar
        ref="chart"
        :data="chartData"
        :options="chartOptions"
        class="object-center"
        height="20px"
        width="140px"
        aria-label="stat chart"
        role="img"
      />
    </div>

    <div class="flex h-8 items-end gap-2 overflow-hidden leading-none">
      <span class="text-7 drop-shadow-text font-bold">
        {{ statVal.toFixed(2) }}
      </span>
      <span class="text-2 !text-bc/60 mb-0.5 grow font-medium tracking-tight"> + {{ perLvl }}/lvl </span>
      <img
        :src="stat.img"
        class="invert-light mb-1 size-5 justify-self-end opacity-80 drop-shadow-xs"
      />
    </div>
  </div>
</template>

<style scoped></style>
