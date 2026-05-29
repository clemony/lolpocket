import { getSummonerIcon } from "~/domain/utils/img"

export const supabaseProviders: SbProviderKey<string>[] = [
  "google",
  "discord",
  "twitch"
]

export interface ProviderType {
  label: ProviderKey<string>
  class: string
  icon: string
  avatar?: string | ((icon: string) => string)
}
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
    icon: "i-twitch"
  }
}
