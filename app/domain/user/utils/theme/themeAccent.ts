import type { StyleValue } from "vue"

export const defaultThemeAccent = "diminuendo"

export const themeAccentOptions: AccentItem[] = [
  {
    value: "onslaught",
    label: "Onslaught",
    description: "Blood is the wine of victory.",
    champion: "Sion",
  },
  {
    value: "cask",
    label: "Cask",
    description: "Need some grog...",
    champion: "Gragas",
  },
  {
    value: "spark",
    label: "Spark",
    description: "Let's light it up!",
    champion: "Lux",
  },
  {
    value: "legends",
    label: "Legends",
    champion: undefined,
    description: "Peak.",
    icon: "i-lp-riot",
  },
  {
    value: "diminuendo",
    label: "Diminuendo",
    description: "Curtains up. I'm ready.",
    champion: "Sona",
  },
  {
    value: "encore",
    label: "Encore",
    description: "Sit down and listen up!",
    champion: "Seraphine",
  },
  {
    value: "whimsy",
    label: "Whimsy",
    description: "Yup, that tasted purple.",
    champion: "Lulu",
  },
  {
    value: "steel",
    label: "Steel",
    description: "Elegance never goes out of fashion.",
    champion: "Camille",
  },
  {
    value: "shadow",
    label: "Shadow",
    description: "Balance is a fool's master.",
    champion: "Zed",
  },
  {
    value: "flow",
    label: "Flow",
    description: "Wash them away.",
    champion: "Nami",
  },
  {
    value: "contaminate",
    label: "Contaminate",
    description: "Aged like a fine egg.",
    champion: "Twitch",
  },
] as const

export type ThemeAccent = (typeof themeAccentOptions)[number]["value"]

export interface AccentItem {
  value: string
  label?: string
  champion?: string
  icon?: string
  style?: StyleValue[]
  description?: string
  onClick?: (e: MouseEvent) => void
  ui?: {
    base?: HTMLAttributes["class"]
    label?: HTMLAttributes["class"]
  }
}
export function normalizeThemeAccent(value?: string): ThemeAccent {
  return (
    themeAccentOptions.find((accent) => accent.value === value)?.value ??
    defaultThemeAccent
  )
}

export function getThemeAccentOption(value?: string) {
  const accent = normalizeThemeAccent(value)
  return (
    themeAccentOptions.find((option) => option.value === accent) ??
    themeAccentOptions[0]
  )
}
