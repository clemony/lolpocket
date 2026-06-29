import {
  getThemeAccentOption,
  themeAccentOptions,
} from "~/domain/user/utils/theme/themeAccent"
import { colorModes, themeIconClass } from "~/domain/user/utils/theme/themeBase"

export const themeMenu = () => {
  const themePreference = useThemePreference()
  // const { preference, value: mode } = useColorMode()
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
      base: cn(
        "relative h-10 rounded-xl p-0!",
        accent.value === currentAccent.value.value ? "pointer-events-none" : ""
      ),
      label: "capitalize",
    },
  }))

  const modeItems = colorModes.map((mode) => ({
    value: mode,
    icon: `i-${mode}`,
    label: mode,
    type: "radio" as const,
    slot: "theme" as const,
    //onSelect: () => (themePreference.value = mode),
    ui: {
      base: cn(
        "h-14 rounded-xl p-1"
        //mode === preference ? "pointer-events-none" : ""
      ),
      leadingIcon: themeIconClass[mode],
      label: "capitalize",
    },
  }))
  return {
    theme: modeItems,
    accent: accentItems,
  }
}
