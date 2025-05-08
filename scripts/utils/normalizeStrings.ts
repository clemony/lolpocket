export function normalize(str: unknown): string | null {
  if (typeof str !== 'string') return null;
  const string = str.replace('_', ' ')
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

// Utility to normalize string arrays
export function normalizeArray(arr) {
  return arr.map(normalize)
}