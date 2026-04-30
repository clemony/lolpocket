import { getEmptyAccount, getEmptySettings } from "#shared/schema"
import type { ThemeAccent } from "~/components/user/settings/theme/themeAccent"
import {
  defaultThemeAccent,
  normalizeThemeAccent
} from "~/components/user/settings/theme/themeAccent"
import { colorModes } from "~/components/user/settings/theme/themeBase"
import { accountUpdate } from "~/composables/account/accountUpdate"

export function normalizeThemePreference(value?: string) {
  return colorModes.includes(value ?? "") ? value! : "system"
}
export function useSystemThemeValue() {
  const preferred = usePreferredColorScheme()

  return computed(() => (preferred.value === "dark" ? "dark" : "light"))
}

function ensureUserSettings() {
  user().settings ??= getEmptySettings() as unknown as Settings
  return user().settings as Settings
}

function ensureUserAccount() {
  user().account ??= getEmptyAccount() as unknown as Account
  return user().account as Account
}

export function useThemePreference() {
  const colorMode = useColorMode()
  /*
  return computed({
    get: () =>
      normalizeThemePreference(user().settings?.theme ?? colorMode.preference),
    set: (value: string) => {
      const preference = normalizeThemePreference(value)
      const settings = ensureUserSettings()

      settings.theme = preference
      colorMode.preference = preference
    }
  }) */
}

export function useThemeAccentPreference() {
  return computed<ThemeAccent>({
    get: () => normalizeThemeAccent(user().account?.color),
    set: (value) => {
      const accent = normalizeThemeAccent(value ?? defaultThemeAccent)
      const account = ensureUserAccount()

      if (account.color === accent) return

      account.color = accent

      if (useSupabaseUser().value)
        void accountUpdate({ color: accent }, { silent: true })
    }
  })
}
