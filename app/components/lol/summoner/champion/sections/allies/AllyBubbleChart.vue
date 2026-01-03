<script setup lang="ts">
import type { EChartsOption, ScatterSeriesOption } from 'echarts'
import VChart from 'vue-echarts'
import type { AllyBubblePoint } from './allyBubbles'
import { groupByAlly } from './allyBubbles'

const { colorMap, points } = defineProps<{
  points: AllyBubblePoint[]
  colorMap: Map<string, string>
}>()

const series = computed<ScatterSeriesOption[]>(() => {
  const grouped = groupByAlly(points)

  return Array.from(grouped.entries()).flatMap(([puuid, items]) => {
    const ally = items[0]
    const color = colorMap.get(puuid)

    return [
      // background bubbles (border + size)
      {
        name: `${ally.allyName} #${ally.allyTag}`,
        data: items.map(d => ({
          value: [d.winrate, d.synergy, d.games],
          ...d,
        })),
        itemStyle: {
          borderWidth: 3,
          borderColor: color,
          color,
          shadowBlur: 3,
          shadowColor: 'rgba(0,0,0,0.25)',
        },
        large: true,
        progressive: 0,
        symbol: 'circle',
        symbolSize: (val: number[]) =>
          Math.max(38, Math.min(90, Math.sqrt(val[2]) * 7)),
        type: 'scatter',
      },

      // icon overlay (no legend entry)
      {
        data: items.map(d => ({
          symbol: `image:///img/champions/circle/${d.championId}.webp`,
          symbolKeepAspect: true,
          value: [d.winrate, d.synergy, d.games],
        })),
        silent: true, // mouse events handled by background
        symbolSize: (val: number[]) =>
          Math.max(32, Math.min(84, Math.sqrt(val[2]) * 6)),
        type: 'scatter',
        z: 10,
      },
    ]
  })
})

const option = computed(
  (): EChartsOption => ({
    grid: { bottom: 40, left: 40, right: 220, top: 20 },
    legend: {
      orient: 'vertical',
      right: 10,
      textStyle: {
        fontSize: cssVar('--text-2'),
      },
      top: 60
    },
    series: series.value,
    toolbox: {
      feature: {
        dataZoom: {
          yAxisIndex: 'none'
        },
        restore: {},
        saveAsImage: {}
      },
      iconStyle: {
        opacity: 1,
      },
      right: 10,
      top: 10,
    },
    tooltip: {
      backgroundColor: cssVar('--color-neutral'),
      formatter: ({ data }: any) => `
      <ul class="**:text-2! flex flex-col gap-0 w-40 max-w-40 text-nc/90 py-2 *:w-full *:px-2 **:not-first:font-medium [&_.stat]:flex [&_.stat]:items-center [&_.stat]:justify-between [&_.stat]:*:first:font-semibold [&_.stat]:flex-nowrap [&_.stat]:py-0  ">
        <li class="font-bold"><span class="truncate">${data.allyName}</span> #${data.allyTag}</li>
        <li class="flex gap-2 my-px">
        <img src="/img/champions/circle/${data.championId}.webp" alt="${data.championname}" class="size-5" />
        ${data.championName}</li>
        <li class="stat mt-1"><span>Winrate:</span> <span>${data.winrate.toFixed(1)}</span></li>
        <li class="stat"><span>Synergy:</span> ${data.synergy.toFixed(1)}</li>
        <li class="stat"><span>Games:</span> ${data.games}</li>
      </ul>
    `,
      padding: 0,
      textStyle: {
        color: cssVar('--color-nc'),
        fontSize: 13,
        lineHeight: 15,
      },

    },
    xAxis: {
      name: 'Winrate',
      nameTextStyle: {
        color: cssVar('--color-bc')
      },
      max: 100,
      min: 0,
      type: 'value',
    },
    yAxis: {
      name: 'Synergy',
      nameTextStyle: {
        color: cssVar('--color-bc')
      },
      max: 'dataMax',
      min: 0,
      type: 'value'
    },
  })
)
</script>

<template>
  <div
    class="h-140 w-300">
    <VChart
      v-if="option"
      theme="theme"
      class="size-full"
      :option
      autoresize />
  </div>
</template>