import type { DropdownMenuItem } from "@nuxt/ui"

export const colorModes: string[] = ["system", "light", "dim", "dark"]

export const colorModeIconClass: Record<string, string> = {
  dark: "**:stroke-[2.3]",
  dim: "scale-120",
  light: "scale-120",
  system: "scale-90 **:stroke-[2.6]",
}
export const colorModeTabs = computed<DropdownMenuItem[]>(() => {
  const mode = useColorMode()
  return [
    {
      checked: mode.value === "system",
      icon: "lucide:power",
      label: "System",
      onUpdateChecked(checked: boolean) {
        mode.value = "system"
      },
      slot: "theme" as const,
      ui: {
        itemLeadingIcon: "scale-90  **:stroke-[2.6]",
      },
    },
    {
      checked: mode.value === "light",
      icon: "i-lucide-sun-medium",
      label: "Light",
      onUpdateChecked(checked: boolean) {
        mode.value = "light"
      },
      slot: "theme" as const,
      ui: {
        itemLeadingIcon: "scale-130 translate-y-0.25",
      },
    },
    {
      checked: mode.value === "dim",
      icon: "si:sun-set-line",
      label: "Dim",
      onUpdateChecked(checked: boolean) {
        mode.value = "dim"
      },
      slot: "theme" as const,
      ui: {
        itemLeadingIcon: "scale-120  **:stroke-[1.84]",
      },
    },
    {
      checked: mode.value === "dark",
      class: " **:stroke-[2.5]",
      icon: "dark",
      label: "Dark",
      onUpdateChecked(checked: boolean) {
        mode.value = "dark"
      },
      slot: "theme" as const,
    },
  ]
})

export interface QuoteData {
  quote: string
  source: string
}

export const modeQuote: Record<string, QuoteData> = {
  system: {
    quote: "I do not care at all.",
    source: "Orrn",
  },
  light: {
    quote: "If you can smile, you can be the light.",
    source: "Lux",
  },
  dawn: {
    quote: "The dawn has arrived. The day is upon us.",
    source: "Leona",
  },
  dim: {
    quote: "Dusk approaches. Embrace the night.",
    source: "Diana",
  },
  dark: {
    quote: "The truth lies in darkness.",
    source: "Zed",
  },
  frost: {
    quote: "Sometimes icy heart just needs warm smile.",
    source: "Braum",
  },
}
