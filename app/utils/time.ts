export function parseDate(
  input: Date | string | null | undefined
): Date | null {
  if (!input) return null
  return typeof input === "string" ? new Date(input) : input
}

import { parseAbsoluteToLocal } from "@internationalized/date"

export function parseISOStringToRelative(ISO: string) {
  const a = parseAbsoluteToLocal(ISO).toAbsoluteString()
  return useTimeAgo(a)
}

export function parseISOStringToDate(ISO: string) {
  const a = parseAbsoluteToLocal(ISO).toAbsoluteString()
  return useDateFormat(a, "M/D/YY h:MM a")
}

export function getISOWeek(date: Date): number {
  const d = new Date(
    Date.UTC(date.getFullYear(), date.getMonth(), date.getDate())
  )
  const dayNum = d.getUTCDay() || 7
  d.setUTCDate(d.getUTCDate() + 4 - dayNum)
  const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1))
  return Math.ceil(((+d - +yearStart) / 86400000 + 1) / 7)
}

export function getISOWeekKey(date: Date): string {
  const year = date.getUTCFullYear()
  const week = getISOWeek(date)
  return `${year}-W${String(week).padStart(2, "0")}`
}

export function formatTimeAgo(
  date: string | number,
  format?: "letter" | "short"
) {
  if (!date) return

  const timeAgo = useTimeAgo(date)
  if (format === "short") {
    return timeAgo.value.replace(" minutes", " min").replace(" seconds", " sec")
  } else {
    return timeAgo.value
      .replace(" minutes", "m")
      .replace(" hours", "h")
      .replace(" seconds", "s")
  }
}

export function formatHMS(ms) {
  const hours = Math.floor((ms / 3600000) % 24)

  let minutes = Math.floor((ms / 60000) % 60)
  if (hours) minutes.toString().padStart(2, "0")

  const seconds = Math.floor((ms / 1000) % 60)

  return `${hours ? `${hours.toString()}:` : ""}${
    minutes ? `${minutes}:` : "0:"
  }${seconds.toString().padStart(2, "0")}`
}

export function msToMin(ms: number) {
  return Math.floor((ms / 60) % 60)
}

export function secondsToTime(ms) {
  const hours = Math.floor((ms / 3600) % 24)

  let minutes = Math.floor((ms / 60) % 60)
  if (hours) minutes.toString().padStart(2, "0")

  const seconds = Math.floor(ms % 60)

  return `${hours ? `${hours.toString()}:` : ""}${
    minutes ? `${minutes}:` : "0:"
  }${seconds.toString().padStart(2, "0")}`
}

export function isStale(date?: number | string | Date | null, maxMinutes = 30) {
  if (!date) return true

  const updated =
    typeof date === "number" ? new Date(date)
    : typeof date === "string" ? new Date(date)
    : date

  const diff = (Date.now() - updated.getTime()) / 1000 / 60
  return diff > maxMinutes
}

export function getGreeting() {
  const hour = new Date().getHours()

  if (hour >= 5 && hour < 12) {
    return {
      greeting: "Good morning",
      icon: "fluent-mdl2:partly-cloudy-day",
    }
  }
  if (hour >= 12 && hour < 17) {
    return {
      greeting: "Good afternoon",
      icon: "si:clear-day-line",
    }
  }
  if (hour >= 17 && hour < 21) {
    return {
      greeting: "Good evening",
      icon: "ph:sun-horizon",
    }
  }
  return {
    greeting: "Good night",
    icon: "quill:moon",
  }
}
