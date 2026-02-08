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
ChartJS.defaults.scale.grid.color = cssVar('--color-p3')

ChartJS.register(Title, Tooltip, BarElement, CategoryScale, LinearScale)

const data = computed(() => ({
  labels: champions.map(c => c.champion ?? ''),
  datasets: [
    {
      data: champions.map(c => c.winrate ?? 0),
    },
  ],
}))

const chartRef = ref<any>(null)
const imagePositions = ref<{ x: number, label: string }[]>([])

const options = {
  color: cssVar('--colorneutral'),
  backgroundColor: cssVar('--colorneutral'),
  barThickness: 32,
  maintainAspectRatio: false,
  maxBarThickness: 32,
  minBarLength: 4,
  responsive: true,
  skipNull: false,
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
  plugins: {
    tooltip: {
      titleFont: {
        size: 16,
      },
      titleMarginBottom: -3,
      titleSpacing: 0,
      bodySpacing: -5,
      caretPadding: 20,
      cornerRadius: 10,
      displayColors: false,
      enabled: true,
      footerSpacing: 0,
      intersect: false,
      padding: 10,
      bodyFont: {
        size: 14,
      },
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
            ` ${winrate.toFixed(0)}%&#x3000;winrate`,
            ` ${champion.kda ?? 'N/A'}&hairsp;%&#x3000;kda`,
            ` ${Math.round(champion.avgKp) ?? 'N/A'}%&hairsp;&#x3000;kp`,
          ]
        },
      },
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
      title: {
        display: false,
      },
      border: {
        color: `${cssVar('--color-p2')}`,
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
      max: 100,
      min: 0,
      border: {
        color: `${cssVar('--color-p2')}`,
      },
      ticks: {
        callback(value, index, ticks) {
          return `${value}%`
        },
        display: true,
        padding: 12,
        stepSize: 20,
        font: {
          size: 11,
        },
      },
    },
  },
}

// calculate image positions after chart is rendered
function calculateImagePositions() {
  nextTick(() => {
    const chart = chartRef.value?.chart
    if (!chart) return
    const xScale = chart.scales.x
    if (!xScale) return

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
    class="border-shadow-sm relative grid h-150 min-h-150 w-210 place-items-center pt-4">
    <Bar
      id="championAnalysis"
      ref="chartRef"
      :options="options"
      :data="data" />

    <!-- Overlay images using absolute positioning -->
    <div
      v-for="(pos, idx) in imagePositions"
      :key="idx"
      class="absolute bottom-9 shadow-sm drop-shadow-sm"
      :style="{
        left: `${pos.x - 16}px`,
        width: '32px',
        height: '32px',
      }">
      <div class="size-[32px] overflow-hidden rounded-lg">
        <Champion
          :id="champions[idx].championId"
          class="size-full scale-115"
          :alt="pos.label" />
      </div>
    </div>
  </div>
</template>
