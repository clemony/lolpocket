import { getSummonerIcon } from "~/domain/utils/img"
import type { ProviderType } from "~~/shared/types"

export const supabaseProviders: SbProviderKey<string>[] = [
  "google",
  "discord",
  "twitch"
]

export const providers: Record<
  Exclude<ProviderKey<string>, "email">,
  ProviderType
> = {
  riot: {
    label: "riot",
    class: "scale-90 -translate-x-[0.5px]",
    icon: "i-riot",
    avatar: (icon: string) => getSummonerIcon(icon)
  },
  discord: {
    label: "discord",
    class: "",
    icon: "i-discord"
  },
  google: {
    label: "google",
    class: "",
    icon: "i-google"
  },
  twitch: {
    label: "twitch",
    class: "",
    icon: "i-twitch-fill"
  }
}
