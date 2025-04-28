export function isSimplifiedMatchData(match: SimplifiedMatchData | null | undefined): match is SimplifiedMatchData {
  return match !== null && match !== undefined
}