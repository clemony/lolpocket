// Utility to normalize strings (capitalize first letter, lowercase the rest)
export function normalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
}

// Utility to normalize string arrays
export function normalizeArray(arr) {
  return arr.map(normalize)
}