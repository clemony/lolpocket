<script setup lang="ts">
import { nextTick, onMounted, ref, watch } from 'vue'
import { Bar } from 'vue-chartjs'
import { BarElement, CategoryScale, Chart as ChartJS, LinearScale, Title, Tooltip } from 'chart.js'

const { champions } = defineProps<{
  champions: any
}>()

const styles = getComputedStyle(document.documentElement)
ChartJS.defaults.color = styles.getPropertyValue('--color-neutral')
ChartJS.defaults.font.weight = 400
ChartJS.defaults.scale.grid.color = getColorFromVariable('--color-b3')

ChartJS.register(Title, Tooltip, BarElement, CategoryScale, LinearScale)

const data = computed(() => ({
  labels: champions.map(c => c.champion ?? ''),
  datasets: [{
    data: champions.map(c => c.winrate ?? 0),
  }],
}))

const chartRef = ref<any>(null)
const imagePositions = ref<{ x: number, label: string }[]>([])

const options = {
  layout: {
    padding: {
      right: 20,
      left: 10,
      top: 40,
      bottom: 60,
    },
  },
  backgroundColor: getColorFromVariable('--color-neutral'),
  color: getColorFromVariable('--color-neutral'),
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
        drawTicks: false,
      },
      min: 0,
      max: 100,
      ticks: {
        display: true,
        font: {
          size: 11,
        },

        stepSize: 20,
        callback(value, index, ticks) {
          return `${value}%`
        },
        padding: 12,
      },
      border: {
        color: `${getColorFromVariable('--color-b2')}`,
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
        color: `${getColorFromVariable('--color-b2')}`,
      },
      title: {
        display: false,
      },
    },
  },
  plugins: {
    tooltip: {

      displayColors: false,
      caretPadding: 20,
      bodySpacing: -5,
      footerSpacing: 0,
      titleFont: {
        size: 16,
      },
      bodyFont: {
        size: 14,
      },
      titleSpacing: 0,
      titleMarginBottom: -3,
      intersect: false,
      cornerRadius: 10,
      padding: 10,
      enabled: true,
      callbacks: {
        label: (context) => {
          const index = context.dataIndex
          const champion = champions[index]
          const winrate = champion.winrate

          return [
            ` ${winrate.toFixed(0)}%　winrate`,
            ` ${champion.kda ?? 'N/A'} 　kda`,
            ` ${Math.round(champion.avgKp) ?? 'N/A'}% 　kp`,
          ]
        },
        title: (context) => {
          const index = context[0].dataIndex
          const champion = champions[index]
          const games = champion.games ?? 0
          const name = champion.champion ?? ''
          return [`${name} - ${games} played`]
        },
      },
    },
  },
}

// calculate image positions after chart is rendered
function calculateImagePositions() {
  nextTick(() => {
    const chart = chartRef.value?.chart
    if (!chart)
      return
    const xScale = chart.scales.x
    if (!xScale)
      return

    imagePositions.value = data.value.labels.map((label) => {
      console.log('💠 - nextTick - label:', label)
      return { x: xScale.getPixelForValue(label), label }
    })
  })
}

// Recalculate positions when data updates
watch(() => data.value, calculateImagePositions, { deep: true })

onMounted(() => {
  calculateImagePositions()
})
</script>

<template>
  <div class="relative  border-shadow-sm  pt-4 grid place-items-center h-150 min-h-150 w-210 ">
    <Bar id="championAnalysis" ref="chartRef" :options="options" :data="data" />

    <!-- Overlay images using absolute positioning -->
    <div
      v-for="(pos, idx) in imagePositions" :key="idx"
      class="absolute shadow-sm drop-shadow-sm bottom-9"
      :style="{
        left: `${pos.x - 16}px`,
        width: '32px',
        height: '32px',
      }">
      <div class="size-[32px] rounded-lg overflow-hidden">
        <ChampionIcon :id="champions[idx].championId"
          :alt="pos.label"
          class="size-full scale-115" />
      </div>
    </div>
  </div>
</template>