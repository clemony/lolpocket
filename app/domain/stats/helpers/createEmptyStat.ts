export function createEmptyChampionStat(
  championId: number,
  championName: string
): PairedChampionStat {
  return {
    games: 0,
    win: 0,
    championId,
    championName,
    avgTimestamp: 0,
    delta: 0,
    synergy: 0,
  }
}

export function buildEmptyRoleObject() {
  return { top: {}, jungle: {}, middle: {}, bottom: {}, support: {} }
}
