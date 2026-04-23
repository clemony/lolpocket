import {
  LazyAccountSettings,
  LazyAppSettings,
  LazyCommunicationSettings,
  LazyFeedSettings,
  LazyProfileSettings,
  LazyThemeSettings
} from "#components"
import type { TabsItem, TabsProps } from "@nuxt/ui"
import type { UseRefHistoryReturn } from "@vueuse/core"
import type { CommandItem } from "../../../layout/navigation/command/build/useCommandGroups"
import { useCommandGroups } from "../../../layout/navigation/command/build/useCommandGroups"
import { saveAccount, saveProfile } from "./formData"

interface SettingsContent {
  component: Component
  onSubmit?: (
    params: Record<string, UseRefHistoryReturn<string, string>>
  ) => Promise<void>
}

export const tabContent: Record<string, SettingsContent> = {
  App: {
    component: LazyAppSettings,
    onSubmit: (p) => saveAccount(p)
  },
  Account: {
    component: LazyAccountSettings,
    onSubmit: (p) => saveAccount(p)
  },
  Profile: {
    component: LazyProfileSettings,
    onSubmit: (p) => saveProfile(p)
  },
  Theme: {
    component: LazyThemeSettings,
    onSubmit: (p) => saveAccount(p)
  },
  Feed: {
    component: LazyFeedSettings,
    onSubmit: (p) => saveAccount(p)
  },
  Communication: {
    component: LazyCommunicationSettings,
    onSubmit: (p) => saveAccount(p)
  }
}

export const items = computed(() => {
  const { groups } = useCommandGroups()
  return (
    (groups.value
      .find((i) => i.id === "help")
      ?.items?.find((i) => i.id === "/settings")
      ?.children?.map((i: CommandItem) => ({
        label: i.label,
        value: i.label,
        icon: i.icon
      })) as TabsItem[]) ?? []
  )
})
