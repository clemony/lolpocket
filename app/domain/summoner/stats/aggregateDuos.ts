import {
  buildEmptyPositionObject,
  createEmptyChampionStat
} from "~/domain/summoner/stats/helpers/createEmptyStat"
import type { MatchPositionKey } from "~/domain/summoner/stats/helpers/normalizePosition"
import { normalizePosition } from "~/domain/summoner/stats/helpers/normalizePosition"
import { winDelta } from "~/domain/summoner/stats/helpers/normalizeScore"

//
export interface ChampionPairStats {
  enemy: PairedChampionStat[][]
  team: PairedChampionStat[][]
}

export type PairedChampionDuoStatGroup = Record<
  MatchPositionKey,
  Record<number, PairedChampionStat>
>

function bumpChampion(
  map: PairedChampionDuoStatGroup,
  position: MatchPositionKey,
  championId: number,
  win: boolean,
  gameDuration: number
) {
  if (!map[position][championId]) {
    map[position][championId] = createEmptyChampionStat(
      championId,
      champNameById(championId) ?? ""
    )
  }
  const e = map[position][championId]

  e.games++
  e.win ??= 0
  if (win === true) e.win++

  e.avgTimestamp =
    ((e.avgTimestamp ?? 0) * (e.games - 1) + gameDuration) / e.games
}

export function aggregateDuos(data: Ref<MatchPlayerData[]>) {
  return computed<ChampionPairStats>(() => {
    const enemy: PairedChampionDuoStatGroup = buildEmptyPositionObject()
    const team: PairedChampionDuoStatGroup = buildEmptyPositionObject()

    const totalGames = data.value?.length
    if (!totalGames) {
      return { enemy: [], team: [] }
    }

    const totalWins = data.value.filter((d) => d.player.win === true).length

    for (const d of data.value) {
      const player = d.player
      if (!player) continue

      const teamId = player.teamId
      const win = player.win
      const gameDuration = d.match.gameDuration

      for (const p of d.match.participants) {
        if (p.puuid === player.puuid) continue

        const target = p.teamId === teamId ? team : enemy
        const position = normalizePosition(p.role)

        if (win === "remake") continue
        bumpChampion(target, position, p.championId, win, gameDuration)
      }
    }

    function finalize(
      group: PairedChampionDuoStatGroup
    ): PairedChampionStat[][] {
      const out: PairedChampionStat[][] = []

      //  winrate, pickrate, raw synergy
      for (const position of Object.keys(group) as MatchPositionKey[]) {
        for (const c of Object.values(group[position])) {
          c.delta = winDelta(c.win ?? 0, c.games, totalWins, totalGames)
        }
      }

      for (const position of Object.keys(group) as MatchPositionKey[]) {
        const champs = Object.values(group[position])
        // const maxAbs = Math.max(...champs.map((c) => Math.abs(c.synergy))) || 1
        for (const c of champs) {
          c.winrate = roundDecimalToPercent(c.win ?? 0, c.games)
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
      team: finalize(team)
    }
  })
}
