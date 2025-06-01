export function normalize(str: unknown): string | null {
  if (typeof str !== 'string') return null;
  let string = str.replace('_', ' ')
 string = string.charAt(0).toUpperCase() + string.slice(1).toLowerCase()
  string = string.replace('per_second', '/ s')
 return string
}

// Utility to normalize string arrays
export function normalizeArray(arr) {
  return arr.map(normalize)
}