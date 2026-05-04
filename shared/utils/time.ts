export type InstantString = string

interface TemporalInstantLike {
  epochMilliseconds: number
  toString: (options?: { smallestUnit?: "millisecond" }) => string
}

interface TemporalLike {
  Instant?: {
    from: (value: string) => TemporalInstantLike
  }
  Now?: {
    instant: () => TemporalInstantLike
  }
}

function getTemporal(): TemporalLike | undefined {
  return (globalThis as { Temporal?: TemporalLike }).Temporal
}

function formatInstant(instant: TemporalInstantLike): InstantString {
  return instant.toString({ smallestUnit: "millisecond" })
}

export function nowInstantString(): InstantString {
  const Temporal = getTemporal()
  if (Temporal?.Now?.instant) return formatInstant(Temporal.Now.instant())

  return new Date().toISOString()
}

export function toInstantString(
  value: Date | number | string | null | undefined
): InstantString | null {
  if (value == null || value === "") return null

  const source =
    value instanceof Date ? value.toISOString()
    : typeof value === "number" ? new Date(value).toISOString()
    : value

  const Temporal = getTemporal()
  if (Temporal?.Instant?.from) {
    try {
      return formatInstant(Temporal.Instant.from(source))
    } catch {
      // Fall back to Date parsing below for legacy date strings while we migrate.
    }
  }

  const date = new Date(source)
  return Number.isNaN(date.getTime()) ? null : date.toISOString()
}

export function instantEpochMilliseconds(
  value: Date | number | string | null | undefined
): number {
  if (value == null || value === "") return Number.NaN
  if (typeof value === "number") return value
  if (value instanceof Date) return value.getTime()

  const Temporal = getTemporal()
  if (Temporal?.Instant?.from) {
    try {
      return Temporal.Instant.from(value).epochMilliseconds
    } catch {
      // Fall back to Date parsing below for legacy date strings while we migrate.
    }
  }

  return new Date(value).getTime()
}

export function compareInstantStrings(
  a: Date | number | string | null | undefined,
  b: Date | number | string | null | undefined
): number {
  return instantEpochMilliseconds(a) - instantEpochMilliseconds(b)
}
