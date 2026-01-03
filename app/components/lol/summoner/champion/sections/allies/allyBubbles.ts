import type { EChartsOption, ScatterSeriesOption } from "echarts"

export interface AllyBubblePoint {
  allyPuuid: string
  allyName: string
  allyTag: string
  avgTimestamp?: number
  championId: number
  championName: string
  // color: string
  games: number
  synergy: number
  winrate: number
}

export function getAllyColorMap(data: AllyBubblePoint[]) {
  const palette = [
    "#b48dac",
    "#90bdc2",
    "#bf616a",
    "#ebcb8b",
    "#a3be8c",
    "#abd2b5",
    "#df9372",
    "#e3a3b1",
  ]

  const map = new Map<string, string>()
  let i = 0

  for (const d of data) {
    if (!map.has(d.allyPuuid)) {
      map.set(d.allyPuuid, palette[i % palette.length])
      i++
    }
  }

  return map
}

export function buildAllyBubbleData(
  allies: AllyStatDetail[]
): AllyBubblePoint[] {
  const out: AllyBubblePoint[] = []

  for (const ally of allies) {
    for (const champ of Object.values(ally.champions)) {
      if (!champ.games || !champ.winrate) continue

      out.push({
        allyPuuid: ally.puuid,
        allyName: ally.name,
        allyTag: ally.tag,
        avgTimestamp: champ.avgTimestamp,
        championId: champ.championId,
        championName: champ.championName,
        //  color: getAllyColor(ally.puuid),
        games: champ.games,
        synergy: champ.synergy.average,
        winrate: champ.winrate,
      })
    }
  }

  return out
}

export function groupByAlly(points: AllyBubblePoint[]) {
  const map = new Map<string, AllyBubblePoint[]>()

  for (const p of points) {
    if (!map.has(p.allyPuuid)) {
      map.set(p.allyPuuid, [])
    }
    map.get(p.allyPuuid)!.push(p)
  }

  return map
}
