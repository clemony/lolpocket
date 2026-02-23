/* import type { EChartsOption, HeatmapSeriesOption } from 'echarts'
import type { AllyDataPoint } from '.'

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

  console.log('🥸 - buildAllyHeatmapSeries - map:', map)
  const data = [...map.entries()].map(([key, value]) => {
    const [x, y] = key.split('-').map(Number)
    return [x, y, value]
  })

  return [
    {
      data,
      progressive: 0,
      type: 'heatmap',

      emphasis: {
        itemStyle: {
          borderWidth: 1,
          borderColor: '#fff',
        },
      },
    },
  ]
}

export const allyHeatMapOptions: EChartsOption = {
  visualMap: {
    bottom: '15%',
    calculable: true,
    left: 'center',
    max: 10,
    min: 0,
    orient: 'horizontal',
  },
  xAxis: {
    name: 'Winrate',
    nameGap: 30,
    nameLocation: 'center',
    data: Array.from({ length: 21 }, (_, i) => `${i * 5}%`),
    axisLabel: {
      alignMinLabel: 'left',
    },
    axisTick: {
      show: true,
    },

    type: 'category',
  },
  yAxis: {
    name: 'delta',
    nameGap: 20,
    nameTextStyle: {
      align: 'right',
    },
    data: Array.from({ length: 11 }, (_, i) => i),
    type: 'category',
    axisLabel: {
    },
    axisTick: {
      show: true,
    },
  },
}
 */
