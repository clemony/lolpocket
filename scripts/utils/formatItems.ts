// formatItem.ts
import { normalize } from '..'

export function formatStats(stats = {}): Record<string, number> {
  const flatStats: Record<string, number> = {}

  for (const statName in stats) {
    const stat = stats[statName]
    const value
      = stat.flat || stat.percent || stat.perLevel || stat.percentPerLevel || stat.percentBase || stat.percentBonus || 0

    if (statName === 'magicPenetration') {
      if (stat.flat)
        flatStats.flatMagicPenetration = stat.flat
      else if (stat.percent)
        flatStats.percentMagicPenetration = stat.percent
      continue
    }

    if (statName === 'movespeed') {
      if (stat.flat)
        flatStats.flatMovespeed = stat.flat
      else if (stat.percent)
        flatStats.percentMovespeed = stat.percent
      continue
    }

    if (value !== 0)
      flatStats[statName] = value
  }

  return flatStats
}

export function normalizeItemData(item): { rank: string[], tags: string[], maps: number[] } {
  if (item.rank[0] == 'TRINKET' || item.rank[0] == 'POTION') {
    item.rank[0] = 'Consumable'
  }
  if (item.rank[0] == 'MINION' || item.rank[0] == 'TURRET' || item.rank[0] == 'DISTRIBUTED') {
    item.rank[0] = 'Special'
  }
  const normalizedTags = (item.shop?.tags ?? []).map(normalize)

  const normalizedRanks = (item.rank ?? []).map(normalize)

  const mapIds = Object.entries(item.maps || {})
    .filter(([, enabled]) => enabled === true)
    .map(([mapId]) => Number(mapId))

  return { rank: normalizedRanks, tags: normalizedTags, maps: mapIds }
}