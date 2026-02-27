<script lang="ts" setup>
import { useChampionWinrateTimeline } from "~/domain/summoner/champions/useChampionWinrateTimeline";

const {
  championName,
  class: className,
  matches,
  summoner,
} = defineProps<{
  class?: HTMLAttributes["class"]
  summoner?: Summoner
  championName: string
  matches: MatchData[]
}>()
/* const { matches } = summoner(user().account?.puuid) */

const timeline = computed(() => {
  if (!summoner) return null

  return useChampionWinrateTimeline(summoner.puuid, matches, championName)
})
watch(
  () => timeline.value,
  (newVal) => {
    console.log("💠 - watch - newVal:", newVal)
  }
)

const data = computed(() => {
  if (!timeline.value) {
    return { labels: [], datasets: [{ data: [] }, { data: [] }] }
  }

  return {
    labels: timeline.value.map((p) => p.span),
    datasets: [
      {
        data: timeline.value.map((p) => p.winrate),
      },
      {
        data: timeline.value.map((p) => p.games),
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
        label: (context: any) => {
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
      grid: {
        display: true,
      },
      title: {
        display: true,
        text: "Winrate (%)",
      },
      max: 100,
      min: 0,
      position: "left",
      type: "linear",
      border: {
        display: true,
      },
      ticks: {
        display: true,
      },
    },
    y1: {
      grid: {
        drawOnChartArea: false,
      },
      title: {
        display: true,
        text: "Games Played",
      },
      position: "right",
      type: "linear",
    },
  },
}

const range = computed(() => {
  const spans = timeline.value?.map((p) => p.span) ?? []
  if (!spans.length) return ""
  return `Weeks ${spans[0]} - ${spans[spans.length - 1]}`
})
</script>

<template>
  <div
    class="stats relative h-54 w-full rounded-xl border border-p3 bg-p0 px-5 shadow-warm-soft">
    <div class="pointer-events-none absolute top-6 left-6 z-0 text-pc">
      <div class="stat-desc mb-1 text-xs font-medium">
        {{ range }}
      </div>

      <div class="dst text-xl font-semibold" />

      <div class="stat-desc text-md" />
    </div>

    <!--     <LineChart :data="data" :options="options" /> -->
  </div>
</template>
