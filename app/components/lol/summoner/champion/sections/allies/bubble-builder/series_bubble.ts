import type { EChartsOption, ScatterSeriesOption } from 'echarts'
import type { AllyDataPoint } from '..'
import {
  buildCollisionGroups,
  buildCollisionIndexMap,
  separateValue,
  sizeFromMax,
} from '..'

export function groupByAlly(points: AllyDataPoint[]) {
  const map = new Map<string, AllyDataPoint[]>()

  for (const p of points) {
    if (!map.has(p.allyPuuid)) {
      map.set(p.allyPuuid, [])
    }
    map.get(p.allyPuuid)!.push(p)
  }

  return map
}

export function buildAllyBubbleSeries(
  points: AllyDataPoint[],
  colorMap: Map<string, string>
): ScatterSeriesOption[] {
  const maxChampionGames = computed(() =>
    points.reduce((max, p) => Math.max(max, p.games), 0)
  )

  const maxGames = maxChampionGames.value

  const collisionGroups = buildCollisionGroups(points)
  const collisionMap = buildCollisionIndexMap(collisionGroups, points.length)
  const grouped = groupByAlly(points)

  return Array.from(grouped.entries()).flatMap(([puuid, items]) => {
    const ally = items[0]
    const color = colorMap.get(puuid)

    return [
      {
        name: `${ally.allyName} #${ally.allyTag}`,
        color,
        data: items.map((d) => {
          const group = collisionMap.get(`${d.allyPuuid}-${d.championId}`)!
          return {
            symbol: `image:///img/champions/circle/${d.championId}.webp`,
            symbolKeepAspect: true,

            value: [
              separateValue(d.winrate, 'x', points, group),
              separateValue(d.delta, 'y', points, group),
              d.games,
            ],
            ...d,
          }
        }),
        itemStyle: {
          opacity: 1,

          shadowBlur: 2,
          shadowColor: color,
          shadowOffsetX: 1,
          shadowOffsetY: 1,
        },

        showInLegend: false,
        symbolSize: (_val, params) =>
          sizeFromMax(
            (params.data as AllyDataPoint).games,
            maxChampionGames.value
          ),
        type: 'scatter',
      },
    ]
  })
}
