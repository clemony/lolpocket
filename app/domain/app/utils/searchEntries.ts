import type { AvatarProps } from "@nuxt/ui"
import { championIndex } from "~~/shared/constants/champions/championIndex"
import { itemIndex } from "~~/shared/constants/items/collection/itemIndex"
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

export const championEntry = (index: Index | number) => {
  const champion = ref()
  if (typeof index === "number") champion.value = championById(index)
  else champion.value = index
  return {
    id: `${champion.value.id}`,
    group: "champion" as const,
    label: champion.value.name,
    keys: [champion.value.name ?? "", "champion"],
    avatar: {
      src: `/img/champion/${champion.value.id}.webp`,
      size: "xl" as AvatarProps["size"],
    },
    raw: champion,
  }
}

export const itemEntry = (index: Index | number) => {
  const item = ref()
  if (typeof index === "number") item.value = itemById(index)
  else item.value = index
  return {
    id: `${item.value.id}`,
    group: "item" as const,
    label: item.value.name,
    keys: [item.value.name ?? "", "item"],
    avatar: {
      src: `/img/item/${item.value.id}.webp`,
      size: "xl" as AvatarProps["size"],
    },
    raw: item,
  }
}

export const runeEntry = (index: Index | number) => {
  if (!index) return
  const rune = computed<Index | undefined>(() =>
    typeof index === "number" ? runeById(index) : index
  )
  if (!rune.value) return
  return {
    id: `${rune.value.id}`,
    group: "rune" as const,
    label: rune.value.name,
    keys: [rune.value.name ?? "", "rune"],
    avatar: {
      src: `/img/rune/${rune.value.id}.webp`,
      size: "xl" as AvatarProps["size"],
    },
    raw: rune,
  }
}

export const spellEntry = (index: Index | number): SidebarSearchEntry => {
  const spell = ref()
  if (typeof index === "number") spell.value = spellIndex[index]
  else spell.value = index
  return {
    id: spell.value.id,
    group: "spell" as const,
    label: spell.value.name,
    description: spell.value.description,
    keys: [spell.value.name, spell.value.description, "summoner", "spell"],
    avatar: {
      src: `/img/spell/${spell.value.id}.webp`,
      size: "xl" as AvatarProps["size"],
    },
    raw: spell,
  }
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
      }))
      .filter(Boolean),

    ...(championIndex
      .map((champion) => championEntry(champion as Champion))
      .filter(Boolean) as SidebarSearchEntry[]),

    ...(itemIndex
      .map((item) => itemEntry(item as Item))
      .filter(Boolean) as SidebarSearchEntry[]),

    ...(runeIndex
      .map((rune) => runeEntry(rune as Rune))
      .filter(Boolean) as SidebarSearchEntry[]),

    ...Object.values(spellIndex)
      .map((spell) => spellEntry(spell))
      .filter(Boolean),
  ].filter(Boolean)
})
