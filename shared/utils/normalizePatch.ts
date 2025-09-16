export function normalizePatchNumber(patch: string): number {
  const [major, minor] = patch.split('.').map(Number)
  const formattedMinor = minor.toString().padStart(2, '0')
  return Number.parseFloat(`25.${formattedMinor}`)
}
