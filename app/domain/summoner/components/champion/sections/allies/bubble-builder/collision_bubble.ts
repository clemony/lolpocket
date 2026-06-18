//
/* import type { AllyDataPoint, PointKey } from ".." */

const EPS_X = 10 // winrate %
const EPS_Y = 10 // delta units

type CollisionKey = string
/* type CollisionGroup = AllyDataPoint[]

export function buildCollisionGroups(
  points: AllyDataPoint[],
  epsX = EPS_X,
  epsY = EPS_Y
) {
  const groups: CollisionGroup[] = []
  const used = new Set<number>()

  for (let i = 0; i < points.length; i++) {
    if (used.has(i)) continue

    const a = points[i]
    if (!a) continue
    const group: CollisionGroup = [a]
    used.add(i)

    for (let j = i + 1; j < points.length; j++) {
      if (used.has(j)) continue
      const b = points[j]
      if (!b) continue

      if (
        Math.abs(a.winrate - b.winrate) <= epsX &&
        Math.abs(a.delta - b.delta) <= epsY
      ) {
        group.push(b)
        used.add(j)
      }
    }

    groups.push(group)
  }

  return groups
}

export function radiusFromGames(
  games: number,
  maxGames: number,
  minSize = 40,
  maxSize = 60
) {
  const size = minSize + (games / maxGames) * (maxSize - minSize)

  return size / 2
}
export interface CollisionValue {
  id: string
  count: number
  index: number
  maxRadius: number
}

export function buildCollisionIndexMap(
  groups: CollisionGroup[],
  maxGames: number
) {
  const indexMap = new Map<
    PointKey,
    { index: number; count: number; maxRadius: number; id: string }
  >()

  for (const group of groups) {
    if (!group.length) continue
    const maxRadius = Math.max(
      ...group.map((p) => radiusFromGames(p.games, maxGames))
    )
    group.forEach((p, i) => {
      indexMap.set(`${p.allyPuuid}-${p.championId}`, {
        id: `${p.allyPuuid}-${p.championId}`,
        count: group.length,
        index: i,
        maxRadius,
      })
    })
  }

  return indexMap
}
 */
