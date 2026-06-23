import {
  LazyDashboardMenu,
  LazySettingsSidebar,
  LazySidebarInbox,
  LazySidebarMenu,
  LazySidebarSearch,
  LazySocialPanel,
} from "#components"
import type { TabsItem } from "@nuxt/ui"

export type TabComponent = TabsItem & { component?: Component | undefined }
export type TabRecord = Record<string, TabComponent>

export const sidebarTabItems: TabRecord = {
  hidden0: {
    disabled: true,
    ui: {
      trigger: "hidden  absolute",
    },
  },
  social: {
    label: "Social",
    value: "social",
    icon: "i-user",
    slot: "social",
    component: LazySocialPanel,
  },
  settings: {
    label: "Settings",
    value: "settings",
    icon: "i-gear",
    component: LazySettingsSidebar,
  },
  separator: {
    disabled: true,
    ui: {
      trigger: "grow ring-0 opacity-0!  separator-tab",
    },
  },
  search: {
    label: "Search",
    value: "search",
    icon: "i-search",
    component: LazySidebarSearch,
  },
  inbox: {
    label: "Inbox",
    value: "inbox",
    icon: "i-mail",
    component: LazySidebarInbox,
  },
  menu: {
    label: "Menu",
    value: "menu",
    icon: "i-menu",
    component: LazyDashboardMenu,
  },
  hidden2: {
    disabled: true,
    ui: {
      trigger: "hidden absolute",
    },
  },
}
