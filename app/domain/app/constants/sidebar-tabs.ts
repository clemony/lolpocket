import type { TabsItem } from "@nuxt/ui"

export const sidebarTabItems: TabsItem[] = [
  {
    disabled: true,
    ui: {
      trigger: "hidden  absolute",
    },
  },
  {
    label: "Social",
    value: "social",
    slot: "social",
  },
  {
    label: "Settings",
    value: "settings",
    icon: "i-gear",
  },
  {
    value: "empty",
    disabled: true,
    ui: {
      trigger: "grow ring-0 opacity-0!  separator-tab",
    },
  },
  {
    label: "Search",
    value: "search",
    icon: "i-search",
  },
  {
    label: "Inbox",
    value: "inbox",
    icon: "i-mail",
  },
  {
    label: "Menu",
    value: "menu",
    icon: "i-menu",
  },
  {
    disabled: true,
    ui: {
      trigger: "hidden absolute",
    },
  },
]
