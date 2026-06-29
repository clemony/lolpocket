import type { DropdownMenuItem } from "@nuxt/ui"

export const colorModes: string[] = ["system", "light", "dim", "dark"]

export const themeIconClass: Record<string, string> = {
  dark: "scale-90 **:stroke-[11%]!",
  dim: "scale-120 **:stroke-[7.5%]!",
  light: "scale-120 **:stroke-[1.9] translate-x-px",
  system: "scale-90 **:stroke-[2.6]",
}

export interface QuoteData {
  quote: string
  source: string
  lpQuote?: string
}

const themeIconSvg: Record<string, string> = {
  dark: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="none" stroke="#b3b3b3" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401"/></svg>',
  dim: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="none" stroke="#b3b3b3" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 2v2m2.837 12.385a6 6 0 1 1-7.223-7.222c.624-.147.97.66.715 1.248a4 4 0 0 0 5.26 5.259c.589-.255 1.396.09 1.248.715M16 12a4 4 0 0 0-4-4m7-3l-1.256 1.256M20 12h2"/></svg>',
  light:
    '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><g fill="none" stroke="#b3b3b3" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><circle cx="12" cy="12" r="4"/><path d="M12 3v1m0 16v1m-9-9h1m16 0h1m-2.636-6.364l-.707.707M6.343 17.657l-.707.707m0-12.728l.707.707m11.314 11.314l.707.707"/></g></svg>',
  system:
    '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="none" stroke="#b3b3b3" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 2v10m6.4-5.4a9 9 0 1 1-12.77.04"/></svg>',
}

export function getThemeIcon(theme: string) {
  if (!themeIconSvg[theme]) return
  return `url("data:image/svg+xml,${encodeURIComponent(themeIconSvg[theme])}")`
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
