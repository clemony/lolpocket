export function applyParticipantStats(acc: AggregatedStats, row: Player) {
  acc.kills += row.stats.kills.value
  acc.doubleKills += row.stats.kills.stats.doubleKills
  acc.killingSprees += row.stats.kills.stats.killingSprees
  acc.tripleKills += row.stats.kills.stats.tripleKills
  acc.quadraKills += row.stats.kills.stats.quadraKills
  acc.pentaKills += row.stats.kills.stats.pentaKills

  acc.deaths += row.stats.deaths
  acc.assists += row.stats.assists
  acc.kp += row.stats.kp
  acc.games += 1
  row.win ? acc.wins++ : acc.losses++
}
