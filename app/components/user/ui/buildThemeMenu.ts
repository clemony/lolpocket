import type { ButtonProps, DropdownMenuItem } from "@nuxt/ui"
import {
  colorModeIconClass,
  colorModes
} from "~~/layers/ui/app/config/colorMode"
import {
  getThemeAccentOption,
  themeAccentOptions
} from "~~/layers/ui/app/config/themeAccent"

export const themeMenu = computed<{
  trigger: ButtonProps
  items: DropdownMenuItem[][]
}>(() => {
  const themePreference = useThemePreference()
  const { preference, value: mode } = useColorMode()
  const themeAccent = useThemeAccentPreference()
  const currentAccent = computed(() => getThemeAccentOption(themeAccent.value))

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
  /*
    children: */
  return {
    trigger: {
      label: "Theme",
      icon: themePreference.value,
      ui: {
        leadingIcon: colorModeIconClass[themePreference.value],
        content:
          "w-54 [&_div]:[&_div]:first:grid-cols-2!  [&_div]:[&_div]:first:gap-1 [&_div]:[&_div]:last:grid-cols-5! [&_div]:[&_div]:pb-2 [&_div]:[&_div]:auto-rows-auto  [&_div]:[&_div]:grid!  [&_div]:[&_div]:px-2 [&_div]:[&_div]:*:first:col-span-full [&_div]:[&_div]:*:first:h-7",
        label: "capitalize"
      }
    },
    items: [
      [
        {
          label: "Theme",
          ui: {
            itemLabel: "font-semibold -ml-px text-pc/60"
          },
          type: "label" as const
        },
        ...modeItems
      ] as DropdownMenuItem[],
      [
        {
          label: "Accent",
          ui: {
            itemLabel: "font-semibold -ml-px text-pc/60"
          },
          type: "label" as const
        },
        ...accentItems
      ] as DropdownMenuItem[]
    ]
  }
})
