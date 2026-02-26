import type { AvatarProps, Locale } from "@nuxt/ui"
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

  const slugRoot = buildSummonerRootPath({ puuid: account.value?.puuid })

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

export const libraryNav = [
  {
    label: "Champions",
    to: "/champions",
    icon: "i-lp-champ",
  },
  {
    label: "Items",
    to: "/items",
    icon: "i-stat-melee",
  },
  {
    label: "Runes",
    to: "/runes",
    icon: "i-lp-runes",

    ui: {
      icon: "scale-120",
      leadingIcon: "scale-120",
    },
  },
  {
    label: "Spells",
    to: "/spells",

    icon: "i-basil-book-solid",

    ui: {
      icon: "scale-110",
      leadingIcon: "scale-110",
    },
  },
]

export const backpackNav = [
  {
    label: "New Pocket",
    icon: "i-lucide-plus",
    color: "neutral",
    kbds: ["meta", "P"],
    ui: {
      base: "py-0 mb-1 ",
      leadingIcon: "**:stroke-[2.5] scale-90 **:text-nc! translate-y-px",
      label: "font-semibold grow text-nc translate-y-px",
    },

    onClick: () => newPocket(),
  },
  {
    label: "Pockets",
    size: "sm",
    to: "/backpack",
    ui: {
      label: "font-semibold",
    },
    trailingIcon: "link",
    icon: "i-folders",
    variant: "highlight",
  },
]

export const backpackSubNav = [
  {
    label: "Archive",
    size: "sm",
    to: "/backpack/archive",
    ui: {
      base: " ",
    },
    icon: "i-archive",
    variant: "highlight",
  },
  {
    label: "Trash",
    size: "sm",
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
    icon: "i-calc",
    ui: {
      leadingIcon: "**:stroke-[1.6] scale-87 ",
    },
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
    ui: {
      label: "label text-xs",
    },
  },
  ...officialResources.map((i) => Object_assign(i, shared)),

  {
    label: "External",
    ui: {
      label: "label text-xs",
    },
  },
  ...externalResources.map((i) => Object_assign(i, shared)),
]

export const helpNav = [
  {
    label: "Help & Support",
    ui: {
      label: "label text-xs",
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
    ui: {
      label: "label text-xs",
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
