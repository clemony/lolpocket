export function normalizePatchNumber(patch: string): number {
  const [major, minor] = patch.split('.').map(Number)
  const formattedMinor = String(minor ?? 0).padStart(2, '0')
  return Number.parseFloat(`${major}.${formattedMinor}`)
}

export function normalizePatch(rawPatch: string) {
  return rawPatch.split('.').slice(0, 2).join('.')
}

export function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1)
}
