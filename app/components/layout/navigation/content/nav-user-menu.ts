import { getSummonerIcon } from "~/domain/utils/img"
import {
  colorModeIconClass,
  colorModes,
} from "~~/layers/ui/app/config/colorMode"

export const userMenu = computed(() => {
  const cMode = useColorMode()
  const { account } = storeToRefs(user())
  const sbu = useSupabaseUser()
  function useEmit(name: string) {}
  const online = computed(() => sbu.value?.session_id)
  return [
    [
      {
        label:
          account.value?.name ?? account.value?.username ?? "Not Connected",
        avatar: {
          src: getSummonerIcon(account.value?.icon) ?? null,
          icon: "i-plug",
        },
        itemTrailingIcon: "i-gear",
      },
    ],
    [
      {
        icon: "i-mail",
        label: "Inbox",
        slot: "inbox" as const,
        ui: {
          itemLeadingIcon: "scale-98 **:stroke-[1.9]",
        },
      },
    ],
    [
      {
        icon: "i-external",
        label: "Resources",
        ui: {
          content: "w-54",
          leadingIcon: "scale-100",
        },
        children: resourceNav,
      },
      {
        label: "Support",
        icon: "i-lucide-circle-question-mark",
        children: helpNav.filter((i) => i !== undefined),
        ui: {
          content: "w-54",
        },
      },
    ],
    [
      {
        label: cMode.value || "System",
        icon: cMode.preference,
        ui: {
          itemLeadingIcon: colorModeIconClass[cMode.preference],
          content: "w-54 ",
          itemLabel: "capitalize",
        },
        children: colorModes.map((c) => ({
          value: c,
          icon: `i-${c}`,
          label: c,
          variant: "solid",
          ui: {
            item: cn(
              c === "system" ? cMode.value : c,
              "rounded-md border border-p3 bg-p0 fx-1 not-first:mt-0.5 hover:bg-(--ui-p1)",
            ),
            itemLeadingIcon: colorModeIconClass[c],
            itemLabel: "capitalize",
          },
        })),
      },
      {
        label: "Settings",
        icon: "i-gear",
        to: "/settings",
        ui: {
          itemLeadingIcon: "**:stroke-[2.1]",
        },
      },
    ],
    [
      {
        icon: online.value ? "i-lucide-log-out" : "i-lucide-log-in",
        label: online.value ? "Log out" : "Log in",
        ui: {
          itemLeadingIcon: "scale-90! **:stroke-[2.2]",
        },
        onClick: () => useEmit("openLogIn"),
        kbds: online.value ? ["shift", "meta", "Q"] : ["shift", "meta", "S"],
      },
    ],
  ]
})
