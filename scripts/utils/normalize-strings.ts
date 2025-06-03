import { toValidIdentifier } from "./validate-identifier"

export function normalize(str: unknown): string | null {
  if (typeof str !== "string") return null
  let string = str.replace("_", " ")
  string = string.charAt(0).toUpperCase() + string.slice(1).toLowerCase()
  string = string.replace("per_second", "/ s")
  return string
}

export function normalizeName(input: string): string {
  if (typeof input !== "string") return ""

  // Remove unwanted punctuation
  const cleaned = toValidIdentifier(input.replace(/\(.*\)/g, ""))

  // Capitalize every word
  const capitalizedWords = cleaned
    .split(" ")
    .filter(Boolean) // Remove empty strings
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())

  if (capitalizedWords.length === 0) return ""

  // Lowercase the first letter of the entire string
  return capitalizedWords.join("")
}

export function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

// Utility to normalize string arrays
export function normalizeArray(arr) {
  return arr.map(normalize)
}
