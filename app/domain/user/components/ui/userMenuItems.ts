import { LazyAuthModal } from "#components"
import type { ButtonProps, DropdownMenuItem } from "@nuxt/ui"
import { buildSummonerRootPath } from "~/domain/summoner/utils/route"
import { getSummonerIcon } from "~/domain/utils/img"
import { testingMenu } from "../admin/testingMenu"
import { useSignOut } from "../auth/useAuth"

export function useUserAccountItem() {
  const { summoner, account } = storeToRefs(user())
  return computed(() => ({
    label: summoner.value?.name ?? account.value?.username ?? "Not Connected",
    avatar: {
      src: getSummonerIcon(summoner.value?.icon) ?? null,
      icon: "i-plug"
    },
    itemTrailingIcon: "i-gear"
  }))
}

export const userMenuItems = (close: () => void): ButtonProps[][] => {
  const sbu = useSupabaseUser()
  const online = computed(() => sbu.value?.session_id)
  const overlay = useOverlay()
  const login = overlay.create(LazyAuthModal, {
    destroyOnClose: true,
    props: { type: "logIn" }
  })

  return [
    [
      {
        label: "Settings",
        icon: "i-gear",
        to: "/settings",
        ui: {
          itemLeadingIcon: "**:stroke-[2.1]"
        }
      }
    ],
    [
      {
        icon: online.value ? "i-lucide-log-out" : "i-lucide-log-in",
        label: online.value ? "Log out" : "Log in",
        ui: {
          itemLeadingIcon: "scale-90! **:stroke-[2.4]"
        },
        onClick: () => {
          close()
          if (online.value) useSignOut()
          return login.open()
        },
        kbds: online.value ? ["shift", "meta", "Q"] : ["shift", "meta", "S"]
      }
    ]
    /*     [
      {
        icon: online.value ? "i-lucide-log-out" : "i-lucide-log-in",
        label: "Log out",
        ui: {
          itemLeadingIcon: "scale-90! **:stroke-[2.4]"
        },
        onClick: () => {
          useSignOut()
        },
        kbds: online.value ? ["shift", "meta", "Q"] : ["shift", "meta", "S"]
      }
    ] */
  ].filter(Boolean) as ButtonProps[][]
}
