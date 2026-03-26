import { championIndex } from "~~/shared/constants/champions/championIndex"
import { itemIndex } from "~~/shared/constants/items/itemIndex"
import { spellIndex } from "~~/shared/constants/misc/spell-index"
import { runeIndex } from "~~/shared/constants/runes/runeIndex"
import { componentClass } from "./styles"
import type { CommandItem } from "./useCommandGroups"

export const referenceItems = computed(() => {
  const uniqueItems = [
    ...new Map(itemIndex.map((entry) => [entry.name, entry])).values()
  ].filter((entry) => entry?.id != null && !!entry.name)

  const items: CommandItem[] = uniqueItems.map((entry) => ({
    label: entry.name,
    id: entry.id,
    value: entry.id,
    avatar: {
      src: `/img/items/${entry.id}.webp`,
      size: "sm",
      icon: "i-lucide-sword",
      ui: {
        icon: "size-4.5"
      }
    },
    children: [
      {
        slot: "item-command",
        value: "item-command",
        id: entry.id,
        highlight: false,
        ui: componentClass
      }
    ]
  }))
  const champions: CommandItem[] = championIndex
    .filter((entry) => entry?.id != null && !!entry.name)
    .map((entry) => ({
      label: entry.name,
      id: entry.id,
      value: entry.id,
      avatar: {
        size: "sm",
        src: `/img/champions/${entry.id}.webp`,
        icon: "i-lp-champ",
        ui: {
          icon: "size-4.5"
        }
      },
      children: [
        {
          slot: "champion-command",
          value: "champion-command",
          id: entry.id,
          highlight: false,
          ui: componentClass
        }
      ]
    }))

  const runes: CommandItem[] = runeIndex
    .filter((entry) => entry?.id != null && !!entry.name)
    .map((entry) => ({
      label: entry.name,
      id: entry.id,
      value: entry.id,
      avatar: {
        size: "sm",
        src: `/img/runes/${entry.id}.webp`,
        icon: "i-lp-rune",
        ui: {
          icon: "size-4.5"
        }
      },
      children: [
        {
          slot: "rune-command",
          value: "rune-command",
          id: entry.id,
          highlight: false,
          ui: componentClass
        }
      ]
    }))

  const spells: CommandItem[] = Object.values(spellIndex)
    .filter((entry) => entry?.id != null && !!entry.name)
    .map((entry) => ({
      label: entry.name,
      id: entry.id,
      value: entry.id,
      avatar: {
        size: "sm",
        src: `/img/spells/${entry.id}.webp`,
        icon: "i-fire",
        ui: {
          icon: "size-4.5"
        }
      },
      children: [
        {
          slot: "spell-command",
          value: "spell-command",
          id: entry.id,
          highlight: false,
          ui: componentClass
        }
      ]
    }))

  return <CommandItem[]>[
    {
      label: "Champions",
      slot: "ref-icon",
      id: "champions",
      value: "champion-list",
      icon: "i-lp-champ",
      children: champions
    },
    {
      label: "Items",
      slot: "ref-icon",
      value: "item-list",
      id: "items",
      icon: "i-lp-sword-fill",
      ui: {
        itemLeadingIcon: "**stroke-[1.8]!"
      },
      children: items
    },
    {
      label: "Runes",
      value: "rune-list",
      slot: "ref-icon",
      id: "runes",
      icon: "i-lp-rune",
      ui: {
        itemLeadingIcon: "scale-105"
      },
      children: runes
    },
    {
      label: "Spells",
      id: "spells",
      slot: "ref-icon",
      value: "spell-list",
      icon: "i-book-fill",
      suffix: "Don't forget the petricite!",
      ui: {
        itemLeadingIcon: "**:stroke-[2.2]!"
      },
      children: spells
    }
  ]
})
