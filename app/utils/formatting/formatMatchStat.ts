export function formatMatchStat(stat) {
  const a = stat

  const b = a && a.toString().length > 6 ? a : 0

  let c = b ? b.toFixed(2) : a
  c =
    (
      stat.id === "effectiveHealAndShielding" ||
      stat.id === "bountyGold" ||
      stat.id === "goldPerMinute"
    ) ?
      Math.round(c)
    : c

  // units

  c =
    (
      [
        "teamDamagePercentage",
        "damageTakenOnTeamPercentage",
        "killParticipation",
      ].includes(stat.id) && c
    ) ?
      `${Math.round(c * 100)}%`
    : c
  c = stat.id === "timeCCingOthers" ? `${c}s` : c

  c = c ? c.toLocaleString() : c
  return c
}
