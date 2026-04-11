import type { CommandPaletteGroup, CommandPaletteItem } from "@nuxt/ui"
import type { AcceptableValue } from "reka-ui"
import type { RouteRecordNormalized } from "vue-router"
import { externalResources } from "~/domain/lp/external/externalResources"
import ChampionCommand from "../reference-cards/ChampionCommand.vue"
import ItemCommand from "../reference-cards/ItemCommand.vue"
import RuneCommand from "../reference-cards/RuneCommand.vue"
import SpellCommand from "../reference-cards/SpellCommand.vue"
import { referenceItems } from "./lolCommands"

interface CommandReturn {
  groups: ComputedRef<CommandPaletteGroup<CommandItem>[]>
  resultGroups: ComputedRef<CommandPaletteGroup<CommandItem>[]>
}

export interface CommandItem extends Omit<CommandPaletteItem, "children"> {
  value: AcceptableValue
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
const libraryPath = /\/library/
export const pageCommands = (
  options: PageCommandsOptions = {}
): CommandItem[] => {
  const router = useRouter()
  const session = useSupabaseSession()

  const allRoutes = router
    .getRoutes()
    .filter((record) => record.meta?.search !== false)

  function buildRouteItem(record: RouteRecordNormalized): CommandItem {
    const children = allRoutes
      .filter(
        (candidate) =>
          candidate.path !== record.path &&
          candidate.path.startsWith(`${record.path}/`) &&
          pathDepth(candidate.path) === pathDepth(record.path) + 1 &&
          (session.value?.access_token || candidate.meta?.auth !== true)
      )
      .map(buildRouteItem)
      .sort((a, b) => Number(a.order ?? 0) - Number(b.order ?? 0))

    const hasChildren = children.length > 0

    return {
      id: record.path,
      label: /*  record.meta?.title === "Nexus"
          ? "Nexus Dashboard"
          :  */ String(record.meta?.title || record.name),
      slot: String(record.meta?.title || record.name).toLowerCase(),
      value: record.path,
      icon: asString(record.meta?.icon),
      iconFill: asString(record.meta?.iconFill) || undefined,
      // prefix: asString(record.meta?.prefix),
      // suffix: record.meta?.description  ? `- ${asString(record.meta?.description)}`  : "",
      to: hasChildren ? undefined : record.path,
      onSelect: hasChildren ? undefined : options.onNavigate,
      trailingIcon: hasChildren ? "i-right" : "i-link",
      keys: record.meta?.keys as string[],
      order:
        typeof record.meta?.order === "number" ? record.meta.order : undefined,
      ui: {
        label: "capitalize",
        leadingIcon: asString(record.meta?.class),
        prefix: "after:pl-1.5 after:pr-1 after:content-['›']",
        trailingIcon: hasChildren ? "" : "size-3.5! inline align-top"
      },
      children: hasChildren ? children : undefined
    }
  }
  return allRoutes
    .filter(
      (record) =>
        pathDepth(record.path) <= 1 &&
        (session.value?.access_token || record.meta?.auth !== true)
    )
    .map(buildRouteItem)
    .sort((a, b) => Number(a.order ?? 0) - Number(b.order ?? 0))
}

interface CommandGroupOptions {
  onNavigate?: () => void
}

export function buildCommandGroups(
  options: CommandGroupOptions = {}
): CommandReturn {
  const pageItems = pageCommands({ onNavigate: options.onNavigate })
  const groups = computed(() => [
    {
      id: "nexus",
      value: "nexus-command",
      label: "Nexus",
      description:
        "A one stop shop for the latest League news and your own data highlights",
      items: pageItems?.find((r) => String(r.id) === "/nexus")?.children
    },
    {
      id: "tools",
      value: "tools-command",
      label: "Tools",
      description:
        "Lolpocket utilities great to have handy. Share a pocket card or theorycraft.",
      items: pageItems?.find((r) => String(r.id) === "/tools")?.children
    },
    {
      id: "backpack",
      value: "Backpack-command",
      label: "Backpack",
      description: "Hold your pockets.",
      items: pageItems?.find((r) => String(r.id) === "/backpack")?.children
    },
    {
      id: "library",
      value: "Library-command",
      label: "Library",
      description: "Browse and filter complete data.",

      items: [
        ...Object.values(
          pageItems
            ?.find((r) => r.id === "/library")
            ?.children?.sort(
              (a, b) => Number(a?.order ?? 0) - Number(b?.order ?? 0)
            ) as CommandItem[]
        )
      ]
    },
    {
      id: "reference",
      value: "reference-command",
      label: "Reference",
      description: "Quick, detailed, information cards right in your navbar.",

      items: referenceItems?.value
    },
    {
      value: "help-command",
      id: "help",
      label: "Help & Resources",
      description:
        "Find answers, research external data, and customize your lolpocket.",

      items: [
        {
          ...pageItems?.find((r) => String(r.id) === "/docs") //?.children
        },
        {
          ...pageItems?.find((r) => String(r.id) === "/settings") //?.children
        },
        {
          value: "External-command",
          id: "external",
          label: "Resources",
          description: "Other external tools worthy of your backpack.",
          trailingIcon: "i-right",
          icon: "i-external",
          children: [
            ...externalResources.map((r) => ({
              ...r,
              id: r?.label,
              value: r?.label,
              target: "_blank",
              external: true,
              onSelect: options.onNavigate,
              itemTrailingIcon: "i-external"
            }))
          ]
        }
      ] as CommandItem[]
    }
  ])

  const resultGroups = computed(() => [
    {
      id: "results",
      label: "Search Results",
      items: [
        ...pageItems,
        ...(referenceItems.value.flatMap((i) => i.children) as CommandItem[])
      ]
    }
  ])

  return { groups, resultGroups }
}

const EXTERNAL_URL_RE = /^https?:\/\//
const LEADING_DASH_RE = /^- /

const detailComponentMap = {
  "champion-command": ChampionCommand,
  "item-command": ItemCommand,
  "rune-command": RuneCommand,
  "spell-command": SpellCommand
} as const

export function useCommandGroups(options: CommandGroupOptions = {}) {
  return buildCommandGroups(options)
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
