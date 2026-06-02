import ChampionCommand from "~/layout/components/navigation/command/reference-cards/ChampionCommand.vue"
import ItemCommand from "~/layout/components/navigation/command/reference-cards/ItemCommand.vue"
import RuneCommand from "~/layout/components/navigation/command/reference-cards/RuneCommand.vue"
import SpellCommand from "~/layout/components/navigation/command/reference-cards/SpellCommand.vue"
import type {
  CommandGroup,
  CommandRouteItem,
  RouteGroup,
  RouteItem
} from "~/types/route.types.js"
import { referenceItems } from "../../layout/components/navigation/command/build/lolCommands.js"

export function buildRouteItem(record: RouteItem): RouteItem {
  return {
    ...record,
    slot: String(record.label).toLowerCase(),
    ui: {
      label: "capitalize",
      leadingIcon: asString(record.class),
      trailingIcon: "size-3.5! inline align-top"
    }
  }
}

export const commandResultGroups = computed(() => [
  {
    id: "results",
    label: "Search Results",
    items: [
      //...pageItems,
      ...referenceItems.value.flatMap(
        (i) => i.children as unknown as CommandRouteItem
      )
    ].filter(Boolean) as CommandRouteItem[]
  } as CommandGroup<CommandRouteItem>
])

const EXTERNAL_URL_RE = /^https?:\/\//
const LEADING_DASH_RE = /^- /

const detailComponentMap = {
  "champion-command": ChampionCommand,
  "item-command": ItemCommand,
  "rune-command": RuneCommand,
  "spell-command": SpellCommand
} as const

export function getLead(group?: RouteGroup<RouteItem>) {
  return group?.items?.find((item) => item.slot === "label") ?? null
}

export function getItems(group?: RouteGroup<RouteItem>) {
  return group?.items?.filter((item) => item.slot !== "label") ?? []
}

export function resolveDetailComponent(slot?: string) {
  if (!slot) {
    return null
  }

  return detailComponentMap[slot as keyof typeof detailComponentMap] ?? null
}

export function isExternal(item: RouteItem) {
  return typeof item.to === "string" && EXTERNAL_URL_RE.test(item.to)
}

export function isActive(item: BaseItem) {
  return typeof item.to === "string" && useRoute().path === item.to
}

export function itemKey(item: RouteItem) {
  return String(item?.id ?? item?.value ?? item?.label)
}

export function itemSuffix(item: CommandRouteItem | null | undefined) {
  if (!item?.suffix) {
    return ""
  }

  return item.suffix?.replace(LEADING_DASH_RE, "")
}

export function itemTrailingIcon(item: RouteItem) {
  if (item.children?.length) {
    return item.trailingIcon ?? "i-right"
  }

  return isExternal(item) ? "i-external" : (item.trailingIcon ?? "i-link")
}

export function itemTarget(item: RouteItem) {
  return isExternal(item) ? "_blank" : undefined
}
