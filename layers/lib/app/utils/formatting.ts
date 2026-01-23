export function normalizePatchNumber(patch: string): number {
  const [major, minor] = patch.split('.').map(Number)
  const formattedMinor = minor.toString().padStart(2, '0')
  return Number.parseFloat(`${major}.${formattedMinor}`)
}

export function normalizePatch(rawPatch) {
  return rawPatch.split('.').slice(0, 2).join('.')
}

export function formatLink(link: string) {
  return link.replace(' ', '_').replace('\'', '%27')
}

export function formatNumberPosition(num: number, returnNum?: boolean) {
  if (returnNum) {
    return (
      num === 1
        ? `st`
        : num === 2
          ? `${num}nd`
          : num === 3
            ? `${num}rd`
            : `${num}th`
    )
  }
  else {
    return (
      num === 1
        ? `st`
        : num === 2
          ? `nd`
          : num === 3
            ? `rd`
            : `th`
    )
  }
}

export function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1)
}
