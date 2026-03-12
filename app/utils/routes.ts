import type { AvatarProps, ButtonProps, Locale } from "@nuxt/ui"
import { de, en, es, fr, zh_tw } from "@nuxt/ui/locale"
import {
  externalResources,
  officialResources,
} from "~/domain/lp/external/externalResources"
import { newPocket } from "~/domain/pocket/newPocket"
import { buildSummonerRootPath } from "~/domain/summoner/utils/route"

export const localeOptions: Locale<any>[] = [de, en, es, fr, zh_tw]

export const libraryList = ["champions", "items", "runes", "spells"]

const ui = {
  leadingIcon: "hidden",
  trailingIcon: "text-n5 align-top",
  label: "",
}
export const userNav = computed(() => {
  const { account } = storeToRefs(user())

  const slugRoot = buildSummonerRootPath(account.value)

  return [
    /* -------------- PROFILE LINKS -------------- */
    {
      icon: "i-history",
      label: "Match History",
      trailingIcon: "i-link",
      to: slugRoot,
      ui,
    },
    {
      icon: "i-ui-none", //i-lucide-circle-user-round",
      trailingIcon: "i-link",
      label: "Champions",
      to: `${slugRoot}/champions`,
      ui,
    },
  ]
})
export const nexusNav = [
  {
    label: "Nexus",
    to: "/nexus",
    icon: "i-nexus",
  },
]
export const libraryNav = [
  {
    label: "Champions",
    to: "/library/champions",
    icon: "i-lp-champ",
  },
  {
    label: "Items",
    to: "/library/items",
    icon: "i-lucide-sword",
  },
  {
    label: "Runes",
    to: "/library/runes",
    icon: "i-lp-runes",
  },
  {
    label: "Spells",
    to: "/library/spells",

    icon: "i-lucide-book-marked",
  },
]

export const backpackNav: NavButtonProps[] = [
  {
    label: "Pockets",
    to: "/backpack",
    ui: {
      label: "font-semibold",
    },
    trailingIcon: "link",
    icon: "i-folders",
    variant: "highlight",
  },
  {
    label: "Archive",
    to: "/backpack/archive",
    ui: {
      base: " ",
    },
    icon: "i-archive",
    variant: "highlight",
  },
  {
    label: "Trash",
    to: "/backpack/trash",
    ui: {
      base: "",
    },
    icon: "i-trash",
    variant: "highlight",
  },
]

export const toolsNav: NavButtonProps[] = [
  {
    label: "Item Calculator",
    to: "/tools/calculator",
    icon: "i-ui-calc",
    description: "Min-max your builds with stat analysis.",
  },
  {
    label: "Card Creator",
    to: "/tools/card",
    icon: "i-lucide-layers",
    description: "Create a sharable pocket snapshot card.",
  },
]

const shared = {
  target: "_blank",
  external: true,
  avatar: {
    size: "3xs" as AvatarProps["size"],
    class: "rounded-sm",
  },
  ui: {
    label: "grow-0",
  },
}

/* -------------- SUPPORT -------------- */
export const resourceNav = [
  {
    label: "Official",
    size: "xs",
    ui: {
      item: "pointer-events-none max-h-6 ",
      itemLabel: "label text-xs opacity-50",
    },
  },
  ...officialResources.map((i) => Object_assign(i, shared)),

  {
    label: "External",
    size: "xs",
    ui: {
      item: "pointer-events-none  max-h-6 ",
      itemLabel: "label text-xs opacity-50",
    },
  },
  ...externalResources.map((i) => Object_assign(i, shared)),
]

export const helpNav = [
  {
    label: "Help & Support",
    size: "xs",
    ui: {
      item: "pointer-events-none items-end pb-0",
      itemLabel: "label text-xs opacity-50",
    },
  },

  {
    label: "Docs",
    to: "/docs",
    icon: "lucide:square-terminal",
  },
  {
    label: "About",
    to: "/about",
    icon: "lucide:message-circle-question-mark",
  },
  {
    label: "Legal",
    size: "xs",
    ui: {
      item: "pointer-events-none items-end pb-0",
      itemLabel: "label text-xs opacity-50",
    },
  },
  {
    label: "Terms & Conditions",
    to: "/tos",
    icon: "lucide:scale",
  },
  {
    label: "Privacy Policy",
    to: "/privacy",
    icon: "lucide:shield-check",
  },
]
