export type MatchPositionKey =
  | "top"
  | "jungle"
  | "middle"
  | "bottom"
  | "support"
export const matchPositionKey: string[] = [
  "top",
  "jungle",
  "middle",
  "bottom",
  "support"
] satisfies MatchPositionKey[]

export function normalizePosition(pos: string): MatchPositionKey {
  switch (pos.toLowerCase()) {
    case "top":
      return "top"
    case "jungle":
      return "jungle"
    case "middle":
    case "mid":
      return "middle"
    case "bottom":
    case "bot":
      return "bottom"
    case "utility":
    case "support":
      return "support"
    default:
      return "support" // safe fallback
  }
}

export function getPositionStat(
  map: Record<string, StatDetail>,
  position: string
): StatDetail {
  if (!map[position]) {
    map[position] = { games: 0, win: 0 }
  }
  return map[position]
}
