<script lang="ts" setup>
const userMatchData = []

// @todo usermatchdata

const patchStats = computed(() => {
  const patchMap = new Map<
    number,
    { games: number, wins: number, losses: number, winrate: number }
  >()

  // Step 1: Group matches by patch
  userMatchData.forEach(({ patch, win }) => {
    if (!patchMap.has(patch)) {
      patchMap.set(patch, { games: 0, losses: 0, winrate: 0, wins: 0 })
    }

    const stats = patchMap.get(patch)!
    stats.games++
    win ? stats.wins++ : stats.losses++
    stats.winrate = (stats.wins / stats.games) * 100
  })

  const allPatches = ds().patchList

  // Step 3: Ensure every patch exists in `patchMap`
  const filledPatches = allPatches.map(patch => ({
    games: patchMap.get(patch)?.games ?? 0,
    patch,
    winrate: patchMap.get(patch)?.winrate ?? 0,
  }))

  return filledPatches.slice(-7)
})

const data = computed(() => ({
  datasets: [
    {
      data: patchStats.value.map(p => p.winrate ?? 0),
    },
    {
      data: patchStats.value.map(p => p.games ?? 0),
    },
  ],
  labels: patchStats.value.map(p => p.patch),
}))

const options = {
  layout: {
    padding: {
      bottom: 30,
    },
  },
  plugins: {
    tooltip: {
      callbacks: {
        label: (context) => {
          const dataPoint = context.raw
          const datasetIndex = context.datasetIndex
          if (datasetIndex === 0) {
            return `${dataPoint.toFixed(2)}% winrate` // First dataset (Winrate)
          }
          else if (datasetIndex === 1) {
            return `${dataPoint} games` // Second dataset (Games)
          }

          return null
        },
      },
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
      border: {
        display: false,
      },
      ticks: {
        display: false,
      },
    },
    y: {
      grid: {
        display: false,
      },
      border: {
        display: false,
      },
      max: 100,
      min: 0,
      ticks: {
        display: false,
      },
    },
  },
}

const range = computed(() => {
  const a = [...patchStats.value]
  const b = a.pop()
  return `${a.shift().patch} - ${b.patch}`
})
</script>

<template>
  <div
    class="
      stats relative h-62 w-full rounded-box border border-b3 bg-b1 px-5
      shadow-warm-soft
    ">
    <div class="pointer-events-none absolute top-6 left-6 z-0 text-bc">
      <div class="stat-desc mb-1 text-xs font-medium">
        {{ range }}
      </div>

      <div class="text-xlfont-semibold dst">
        Recent Patch
      </div>

      <div class="stat-desc text-md">
        Winrate vs. Games
      </div>
    </div>

    <LineChart
      :data="data"
      :options="options" />

    <NoDataOverlay v-if="!userMatchData.length" />
  </div>
</template>
