export function normalizePatchNumber(patch: string): number {
  const [major, minor] = patch.split(".").map(Number)
  const formattedMinor = String(minor ?? 0).padStart(2, "0")
  return Number.parseFloat(`${major}.${formattedMinor}`)
}

export function normalizePatch(rawPatch: string) {
  return rawPatch.split(".").slice(0, 2).join(".")
}

export function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

export const romanNumeral: Record<number, string> = {
  1: "I",
  2: "II",
  3: "III",
  4: "IV",
  5: "V",
  6: "VI",
  7: "VII",
  8: "VIII",
  9: "IX",
  10: "X",
}
