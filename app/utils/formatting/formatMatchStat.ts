export function formatMatchStat(stat: number, name: string) {
  const a = stat

  if (a === 0) return "⎯"

  const fix = ["kda"]
  // units
  const p = [
    "Team damage percentage",
    "Damage taken of team total",
    "kill participation",
  ]

  if (fix.includes(name)) return (Math.round(a * 100) / 100).toLocaleString()
  else if (p.includes(name)) return `${Math.round(a * 100)}%`
  else if (name === "effective healing and shielding")
    return Math.round(a).toLocaleString()
  else if (name === "Crowd-control duration on enemies") return `${a}s`
  else if (a) return a.toLocaleString()
}
