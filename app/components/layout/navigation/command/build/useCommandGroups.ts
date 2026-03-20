import type { CommandPaletteGroup, CommandPaletteItem } from "@nuxt/ui"
import type { RouteRecordNormalized } from "vue-router"
import ChampionCommand from "../reference-cards/ChampionCommand.vue"
import ItemCommand from "../reference-cards/ItemCommand.vue"
import RuneCommand from "../reference-cards/RuneCommand.vue"
import SpellCommand from "../reference-cards/SpellCommand.vue"
import { referenceItems } from "./lolCommands"

interface CommandReturn {
  pageItems: CommandItem[]
  resultGroups: ComputedRef<CommandGroup[]>
}

export interface CommandItem extends Omit<CommandPaletteItem, "children"> {
  value: string | number
  id?: string | number
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
  "items"
> {
  order?: number
  label?: string
  searchable?: boolean
  description?: string
  component?: Component
  keys?: string[]
  highlight?: boolean
  items?: CommandItem[]
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
      label:
        record.meta?.title === "Nexus"
          ? "Nexus Dashboard"
          : String(record.meta?.title || record.name),
      slot:
        record.meta?.title === "Nexus"
          ? "link"
          : String(record.meta?.title || record.name).toLowerCase(),
      value: record.path,
      icon: asString(record.meta?.icon),
      iconFill: asString(record.meta?.iconFill) || undefined,
      prefix: asString(record.meta?.prefix),
      suffix: record.meta?.description
        ? `- ${asString(record.meta?.description)}`
        : "",
      to: hasChildren ? undefined : record.path,
      onSelect: hasChildren ? undefined : options.onNavigate,
      trailingIcon: hasChildren ? "i-right" : "i-link",
      keys: record.meta?.keys as string[],
      order:
        typeof record.meta?.order === "number" ? record.meta.order : undefined,
      ui: {
        itemLeadingIcon: asString(record.meta?.class),
        item: "h-9",
        itemLabelBase: "font-medium text-sm capitalize ",
        itemLabelPrefix: "after:pl-1.5 after:pr-1 after:content-['›']",
        itemTrailingIcon: hasChildren ? "" : "size-3.5! inline align-top"
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

  const resultGroups = computed<CommandGroup[]>(() => [
    {
      id: "results",
      label: "Search Results",
      items: [
        ...pageItems,
        ...(referenceItems.value.flatMap((i) => i.children) as CommandItem[])
      ]
    }
  ])

  return { pageItems, resultGroups }
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
  return String(item.id ?? item.value ?? item.label)
}

export function itemSuffix(item: CommandItem | null | undefined) {
  if (!item?.suffix) {
    return ""
  }

  return item.suffix.replace(LEADING_DASH_RE, "")
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
