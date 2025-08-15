export function isMatchData(match: MatchData | null | undefined): match is MatchData {
  return match !== null && match !== undefined
}