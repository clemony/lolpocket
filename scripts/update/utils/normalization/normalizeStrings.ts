import { toValidIdentifier } from './validateIdentifier'

export function normalize(value: unknown): string {
  if (typeof value !== 'string' || !value.trim())
    return ''

  let str = value.replace(/_/g, ' ')
  str = str.replace(/per_second/gi, '/ s')
  str = str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()

  return str
}

export function normalizeArray(input: unknown): string[] {
  const arr = Array.isArray(input) ? input : [input]
  return arr
    .map(normalize)
    .filter((str): str is string => !!str && str.trim().length > 0)
}

export function normalizeName(input: string): string {
  if (typeof input !== 'string')
    return ''

  // Remove unwanted punctuation
  const cleaned = toValidIdentifier(input.replace(/\(.*\)/g, ''))

  // Capitalize every word
  const capitalizedWords = cleaned
    .split(' ')
    .filter(Boolean) // Remove empty strings
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())

  if (capitalizedWords.length === 0)
    return ''

  // Lowercase the first letter of the entire string
  return capitalizedWords.join('')
}
