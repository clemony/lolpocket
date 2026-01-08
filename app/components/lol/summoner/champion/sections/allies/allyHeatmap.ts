import type { EChartsOption, HeatmapSeriesOption } from "echarts"

import type { AllyDataPoint } from "."
const WINRATE_BIN = 5 // %
const delta_BIN = 1 // 1–10

function binWinrate(v: number) {
  return Math.floor(v / WINRATE_BIN)
}

function bindelta(v: number) {
  return Math.floor(v / delta_BIN)
}

export function buildAllyHeatmapSeries(
  points: AllyDataPoint[]
): HeatmapSeriesOption[] {
  const map = new Map<string, number>()

  for (const p of points) {
    const x = binWinrate(p.winrate)
    const y = bindelta(p.delta)
    const key = `${x}-${y}`

    map.set(key, (map.get(key) ?? 0) + p.games)
  }

  console.log("🥸 - buildAllyHeatmapSeries - map:", map)
  const data = [...map.entries()].map(([key, value]) => {
    const [x, y] = key.split("-").map(Number)
    return [x, y, value]
  })

  return [
    {
      type: "heatmap",
      data: data,
      progressive: 0,

      emphasis: {
        itemStyle: {
          borderColor: "#fff",
          borderWidth: 1,
        },
      },
    },
  ]
}

export const allyHeatMapOptions: EChartsOption = {
  visualMap: {
    min: 0,
    max: 10,
    calculable: true,
    orient: "horizontal",
    left: "center",
    bottom: "15%",
  },
  xAxis: {
    name: "Winrate",
    nameGap: 30,
    nameLocation: "center",
    axisLabel: {
      alignMinLabel: "left",
    },
    axisTick: {
      show: true,
    },
    data: Array.from({ length: 21 }, (_, i) => `${i * 5}%`),

    type: "category",
  },
  yAxis: {
    name: "delta",
    nameGap: 20,
    nameTextStyle: {
      align: "right",
    },
    axisLabel: {
      // showMinLabel: false
    },
    axisTick: {
      show: true,
    },
    data: Array.from({ length: 11 }, (_, i) => i),
    type: "category",
  },
}
