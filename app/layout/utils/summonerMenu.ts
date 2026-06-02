import { newPocket } from "~/domain/pocket/utils/newPocket"
import type { DropdownRouteItem } from "~/types/route.types"

export const summonerMenu = (close: () => void) => {
  const { settings } = storeToRefs(user())
  return computed<DropdownRouteItem[]>(
    () =>
      [
        {
          label: "Pockets",
          type: "label",
          value: "backpack-label",
          items: [
            {
              label: "Backpack",
              icon: "i-folders",
              value: "backpack-pocket",
              trailingIcon: "",
              to: "/backpack/folders"
            },
            {
              label: "New Pocket",
              icon: "i-lucide-plus", //"i-ui-none",
              value: "new-pocket",
              ui: {
                trailingIcon: "**:stroke-[2.8]"
              },
              onSelect(event: Event) {
                newPocket()
                close()
              }
            }
          ]
        },
        settings.value?.favorite_summoners.length
          ? {
              label: "Following",
              type: "label",
              icon: "i-heart",
              value: "following-label",
              items: settings.value?.favorite_summoners.map((puuid: string) => {
                const summoner = async () =>
                  await summonerStore().resolveOrFetch(puuid)
                return {}
              })
            }
          : {}
      ].filter(Boolean) as DropdownRouteItem[]
  )
}
