import type { ClassValue } from "clsx"
import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export type TwRecord = Record<string, string>

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export type UiValue = ClassValue | Record<string, string> | undefined
export type UiProps = Record<string, UiValue>

function isPlainObject(value: unknown): value is UiProps {
  return typeof value === "object" && value !== null && !Array.isArray(value)
}

function mergeUiProps(...sources: Array<UiProps | undefined>) {
  const result: UiProps = {}

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
        result[key] = mergeUiProps(currentValue, nextValue)
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

export function mergeUi<T extends UiProps>(
  ...sources: Array<Partial<T> | undefined>
): Partial<T> {
  return mergeUiProps(...sources) as Partial<T>
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

export const twIndex: Record<number, HTMLAttributes["class"]> = {
  0: "z-0",
  1: "z-1",
  2: "z-2",
  3: "z-3",
  4: "z-4",
  5: "z-5",
  6: "z-6",
  7: "z-7",
  8: "z-8",
  9: "z-9"
}
