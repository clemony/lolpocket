import type { DropdownMenuItem } from "@nuxt/ui"

export const colorModes: string[] = ["system", "light", "dim", "dark"]

export const themeIconClass: Record<string, string> = {
  dark: "scale-90 **:stroke-[2.3]",
  dim: "scale-120 **:stroke-[1.8]",
  light: "scale-120 **:stroke-[1.9] translate-x-px",
  system: "scale-90 **:stroke-[2.6]",
}

export interface QuoteData {
  quote: string
  source: string
  lpQuote?: string
}

export const modeQuote: Record<string, QuoteData> = {
  system: {
    quote: "I do not care at all.",
    lpQuote: "Pocket Picked.",
    source: "Orrn",
  },
  light: {
    quote: "If you can smile, you can be the light.",
    lpQuote: "Keep it in your pocket.",
    source: "Lux",
  },
  dawn: {
    quote: "The dawn has arrived. The day is upon us.",
    source: "Leona",
  },
  dim: {
    quote: "Dusk approaches. Embrace the night.",
    lpQuote: "Always Salty.",
    source: "Diana",
  },
  dark: {
    quote: "The truth lies in darkness.",
    lpQuote: "lolpocat comes at night.",
    source: "Zed",
  },
  frost: {
    quote: "Sometimes icy heart just needs warm smile.",
    source: "Braum",
  },
}
