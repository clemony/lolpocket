export interface ChampionPairStats {
  enemy: PairedChampionStat[][]
  team: PairedChampionStat[][]
}

export type PairedChampionDuoStatGroup = Record<
  RoleKey,
  Record<number, PairedChampionStat>
>

function bumpChampion(
  map: PairedChampionDuoStatGroup,
  role: RoleKey,
  championId: number,
  win: boolean,
  gameDuration: number
) {
  if (!map[role][championId]) {
    map[role][championId] = createEmptyChampionStat(
      championId,
      champNameById(championId)
    )
  }
  const e = map[role][championId]

  e.games++
  if (win) e.win!++

  e.avgTimestamp =
    ((e.avgTimestamp ?? 0) * (e.games - 1) + gameDuration) / e.games
}

export const aggregateDuos = (data: Ref<MatchPlayerData[]>) =>
  computed<ChampionPairStats>(() => {
    const enemy: PairedChampionDuoStatGroup = buildEmptyRoleObject()
    const team: PairedChampionDuoStatGroup = buildEmptyRoleObject()

    const totalGames = data.value.length
    if (!totalGames) {
      return { enemy: [], team: [] }
    }

    const totalWins = data.value.filter((d) => d.player.win).length

    for (const d of data.value) {
      const player = d.player
      if (!player) continue

      const teamId = player.teamId
      const win = player.win
      const gameDuration = d.match.gameDuration

      for (const p of d.match.participants) {
        if (p.puuid === player.puuid) continue

        const target = p.teamId === teamId ? team : enemy
        const role = normalizeRole(p.role)

        bumpChampion(target, role, p.championId, win, gameDuration)
      }
    }

    function finalize(
      group: PairedChampionDuoStatGroup
    ): PairedChampionStat[][] {
      const out: PairedChampionStat[][] = []

      //  winrate, pickrate, raw synergy
      for (const role of Object.keys(group) as RoleKey[]) {
        for (const c of Object.values(group[role])) {
          c.delta = winDelta(c.win, c.games, totalWins, totalGames)
        }
      }

      for (const role of Object.keys(group) as RoleKey[]) {
        const champs = Object.values(group[role])
        //const maxAbs = Math.max(...champs.map((c) => Math.abs(c.synergy))) || 1
        for (const c of champs) {
          c.winrate = roundDecimalToPercent(c.win!, c.games)
          // c.synergy = synergyScore(c.delta, maxAbs)
          c.delta = c.delta ? Math.round(c.delta * 1000) / 10 : 0
        }

        out.push(
          champs.filter((c) => c.games >= 1).sort((a, b) => b.games - a.games)
        )
      }

      return out
    }

    return {
      enemy: finalize(enemy),
      team: finalize(team),
    }
  })
