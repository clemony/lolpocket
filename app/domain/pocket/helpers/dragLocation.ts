function unwrapValue(value: unknown): unknown {
  if (typeof value === "function") return unwrapValue(value())
  if (value && typeof value === "object" && "value" in value) {
    return unwrapValue((value as { value: unknown }).value)
  }
  return value
}

export function normalizeDragLocation(value: unknown, fallback = "folders") {
  const unwrapped = unwrapValue(value)

  if (typeof unwrapped === "number") return String(unwrapped)
  if (typeof unwrapped !== "string") return fallback

  const location = unwrapped.includes(":")
    ? unwrapped.slice(unwrapped.indexOf(":") + 1)
    : unwrapped

  return location && location !== "[object Object]" ? location : fallback
}

export function namespacedDragGroup(
  namespace: string,
  location: unknown,
  fallback = "folders"
) {
  return `${namespace}:${normalizeDragLocation(location, fallback)}`
}
