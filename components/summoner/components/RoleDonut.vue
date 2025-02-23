<script setup lang="ts">
import { summoner } from 'shared/data/summonerData'

const hexColors = {
  support: '#99c4c8',
  bottom: '#ebcb8b',
  mid: '#be86b5',
  jungle: '#a3be8c',
  top: '#e0746b',
}

/* function gradient(context) {
    const index = context.dataIndex
    console.log('💠 - gradient - index:', index)
    const value = context.dataset.data[index]
    console.log('💠 - gradient - value:', value)

    let g = context('2d').createConicGradient(0, 200, 200)
    g.addColorStop(0, 'red')
    g.addColorStop(0.25, 'orange')
    g.addColorStop(0.5, 'yellow')
    g.addColorStop(0.75, 'green')
    g.addColorStop(1, 'blue')
    return g
} */

const labels = ['Support', 'Bottom', 'Mid', 'Jungle', 'Top']
const datasets = [
  {
    data: [summoner.role.support.percent, summoner.role.bottom.percent, summoner.role.mid.percent, summoner.role.jungle.percent, summoner.role.top.percent],
  },
]
const colors = [hexColors.support, hexColors.bottom, hexColors.mid, hexColors.jungle, hexColors.top]

const chartRef = document.getElementById('roleChart') as HTMLCanvasElement

const mostRoled = computed(() => {
  /*     const labelValuePairs = chartData.labels.map((label, index) => ({
        label,
        value: chartData.datasets[0].data[index],
    }))
    const highestPair = labelValuePairs.reduce((max, current) =>
        current.value > max.value ? current : max
    )
    return highestPair.label */
  return 'Support'
})
</script>

<template>
  <div class="relative size-22 grid items-center justify-center">

      <Donut
        :datasets="datasets"
        :colors="colors"
        :labels="labels"
        aria="Playrate by role in percentage"
      />
    <div class="absolute top-7 left-7">
      <i-roles-support
        v-if="mostRoled == 'Support'"
        class="drop-shadow-neutral/70 size-8 drop-shadow-xs"
        :style="{ color: hexColors.support }"
      />
      <i-roles-bottom
        v-if="mostRoled == 'Bottom'"
        class="drop-shadow-neutral/70 text-gold size-8 drop-shadow-xs"
        :style="{ color: hexColors.bottom }"
      />
      <i-roles-middle
        v-if="mostRoled == 'Mid'"
        class="drop-shadow-neutral/70 size-8 text-purple-400 drop-shadow-xs"
        :style="{ color: hexColors.mid }"
      />
      <i-roles-jungle
        v-if="mostRoled == 'Jungle'"
        class="drop-shadow-neutral/70 text-resolve size-8 drop-shadow-xs"
        :style="{ color: hexColors.jungle }"
      />
      <i-roles-top
        v-if="mostRoled == 'Top'"
        class="drop-shadow-neutral/70 text-grandmaster size-8 drop-shadow-xs"
        :style="{ color: hexColors.top }"
      />
    </div>
  </div>
</template>

<style></style>
