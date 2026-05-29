import type { CommandPaletteGroup, CommandPaletteItem } from "@nuxt/ui"
import { externalResources } from "~/domain/about/external/externalResources.js"
import ChampionCommand from "../reference-cards/ChampionCommand.vue"
import ItemCommand from "../reference-cards/ItemCommand.vue"
import RuneCommand from "../reference-cards/RuneCommand.vue"
import SpellCommand from "../reference-cards/SpellCommand.vue"
import { referenceItems } from "./lolCommands"

export interface CommandItem extends Omit<CommandPaletteItem, "children"> {
  value: string | number | undefined
  id?: string
  order?: number
  highlight?: boolean
  trailingIcon?: string
  component?: Component
  searchable?: boolean
  keys?: string[]
  children?: CommandItem[]
}

export interface CommandGroup extends Omit<
  CommandPaletteGroup<CommandItem>,
  "items" | "label"
> {
  order?: number
  label?: string
  searchable?: boolean
  description?: string
  component?: Component
  keys?: string[]
  highlight?: boolean
  items?: CommandItem[]
  action?: CommandItem
  ui?: Record<string, unknown>
}

interface PageCommandsOptions {
  onNavigate?: () => void
}

export interface AppCommandInject {
  open?: (item: CommandItem) => void
  close?: () => void
  back?: () => void
}

export function builCommandItem(record: RouteItem): CommandItem {
  return {
    ...record,
    slot: String(record.label).toLowerCase(),
    trailingIcon: "i-link",
    ui: {
      label: "capitalize",
      leadingIcon: asString(record.class),
      prefix: "after:pl-1.5 after:pr-1 after:content-['›']",
      trailingIcon: "size-3.5! inline align-top"
    }
  }
}

interface CommandGroupOptions {
  onNavigate?: () => void
}
export function buildCommandGroups(
  routes: RouteReturn,
  options: CommandGroupOptions = {}
): ComputedRef<Record<string, CommandGroup>> {
  return computed(() => ({
    nexus: {
      id: "base",
      value: "base-command",
      label: "Base",
      description:
        "A one stop shop for the latest League news and data highlights",
      items: routes.nexus
    },
    tools: {
      id: "tools",
      value: "tools-command",
      label: "Tools",
      description:
        "Lolpocket utilities great to have handy. Share a pocket card or theorycraft.",
      items: routes.tools
    },
    backpack: {
      id: "backpack",
      value: "Backpack-command",
      label: "Backpack",
      description: "Hold your pockets.",
      items: routes.backpack
    },
    library: {
      id: "library",
      value: "Library-command",
      label: "Library",
      description: "Browse and filter complete data.",
      items: routes.library
    },
    reference: {
      id: "reference",
      value: "reference-command",
      label: "Reference",
      description: "Quick, detailed, information cards right in your navbar.",
      items: referenceItems?.value
    },
    docs: {
      value: "docs-command",
      icon: "i-lucide-square-terminal",
      id: "docs",
      label: "Docs",
      description: "Get help.",
      trailingIcon: "i-right",
      items: routes.docs
    },
    settings: {
      value: "settings-command",
      id: "settings",
      icon: "i-gear",
      ui: {
        leadingIcon: "**:stroke-[2.2]"
      },
      label: "Settings",
      description: "Other external tools worthy of your backpack.",
      trailingIcon: "i-right",
      items: routes.settings
    },
    external: {
      value: "External-command",
      id: "external",
      label: "Resources",
      description: "Other external tools worthy of your backpack.",
      trailingIcon: "i-right",
      icon: "i-external",
      items: externalResources.map((r) => ({
        ...r,
        id: r?.label,
        value: r?.label,
        target: "_blank",
        external: true,
        onSelect: options.onNavigate,
        itemTrailingIcon: "i-external",
        avatar: {
          src: r?.avatar?.src,
          size: "xs"
        },
        ui: {
          itemLabelBase: "normal-case!"
        }
      }))
    }
  }))
}

export const commandResultGroups = computed(() => [
  {
    id: "results",
    label: "Search Results",
    items: [
      //...pageItems,
      ...(referenceItems.value.flatMap((i) => i.children) as CommandItem[])
    ]
  }
])

const EXTERNAL_URL_RE = /^https?:\/\//
const LEADING_DASH_RE = /^- /

const detailComponentMap = {
  "champion-command": ChampionCommand,
  "item-command": ItemCommand,
  "rune-command": RuneCommand,
  "spell-command": SpellCommand
} as const

export function useCommandGroups(
  routes: RouteReturn,
  options: CommandGroupOptions = {}
) {
  return buildCommandGroups(routes, options)
}

export function getLead(group?: CommandGroup) {
  return group?.items?.find((item) => item.slot === "label") ?? null
}

export function getItems(group?: CommandGroup) {
  return group?.items?.filter((item) => item.slot !== "label") ?? []
}

export function resolveDetailComponent(slot?: string) {
  if (!slot) {
    return null
  }

  return detailComponentMap[slot as keyof typeof detailComponentMap] ?? null
}

export function isExternal(item: CommandItem) {
  return typeof item.to === "string" && EXTERNAL_URL_RE.test(item.to)
}

export function isActive(item: BaseItem) {
  return typeof item.to === "string" && useRoute().path === item.to
}

export function itemKey(item: CommandItem) {
  return String(item?.id ?? item?.value ?? item?.label)
}

export function itemSuffix(item: CommandItem | null | undefined) {
  if (!item?.suffix) {
    return ""
  }

  return item.suffix?.replace(LEADING_DASH_RE, "")
}

export function itemTrailingIcon(item: CommandItem) {
  if (item.children?.length) {
    return item.trailingIcon ?? "i-right"
  }

  return isExternal(item) ? "i-external" : (item.trailingIcon ?? "i-link")
}

export function itemTarget(item: CommandItem) {
  return isExternal(item) ? "_blank" : undefined
}
