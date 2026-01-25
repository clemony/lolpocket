export function applyParticipantStats(acc: ChampionStats, row: Player) {
  bumpAverage(acc.kills, row.stats.kills)
  bumpAverage(acc.deaths, row.stats.deaths)
  bumpAverage(acc.assists, row.stats.assists)
  bumpAverage(acc.kp, row.stats.kp)

  acc.games += 1
  row.win ? acc.wins++ : acc.losses++
}
