import { getEmptyAccount } from "#shared/schema"
import { accountUpdate } from "~/domain/user/composables/accountUpdate"
import type { ThemeAccent } from "~/domain/user/utils/theme/themeAccent"
import {
  defaultThemeAccent,
  normalizeThemeAccent,
} from "~/domain/user/utils/theme/themeAccent"
import { colorModes } from "~/domain/user/utils/theme/themeBase"

export function normalizeThemePreference(value?: string) {
  return colorModes.includes(value ?? "") ? value! : "system"
}
export function useSystemThemeValue() {
  const preferred = usePreferredColorScheme()

  return computed(() => (preferred.value === "dark" ? "dark" : "light"))
}

function ensureUserAccount() {
  user().account ??= getEmptyAccount() as unknown as Account
  return user().account as Account
}

export function useThemePreference() {
  const { theme } = storeToRefs(localStore())

  return computed({
    get: () => normalizeThemePreference(theme.value),
    set: (value: string) => {
      const preference = normalizeThemePreference(value)

      theme.value = preference
    },
  })
}

export function useResolvedThemePreference() {
  const themePreference = useThemePreference()
  const systemTheme = useSystemThemeValue()

  return computed(() =>
    themePreference.value === "system"
      ? systemTheme.value
      : themePreference.value
  )
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
    },
  })
}
