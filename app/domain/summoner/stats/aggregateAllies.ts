import { createEmptyChampionStat } from "~/domain/summoner/stats/helpers/createEmptyStat"
import {
  percentScore,
  synergyScore,
  winDelta,
} from "~/domain/summoner/stats/helpers/normalizeScore"

//
function bumpChampion(
  allyEntry: AllyStatDetail,
  ally: Player,
  win: boolean,
  gameDuration: number
) {
  if (!allyEntry.champions[ally.championId]) {
    allyEntry.champions[ally.championId] = createEmptyChampionStat(
      ally.championId,
      champNameById(ally.championId) ?? ""
    )
  }

  const c =
    allyEntry.champions[ally.championId] ??
    (allyEntry.champions[ally.championId] = createEmptyChampionStat(
      ally.championId,
      champNameById(ally.championId) ?? ""
    ))

  c.games++
  c.win ??= 0
  c.loss ??= 0
  win === true ? c.win++ : c.loss++

  c.avgTimestamp =
    ((c.avgTimestamp ?? 0) * (c.games - 1) + gameDuration) / c.games
}

function bumpAlly(
  map: Record<string, AllyStatDetail>,
  ally: Player,
  win: boolean,
  gameDuration: number
) {
  const key = ally.puuid

  if (!map[key]) {
    map[key] = {
      name: ally.name,
      puuid: ally.puuid,
      avgTimestamp: 0,
      delta: 0,
      games: 0,
      icon: String(ally.icon),
      synergy: 0,
      tag: ally.tag,
      win: 0,
      loss: 0,
      champions: {},
    }
  }

  const s = map[key]

  s.games++
  s.win ??= 0
  s.loss ??= 0
  win === true ? s.win++ : s.loss++

  s.avgTimestamp =
    ((s.avgTimestamp ?? 0) * (s.games - 1) + gameDuration) / s.games

  bumpChampion(s, ally, win, gameDuration)
}

export function aggregateAllies(data: Ref<MatchData[]>, puuid: string) {
  return computed<AllyStatDetail[]>(() => {
    const allies: Record<string, AllyStatDetail> = {}

    const totalGames = data.value?.length
    if (!totalGames) return []

    const totalWins = data.value.filter((d) => {
      const p = d.participants.find((p) => p.puuid === puuid)
      return p?.win === true
    }).length

    for (const d of data.value) {
      const player = d.participants.find((p) => p.puuid === puuid)
      if (!player) continue

      const win = player.win
      const gameDuration = d.gameDuration

      const allyArray = d.participants.filter(
        (p) => p.teamId === player.teamId && p.puuid !== player.puuid
      )

      for (const ally of allyArray) {
        if (win === "remake") continue
        bumpAlly(allies, ally, win, gameDuration)
      }
    }

    //  finalize
    for (const ally of Object.values(allies) as AllyStatDetail[]) {
      ally.delta = winDelta(ally.win ?? 0, ally.games, totalWins, totalGames)

      for (const c of Object.values(ally.champions) as PairedChampionStat[]) {
        if (totalGames === c.games) {
          c.delta = 0
          continue
        }

        c.delta = winDelta(c.win ?? 0, c.games, totalWins, totalGames)
      }
      ally.champions = Object.fromEntries(
        sortRecordBy(
          ally.champions as Record<string, PairedChampionStat>,
          "games",
          "desc"
        ).map((c) => [c.championId, c])
      )
    }

    // collect ALLLLLLLLL raw synergy values
    const allSynergyTotals = [
      ...Object.values(allies).map((a) => a.delta),
      ...Object.values(allies).flatMap((a) =>
        (Object.values(a.champions) as PairedChampionStat[]).map((c) => c.delta)
      ),
    ]

    const globalMaxAbs = Math.max(...allSynergyTotals.map(Math.abs)) || 1

    //normalize
    for (const ally of Object.values(allies)) {
      ally.synergy = synergyScore(ally.delta, globalMaxAbs)
      ally.winrate = roundDecimalToPercent(ally.win ?? 0, ally.games)
      ally.pickrate = roundDecimalToPercent(ally.games, totalGames)
      ally.delta = ally.delta ? Math.round(ally.delta * 1000) / 10 : 0

      for (const c of Object.values(ally.champions) as PairedChampionStat[]) {
        c.synergy = synergyScore(c.delta, globalMaxAbs)
        c.winrate = roundDecimalToPercent(c.win ?? 0, c.games)
        c.delta = c.delta ? Math.round(c.delta * 1000) / 10 : 0
      }
    }

    const filter = Object.fromEntries(
      Object.entries(allies).filter(([, s]) => s.games >= 3)
    )
    /*     console.log(
      "🥸 - aggregateAllies - filter:",
      Object.values(filter).map((p) => p.champions)
    ) */

    return sortRecordBy(filter, "games", "desc") as AllyStatDetail[]
  })
}
