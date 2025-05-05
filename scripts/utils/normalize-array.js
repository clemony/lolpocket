export function normalizeArray(arr) {
  return Array.isArray(arr)
    ? arr.map((s) => capitalize(s))
    : []
}