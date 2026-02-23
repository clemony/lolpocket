export type PointKey = string

function edgeFalloff(value: number, min: number, max: number) {
  const t = (value - min) / (max - min) // 0 → 1
  return Math.min(t, 1 - t) * 2 // 0 at edges, 1 at center
}

const BIAS_PX = 16

function edgeBias(value: number, min: number, max: number) {
  if (value <= min) return min + BIAS_PX
  if (value >= max) return max - BIAS_PX
  return value
}

/* export function buildAllyBubbleData(allies: AllyStatDetail[]): AllyDataPoint[] {
  const out: AllyDataPoint[] = [] */

/*   for (const ally of allies) { */
/*   for (const champ of Object.values(ally.champions) as [
      string,
      AllyStatDetail,
    ]) {
      if (!champ.games || !champ.winrate) continue

      out.push({
        allyPuuid: ally.puuid,
        allyName: ally.name,
        allyTag: ally.tag,
        avgTimestamp: champ.avgTimestamp,
        championId: champ.championId,
        championName: champ.championName,
        delta: champ.delta,
        games: champ.games,
        winrate: champ.winrate,
      } as AllyStatDetail)
    } */
/*  }

  return out
}

function groupAngle(key: string) {
  return createNoise(key) * Math.PI * 2
}

export function separateValue(
  base: number,
  axis: 'x' | 'y',
  points: AllyDataPoint[],
  group: CollisionValue
) {
  const min = axis === 'x' ? 0 : -100
  const max = 100

  const spacing = 3

  const { id, count, index, maxRadius } = group

  if (count <= 1) return base

  const rotation = groupAngle(id)
  const angle = rotation + (index / count) * Math.PI * 2

  const scaledSpacing = spacing * Math.sqrt(count) * (1 + maxRadius / 30) // 30 ≈ tuning constant

  const selfRadius = radiusFromGames(count, points.length)

  const pushFactor = 1 + (maxRadius - selfRadius) / maxRadius
  const clampedPush = Math.max(0.8, Math.min(1.6, pushFactor))
  const offset
    = axis === 'x'
      ? Math.cos(angle) * scaledSpacing * clampedPush
      : Math.sin(angle) * scaledSpacing * clampedPush

  const falloff = edgeFalloff(base, min, max)
  return edgeBias(base + offset * falloff, min, max)
}
 */
