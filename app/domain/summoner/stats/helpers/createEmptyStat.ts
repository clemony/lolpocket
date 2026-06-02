export function createEmptyChampionStat(
  championId: number,
  championName: string
): PairedChampionStat {
  return {
    avgTimestamp: 0,
    championId,
    championName,
    delta: 0,
    games: 0,
    synergy: 0,
    win: 0
  }
}

export function buildEmptyPositionObject() {
  return { middle: {}, bottom: {}, jungle: {}, support: {}, top: {} }
}
