import type { ButtonProps } from "@nuxt/ui"
import { getSummonerIcon } from "~/domain/utils/img"

export function useUserAccountItem() {
  const { summoner, account } = storeToRefs(user())
  return computed(() => ({
    label: summoner.value?.name ?? account.value?.username ?? "Not Connected",
    avatar: {
      src: getSummonerIcon(summoner.value?.icon) ?? null,
      icon: "i-plug",
    },
    itemTrailingIcon: "i-gear",
  }))
}

export const userMenuItems = (close: () => void): ButtonProps[][] => {
  return [
    [
      {
        label: "Settings",
        icon: "i-gear",
        to: "/settings",
        ui: {
          itemLeadingIcon: "**:stroke-[2.1]",
        },
      },
    ],
  ].filter(Boolean) as ButtonProps[][]
}
