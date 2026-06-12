import type { AvatarProps } from "@nuxt/ui"
import { championIndex } from "~~/shared/constants/champions/championIndex"
import { itemIndex } from "~~/shared/constants/items/itemIndex"
import { spellIndex } from "~~/shared/constants/misc/spell-index"
import { runeIndex } from "~~/shared/constants/runes/runeIndex"

export type SidebarSearchGroup = "page" | "champion" | "item" | "rune" | "spell"

export interface SidebarSearchEntry {
  id: string
  group: SidebarSearchGroup
  label: string
  sublabel?: string
  description?: string
  keys: string[]
  to?: string
  avatar?: AvatarProps
  icon?: string
  raw: unknown
}

export const searchEntries = computed<SidebarSearchEntry[]>(() => {
  const router = useRouter()
  return [
    ...router
      .getRoutes()
      .filter((route) => route.meta.search !== false)
      .map((route) => ({
        id: `page:${route.path}`,
        group: "page" as const,
        label: String(route.meta.title ?? route.name ?? route.path),
        sublabel: asString(route.meta.prefix),
        description: asString(route.meta.description),
        keys: Array.isArray(route.meta.keys) ? route.meta.keys : [],
        to: route.path,
        avatar: {
          icon: asString(route.meta.icon),
          size: "xl" as AvatarProps["size"],
          ui: {
            root: "bg-transparent **:text-pc!",
            icon: "text-pc!",
          },
        },
        raw: route,
      })),

    ...championIndex.map((champion) => ({
      id: `${champion.id}`,
      group: "champion" as const,
      label: champion.name,
      keys: [champion.name ?? "", "champion"],
      avatar: {
        src: `/img/champion/${champion.id}.webp`,
        size: "xl" as AvatarProps["size"],
      },
      raw: champion,
    })),

    ...itemIndex.map((item) => ({
      id: `${item.id}`,
      group: "item" as const,
      label: item.name,
      keys: [item.name ?? "", "item"],
      avatar: {
        src: `/img/item/${item.id}.webp`,
        size: "xl" as AvatarProps["size"],
      },
      raw: item,
    })),

    ...runeIndex.map((rune) => ({
      id: `${rune.id}`,
      group: "rune" as const,
      label: rune.name,
      keys: [rune.name ?? "", "rune"],
      avatar: {
        src: `/img/rune/${rune.id}.webp`,
        size: "xl" as AvatarProps["size"],
      },
      raw: rune,
    })),

    ...Object.values(spellIndex).map((spell) => ({
      id: `${spell.id}`,
      group: "spell" as const,
      label: spell.name,
      description: spell.description,
      keys: [spell.name, spell.description, "summoner", "spell"],
      avatar: {
        src: `/img/spell/${spell.id}.webp`,
        size: "xl" as AvatarProps["size"],
      },
      raw: spell,
    })),
  ]
})
