function createEmptyChampionStat(): AllyChampionStat {
  return {
    games: 0,
    championId: 0,
    championName: "",
    win: 0,
    avgTimestamp: 0,
    synergy: { total: 0, average: 0 },
  }
}

function bumpChampion(
  map: Record<string, AllyStatDetail>,
  ally: Player,
  win: boolean,
  gameDuration: number
) {
  const allyEntry = map[ally.puuid]

  if (!allyEntry.champions[ally.championId]) {
    allyEntry.champions[ally.championId] = createEmptyChampionStat()
  }

  const c = allyEntry.champions[ally.championId]

  c.championId = ally.championId
  c.championName = champNameById(ally.championId)
  c.games++
  if (win) c.win!++

  // running average of game duration
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
      puuid: ally.puuid,
      name: ally.riotIdGameName,
      tag: ally.riotIdTagline,
      icon: String(ally.profileIcon),
      champions: {},
      games: 0,
      win: 0,
      avgTimestamp: 0,
      synergy: { total: 0, average: 0 },
    }
  }

  const s = map[key]

  s.games++
  if (win) s.win!++

  s.avgTimestamp =
    ((s.avgTimestamp ?? 0) * (s.games - 1) + gameDuration) / s.games

  bumpChampion(map, ally, win, gameDuration)
}

export const aggregateAllies = (data: Ref<MatchPlayerData[]>) =>
  computed<AllyStatDetail[]>(() => {
    const allies: Record<string, AllyStatDetail> = {}

    const totalGames = data.value.length
    if (!totalGames) return []

    const totalWins = data.value
      .map((d) => d.player.win)
      .filter((w) => w === true).length

    const baselineWinrate = totalWins / totalGames

    for (const d of data.value) {
      const player = d.player
      if (!player) continue

      const win = player.win
      const gameDuration = d.match.gameDuration

      const allyArray = d.match.participants.filter(
        (p) => p.teamId === player.teamId && p.puuid !== player.puuid
      )

      for (const ally of allyArray) {
        bumpAlly(allies, ally, win, gameDuration)
      }
    }

    //  finalize
    for (const ally of Object.values(allies)) {
      ally.winrate = roundDecimalToPercent(ally.win!, ally.games)
      ally.pickrate = roundDecimalToPercent(ally.games, totalGames)

      const delta = ally.winrate - baselineWinrate
      ally.synergy.total = delta * Math.log(ally.games + 1) * ally.pickrate

      for (const champ of Object.values(ally.champions)) {
        champ.winrate = roundDecimalToPercent(champ.win!, champ.games)

        const delta = champ.winrate - baselineWinrate

        champ.synergy.total =
          delta * Math.log(champ.games + 1) * (champ.games / ally.games)
      }
      ally.champions = sortRecordBy(ally.champions, "games", "desc")
    }

    const maxChampionAbs =
      Math.max(
        ...Object.values(allies)
          .flatMap((a) => Object.values(a.champions))
          .map((c) => Math.abs(c.synergy.total))
      ) || 1

    for (const ally of Object.values(allies)) {
      for (const champ of Object.values(ally.champions)) {
        champ.synergy.average = Math.round(
          Math.tanh(champ.synergy.total / maxChampionAbs) * 100
        )
      }
    }
    const filter = Object.fromEntries(
      Object.entries(allies).filter(([, s]) => s.games >= 3)
    )

    return sortRecordBy(filter, "games", "desc") as AllyStatDetail[]
  })
