export function normalizeRole(role?: string) {
  if (!role) return "unknown"

  const r = role.toLowerCase()

  if (r === "utility") return "support"
  if (r === "none") return "unknown"

  return r
}

export function getRoleStat(
  map: Record<string, StatDetail>,
  role: string
): StatDetail {
  if (!map[role]) {
    map[role] = { games: 0, win: 0 }
  }
  return map[role]
}
