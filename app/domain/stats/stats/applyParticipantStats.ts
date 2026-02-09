//
export function applyParticipantStats(acc: ChampionStats, row: Player) {
  if (acc.kills) bumpAverage(acc.kills, row.stats.kills)
  if (acc.deaths) bumpAverage(acc.deaths, row.stats.deaths)
  if (acc.assists) bumpAverage(acc.assists, row.stats.assists)
  if (acc.kp) bumpAverage(acc.kp, row.stats.kp)

  acc.games += 1
  row.win ? acc.wins++ : acc.losses++
}
