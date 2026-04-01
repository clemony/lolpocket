import { LazyLogin } from "#components"
import type { DropdownMenuItem } from "@nuxt/ui"
import { buildSummonerRootPath } from "~/domain/summoner/utils/route"
import { getSummonerIcon } from "~/domain/utils/img"
import {
  colorModeIconClass,
  colorModes
} from "~~/layers/ui/app/config/colorMode"
import {
  getThemeAccentOption,
  themeAccentOptions
} from "~~/layers/ui/app/config/themeAccent"
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

export const userMenuItems = computed(() => {
  const themePreference = useThemePreference()
  const { preference, value: mode } = useColorMode()
  const themeAccent = useThemeAccentPreference()
  const sbu = useSupabaseUser()
  const online = computed(() => sbu.value?.session_id)
  const root = buildSummonerRootPath(user().account)
  const currentAccent = computed(() => getThemeAccentOption(themeAccent.value))

  const command = inject<Record<string, () => void>>("command")

  function close() {
    if (command && command.close) command.close()
  }

  const overlay = useOverlay()
  const login = overlay.create(LazyLogin)

  const accentItems = themeAccentOptions.map((accent) => ({
    value: accent.value,
    label: accent.label,
    champion: accent.champion,
    description: accent.description,
    type: "radio" as const,
    slot: "accent" as const,
    onSelect: () => (themeAccent.value = accent.value),
    ui: {
      item: cn(
        "relative h-10 rounded-xl p-0!",
        accent.value === currentAccent.value.value ? "pointer-events-none" : ""
      ),
      itemLabel: "capitalize"
    }
  }))

  const modeItems = colorModes.map((mode) => ({
    value: mode,
    icon: `i-${mode}`,
    label: mode,
    type: "radio" as const,
    slot: "theme" as const,
    onSelect: () => (themePreference.value = mode),
    ui: {
      item: cn(
        "h-14 rounded-xl p-1",
        mode === preference ? "pointer-events-none" : ""
      ),
      itemLeadingIcon: colorModeIconClass[mode],
      itemLabel: "capitalize"
    }
  }))

  return [
    [testingMenu.value],
    [
      {
        label: "Match History",
        icon: "i-lucide-calendar-fold",
        to: root
      }
    ],
    [
      {
        icon: "i-mail",
        label: "Inbox",
        slot: "inbox" as const,
        ui: {
          itemLeadingIcon: "scale-98 "
        }
      }
    ],
    [
      {
        label: "Theme",
        icon: themePreference.value,
        ui: {
          itemLeadingIcon: colorModeIconClass[themePreference.value],
          content:
            "w-54 [&_div]:[&_div]:first:grid-cols-2!  [&_div]:[&_div]:first:gap-1 [&_div]:[&_div]:last:grid-cols-5! [&_div]:[&_div]:pb-2 [&_div]:[&_div]:auto-rows-auto  [&_div]:[&_div]:grid!  [&_div]:[&_div]:px-2 [&_div]:[&_div]:*:first:col-span-full [&_div]:[&_div]:*:first:h-7",
          itemLabel: "capitalize"
        },
        children: [
          [
            {
              label: "Theme",
              ui: {
                itemLabel: "font-semibold -ml-px text-pc/60"
              },
              type: "label" as const
            },
            ...modeItems
          ],
          [
            {
              label: "Accent",
              ui: {
                itemLabel: "font-semibold -ml-px text-pc/60"
              },
              type: "label" as const
            },
            ...accentItems
          ]
        ]
      } as unknown as DropdownMenuItem,
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
        onSelect: () => {
          close()
          return login.open()
        },
        kbds: online.value ? ["shift", "meta", "Q"] : ["shift", "meta", "S"]
      }
    ]
  ] as unknown as DropdownMenuItem[][]
})
