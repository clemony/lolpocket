import { LazyAuthModal } from "#components"
import type { ButtonProps, DropdownMenuItem } from "@nuxt/ui"
import { buildSummonerRootPath } from "~/domain/summoner/utils/route"
import { getSummonerIcon } from "~/domain/utils/img"
import { testingMenu } from "../admin/testingMenu"
export const userAccountItem = computed(() => {
  const { account } = storeToRefs(user())
  return {
    label: account.value?.name ?? account.value?.username ?? "Not Connected",
    avatar: {
      src: getSummonerIcon(account.value?.icon) ?? null,
      icon: "i-plug"
    },
    itemTrailingIcon: "i-gear"
  }
})

export const userProfileItems = computed(() => {
  if (!user().account) return []
  const root = buildSummonerRootPath(user().account)

  return [
    {
      label: "Match History",
      icon: "i-history",
      to: root,
      trailingIcon: "",
      value: "match-history"
    },
    {
      label: "Champions",
      icon: "i-lp-champ-circle",
      to: `${root}/champions`,
      trailingIcon: "",
      value: "champion-mastery"
    },
    {
      label: "Live Match",
      icon: "i-iconoir-antenna-signal",
      ui: {
        leadingIcon: "scale-92 **:stroke-[2.2]!  "
      },
      to: `${root}/live`,
      trailingIcon: "",
      value: "champion-mastery"
    }
  ]
})
export const userMenuItems = (
  command?: Record<string, () => void>
): ButtonProps[][] => {
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
        icon: "i-mail",
        label: "Inbox",
        to: "/inbox",
        ui: {
          itemLeadingIcon: "scale-98 "
        }
      }
    ],
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
          return login.open()
        },
        kbds: online.value ? ["shift", "meta", "Q"] : ["shift", "meta", "S"]
      }
    ]
  ].filter(Boolean) as ButtonProps[][]
}
