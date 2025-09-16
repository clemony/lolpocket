<script lang="ts" setup>
const {
  class: className,
  summoner,
  championName,
  matches,
} = defineProps<{
  class?: HTMLAttributes['class']
  summoner?: Summoner
  championName: string
  matches: MatchData[]
}>()
/* const { matches } = useSummoner(as().account?.puuid) */

const timeline = computed(() => {
  if (!summoner)
    return null

  return useChampionWinrateTimeline(summoner.puuid, matches, championName)
})
watch(
  () => timeline.value,
  (newVal) => {
    console.log('💠 - watch - newVal:', newVal)
  }
)

const data = computed(() => {
  if (!timeline.value)
    return

  return {
    labels: timeline?.value?.map(p => p.span),
    datasets: [
      {
        data: timeline?.value?.map(p => p.winrate),
      },
      {
        data: timeline?.value?.map(p => p.games),
      },
    ],
  }
})

const options = {
  layout: {
    padding: {
      bottom: 0,
    },
  },
  plugins: {
    tooltip: {
      callbacks: {
        label: (context) => {
          const val = context.raw
          return context.datasetIndex === 0
            ? `${val.toFixed(2)}% winrate`
            : `${val} games`
        },
      },
    },
  },
  scales: {
    y: {
      type: 'linear',
      position: 'left',
      min: 0,
      max: 100,
      title: {
        display: true,
        text: 'Winrate (%)',
      },
      grid: {
        display: true,
      },
      ticks: {
        display: true,
      },
      border: {
        display: true,
      },
    },
    y1: {
      type: 'linear',
      position: 'right',
      grid: {
        drawOnChartArea: false,
      },
      title: {
        display: true,
        text: 'Games Played',
      },
    },
  },
}

const range = computed(() => {
  const spans = timeline.value.map(p => p.span)
  if (!spans.length)
    return ''
  return `Weeks ${spans[0]} - ${spans[spans.length - 1]}`
})
</script>

<template>
  <div
    class="stats bg-b1 rounded-box border border-b3 shadow-warm-soft h-54 w-full px-5 relative">
    <div class="absolute top-6 left-6 text-bc z-0 pointer-events-none">
      <div class="text-xxs stat-desc font-medium mb-1">
        {{ range }}
      </div>

      <div class="text-lgfont-semibold dst"></div>

      <div class="text-sm stat-desc"></div>
    </div>

    <LineChart
      :data="data"
      :options="options" />
  </div>
</template>
