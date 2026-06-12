import type { ButtonProps } from "@nuxt/ui"

export interface FeedProps {
  label: string
  id: string
  trailingIcon: string
  ui?: ButtonProps["ui"]
}

export const feedCategories: Record<FeedKey, FeedProps> = {
  Discussion: {
    label: "Discussion",
    id: "Discussion",
    trailingIcon: "i-flowbite-quote-outline",
    ui: { trailingIcon: "scale-116" }
  },
  RiotOfficial: {
    label: "Riot Official",
    id: "RiotOfficial",
    trailingIcon: "i-lp-riot-circle"
  },
  Esports: {
    label: "Esports",
    id: "Esports",
    trailingIcon: "i-proicons-trophy",
    ui: { trailingIcon: "**:stroke-[7.5%]! scale-110" }
  },
  Gameplay: {
    label: "Gameplay",
    id: "Gameplay",
    trailingIcon: "i-cil-gamepad",
    ui: { trailingIcon: "**:stroke-[9.4] **:stroke-[currentColor]" }
  },
  News: {
    label: "News",
    id: "News",
    trailingIcon: "i-iconamoon-news"
  },
  Humor: {
    label: "Humor",
    id: "Humor",
    trailingIcon: "i-proicons-emoji-laughter",
    ui: { trailingIcon: "scale-110 **:stroke-[7.5%]! " }
  }
}
