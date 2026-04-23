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
    trailingIcon: "i-flowbite-quote-outline"
  },
  RiotOfficial: {
    label: "Riot Official",
    id: "RiotOfficial",
    trailingIcon: "i-lp-riot-circle"
  },
  Esports: {
    label: "Esports",
    id: "Esports",
    trailingIcon: "i-ion-trophy-outline",
    ui: { leadingIcon: "**:stroke-[42]" }
  },
  Gameplay: {
    label: "Gameplay",
    id: "Gameplay",
    trailingIcon: "i-cil-gamepad",
    ui: { leadingIcon: "**:stroke-[8.4] **:stroke-[currentColor]" }
  },
  News: {
    label: "News",
    id: "News",
    trailingIcon: "i-trailingIconamoon-news"
  },
  Humor: {
    label: "Humor",
    id: "Humor",
    trailingIcon: "i-protrailingIcons-emoji-laughter",
    ui: { leadingIcon: "scale-110" }
  }
}
