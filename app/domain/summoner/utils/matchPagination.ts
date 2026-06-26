export const MATCH_HISTORY_PAGE_SIZE = 20

export function shouldFetchInitialMatchPage({
  endOfHistory = false,
  localCount,
}: {
  endOfHistory?: boolean
  localCount: number
}) {
  return localCount < MATCH_HISTORY_PAGE_SIZE && !endOfHistory
}

export function mergeUniqueMatchesById<T extends { matchId: string }>(
  current: T[],
  incoming: T[],
  direction: "append" | "prepend"
) {
  const seen = new Set(current.map((match) => match.matchId))
  const uniqueIncoming = incoming.filter((match) => {
    if (seen.has(match.matchId)) return false
    seen.add(match.matchId)
    return true
  })

  return direction === "prepend"
    ? [...uniqueIncoming, ...current]
    : [...current, ...uniqueIncoming]
}
