import type { ClassValue } from "clsx"
import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export type TwRecord = Record<string, string>

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

type UiValue = ClassValue | Record<string, unknown> | undefined
type UiObject = Record<string, UiValue>

function isPlainObject(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value)
}

function mergeUiObject(...sources: Array<Record<string, unknown> | undefined>) {
  const result: Record<string, unknown> = {}

  for (const source of sources) {
    if (!source) continue

    for (const [key, nextValue] of Object.entries(source)) {
      if (nextValue === undefined) continue

      const currentValue = result[key]

      if (currentValue === undefined) {
        result[key] = nextValue
        continue
      }

      if (isPlainObject(currentValue) && isPlainObject(nextValue)) {
        result[key] = mergeUiObject(currentValue, nextValue)
        continue
      }

      if (!isPlainObject(currentValue) && !isPlainObject(nextValue)) {
        result[key] = cn(currentValue as ClassValue, nextValue as ClassValue)
        continue
      }

      result[key] = nextValue
    }
  }

  return result
}

export function mergeUi<T extends Record<string, unknown>>(
  ...sources: Array<Partial<T> | undefined>
): Partial<T> {
  return mergeUiObject(...sources) as Partial<T>
}

export function cssVar(name: string) {
  return getComputedStyle(document.documentElement)
    .getPropertyValue(name)
    .trim()
}

export const twSize: TwRecord = {
  xs: "size-xs",
  sm: "size-sm",
  md: "size-md",
  lg: "size-lg",
  xl: "size-xl",
  "2xl": "size-2xl"
}

export const twStatusSize: TwRecord = {
  xs: "size-1",
  sm: "size-1.5",
  md: "status-md",
  lg: "status-lg",
  xl: "status-xl"
}
