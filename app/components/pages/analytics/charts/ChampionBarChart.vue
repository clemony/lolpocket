<script setup lang="ts">
import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  LinearScale,
  Title,
  Tooltip,
} from 'chart.js'
import { nextTick, onMounted, ref, watch } from 'vue'
import { Bar } from 'vue-chartjs'

const { champions } = defineProps<{
  champions: any
}>()

const styles = getComputedStyle(document.documentElement)
ChartJS.defaults.color = styles.getPropertyValue('--colorneutral')
ChartJS.defaults.font.weight = 400
ChartJS.defaults.scale.grid.color = getColorFromVariable('--color-b3')

ChartJS.register(Title, Tooltip, BarElement, CategoryScale, LinearScale)

const data = computed(() => ({
  datasets: [
    {
      data: champions.map(c => c.winrate ?? 0),
    },
  ],
  labels: champions.map(c => c.champion ?? ''),
}))

const chartRef = ref<any>(null)
const imagePositions = ref<{ x: number, label: string }[]>([])

const options = {
  backgroundColor: getColorFromVariable('--colorneutral'),
  barThickness: 32,
  color: getColorFromVariable('--colorneutral'),
  elements: {
    bar: {
      borderRadius: 4,
      // barPercentage: 0.1,
      // categoryPercentage: 0.1,
    },
  },
  layout: {
    padding: {
      bottom: 60,
      left: 10,
      right: 20,
      top: 40,
    },
  },
  maintainAspectRatio: false,
  maxBarThickness: 32,
  minBarLength: 4,
  plugins: {
    tooltip: {
      titleFont: {
        size: 16,
      },
      titleMarginBottom: -3,
      titleSpacing: 0,
      bodyFont: {
        size: 14,
      },
      bodySpacing: -5,
      callbacks: {
        title: (context) => {
          const index = context[0].dataIndex
          const champion = champions[index]
          const games = champion.games ?? 0
          const name = champion.champion ?? ''
          return [`${name} - ${games} played`]
        },
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
      },
      caretPadding: 20,
      cornerRadius: 10,
      displayColors: false,
      enabled: true,
      footerSpacing: 0,
      intersect: false,
      padding: 10,
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
        color: `${getColorFromVariable('--color-b2')}`,
      },
      ticks: {
        display: false,
      },
    },
    y: {
      grid: {
        drawTicks: false,
      },
      beginAtZero: true,
      border: {
        color: `${getColorFromVariable('--color-b2')}`,
      },
      max: 100,
      min: 0,
      ticks: {
        callback(value, index, ticks) {
          return `${value}%`
        },
        display: true,
        font: {
          size: 11,
        },
        padding: 12,
        stepSize: 20,
      },
    },
  },
  skipNull: false,
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
      return { label, x: xScale.getPixelForValue(label) }
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
  <div
    class="relative border-shadow-sm pt-4 grid place-items-center h-150 min-h-150 w-210">
    <Bar
      id="championAnalysis"
      ref="chartRef"
      :options="options"
      :data="data" />

    <!-- Overlay images using absolute positioning -->
    <div
      v-for="(pos, idx) in imagePositions"
      :key="idx"
      class="absolute shadow-sm drop-shadow-sm bottom-9"
      :style="{
        left: `${pos.x - 16}px`,
        width: '32px',
        height: '32px',
      }">
      <div class="size-[32px] rounded-lg overflow-hidden">
        <ChampionIcon
          :id="champions[idx].championId"
          :alt="pos.label"
          class="size-full scale-115" />
      </div>
    </div>
  </div>
</template>
