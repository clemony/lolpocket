import type { CommandPaletteGroup, CommandPaletteItem } from "@nuxt/ui"
import { getSummonerIcon } from "~/domain/utils/img"
import { championIndex } from "~~/shared/constants/champions/championIndex"
import { itemIndex } from "~~/shared/constants/items/itemIndex"
import { spellIndex } from "~~/shared/constants/misc/spell-index"
import { runeIndex } from "~~/shared/constants/runes/runeIndex"

function pathDepth(path: string) {
  return path.split("/").filter(Boolean).length
}

function asString(value: unknown) {
  return typeof value === "string" ? value : undefined
}

export interface CommandItem extends Omit<CommandPaletteItem, "children"> {
  value: string | number
  id?: string | number
  order?: number
  highlight?: boolean
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
  keys?: string[]
  highlight?: boolean
  items?: CommandItem[]
  ui?: Record<string, unknown>
}

export interface CommandReturn {
  defaultGroups: ComputedRef<CommandGroup[]>
  resultGroups: ComputedRef<CommandGroup[]>
}

const descriptionLabel = {
  item: "px-2 pointer-events-none h-max!",
  itemLabel: "flex flex-col",
  itemLabelBase: 'after:content-[""] text-pc font-semibold text-sm',
  itemLabelSuffix: "text-wrap normal-case! text-xs text-n4",
}

const componentClass = {
  item: "text-pc cursor-default! **:normal-case! text-start h-max! data-highlighted:bg-transparent! data-highlighted:border-0! before:hidden pointer-events-none! hover:bg-transparent hover:border-0 border-0! *:pointer-events-auto",
}

export function buildCommandGroups(
  menuLevel: Ref<number>,
  selectedName?: Ref<string[]>,
): CommandReturn {
  const route = useRoute()
  const router = useRouter()

  const session = useSupabaseSession()

  const allRoutes = router
    .getRoutes()
    .filter((record) => record.meta?.search !== false)

  function enterMenu(name: string) {
    menuLevel.value += 1
    if (selectedName) selectedName.value.push(name)
  }

  function buildRouteItem(record: (typeof allRoutes)[number]): CommandItem {
    const children = allRoutes
      .filter(
        (candidate) =>
          candidate.path !== record.path &&
          candidate.path.startsWith(`${record.path}/`) &&
          pathDepth(candidate.path) === pathDepth(record.path) + 1,
      )
      .map(buildRouteItem)
      .sort((a, b) => Number(a.order ?? 0) - Number(b.order ?? 0))

    if (!session.value?.access_token)
      children.filter((child) => child.meta?.auth !== true)

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
      prefix: asString(record.meta?.prefix),
      suffix: record.meta?.description
        ? `- ${asString(record.meta?.description)}`
        : "",
      to: hasChildren ? undefined : record.path,
      trailingIcon: hasChildren ? "i-right" : "i-link",
      keys: record.meta?.keys as string[],
      order:
        typeof record.meta?.order === "number" ? record.meta.order : undefined,
      onClick: (e: Event) =>
        enterMenu(String(record.meta?.title || record?.name)),
      ui: {
        itemLeadingIcon: cn(
          asString(record.meta?.class),
          record.meta.title === "Backpack" ? "**:stroke-[1.8]!" : "",
        ),
        item: "h-9",
        itemLabelBase: "font-medium text-sm capitalize ",
        itemLabelPrefix: "after:pl-1.5 after:pr-1 after:content-['›']",
        itemTrailingIcon: hasChildren ? "" : "size-3.5! inline align-top",
      },
      children: hasChildren ? children : undefined,
    }
  }

  const pageItems: CommandItem[] = allRoutes
    .filter((record) => pathDepth(record.path) <= 1)
    .map(buildRouteItem)
    .sort((a, b) => Number(a.order ?? 0) - Number(b.order ?? 0))

  const summonerItem = computed(() => {
    if (!session.value?.access_token || !user().account?.puuid) return null
    return {
      id: user().account?.puuid,
      label: "Summoner Profile",
      slot: "link",
      suffix: `- ${user().account?.name} #${user().account?.tag}`,
      value: "summoner",
      to: `/summoner/${user().account?.puuid}`,
      avatar: {
        src: getSummonerIcon(user().account?.icon),
        size: "2xs",
        icon: "i-lucide-user",
      },
      ui: {
        item: "gap-1! px-1.5!",
        itemLeading: "-translate-x-1",
      },
    } as CommandItem
  })

  const uniqueItems = [
    ...new Map(itemIndex.map((entry) => [entry.name, entry])).values(),
  ].filter((entry) => entry?.id != null && !!entry.name)

  const items: CommandItem[] = uniqueItems.map((entry) => ({
    label: entry.name,
    id: entry.id,
    value: entry.id,
    as: "div",

    onClick: (e: Event) => enterMenu(entry.name),
    avatar: {
      src: `/img/items/${entry.id}.webp`,
      size: "sm",
      icon: "i-lucide-sword",
      ui: {
        icon: "size-4.5",
      },
    },
    children: [
      {
        slot: "item-command",
        value: "item-command",
        id: entry.id,
        highlight: false,
        ui: componentClass,
      },
    ],
  }))
  const champions: CommandItem[] = championIndex
    .filter((entry) => entry?.id != null && !!entry.name)
    .map((entry) => ({
      label: entry.name,
      id: entry.id,
      value: entry.id,
      as: "div",
      onClick: (e: Event) => enterMenu(entry.name),
      avatar: {
        size: "sm",
        src: `/img/champions/${entry.id}.webp`,
        icon: "i-lp-champ",
        ui: {
          icon: "size-4.5",
        },
      },
      children: [
        {
          slot: "champion-command",
          value: "champion-command",
          id: entry.id,
          highlight: false,
          ui: componentClass,
        },
      ],
    }))

  const runes: CommandItem[] = runeIndex
    .filter((entry) => entry?.id != null && !!entry.name)
    .map((entry) => ({
      label: entry.name,
      id: entry.id,
      value: entry.id,
      as: "div",
      onClick: (e: Event) => enterMenu(entry.name),
      avatar: {
        size: "sm",
        src: `/img/runes/${entry.id}.webp`,
        icon: "i-lp-rune",
        ui: {
          icon: "size-4.5",
        },
      },
      children: [
        {
          slot: "rune-command",
          value: "rune-command",
          id: entry.id,
          highlight: false,
          ui: componentClass,
        },
      ],
    }))

  const spells: CommandItem[] = Object.values(spellIndex)
    .filter((entry) => entry?.id != null && !!entry.name)
    .map((entry) => ({
      label: entry.name,
      onClick: (e: Event) => enterMenu(entry.name),
      id: entry.id,
      value: entry.id,
      as: "div",
      avatar: {
        size: "sm",
        src: `/img/spells/${entry.id}.webp`,
        icon: "i-fire",
        ui: {
          icon: "size-4.5",
        },
      },
      children: [
        {
          slot: "spell-command",
          value: "spell-command",
          id: entry.id,
          highlight: false,
          ui: componentClass,
        },
      ],
    }))

  const browseItems: CommandItem[] = [
    {
      label: "Reference",
      value: "browse-label",
      ui: descriptionLabel,
      suffix: "Fast & detailed information cards direct to your navbar.",
      slot: "label",
    },
    {
      label: "Champions",
      slot: "ref-icon",
      id: "champions",
      value: "champion-list",
      icon: "i-lp-champ",
      onClick: () => enterMenu("champions"),
      children: champions,
    },
    {
      label: "Items",
      slot: "ref-icon",
      value: "item-list",
      id: "items",
      icon: "i-lucide-sword",
      onClick: () => enterMenu("items"),
      ui: {
        itemLeadingIcon: "**stroke-[1.8]!",
      },
      children: items,
    },
    {
      label: "Runes",
      value: "rune-list",
      slot: "ref-icon",
      id: "runes",
      icon: "i-lp-runes",
      onClick: () => enterMenu("runes"),
      ui: {
        itemLeadingIcon: "scale-105",
      },
      children: runes,
    },
    {
      label: "Spells",
      id: "spells",
      slot: "ref-icon",
      value: "spell-list",
      icon: "i-book",
      onClick: () => enterMenu("spells"),
      ui: {
        itemLeadingIcon: "**:stroke-[1.8]!  ",
      },
      children: spells,
    },
  ]

  const defaultGroups = computed<CommandGroup[]>(() => [
    {
      id: "route-command",
      value: "route-command",
      items: [
        {
          slot: "route",
          value: "route-label",
          ui: {
            item: "cursor-default! hover:bg-transparent hover:border-0 border-0! *:pointer-events-auto h-max data-highlighted:before:bg-transparent!  data-highlighted:before:border-0!",
          },
        },
      ],
    },

    {
      id: "pages",
      value: "pages-command",
      items: [
        {
          label: "Nexus",
          value: "pages-label",
          slot: "label",
          ui: descriptionLabel,
          suffix:
            "Home base for League news, pockets, personal data, and more.",
        },
        summonerItem.value || { value: "" },
        ...pageItems.filter(
          (r) => !["/docs", "/settings", "/library"].includes(String(r.value)),
        ),
      ],
    },
    {
      id: "library",
      value: "library-command",
      items: [
        {
          label: "Library",
          value: "library-label",
          slot: "label",
          ui: descriptionLabel,
          suffix:
            "Browse and filter full category lists. View by list or grid with multiple sort options.",
        },
        ...Object.values(
          pageItems
            .find((r) => r.value === "/library")
            ?.children?.map((r) => ({
              ...r,
              slot: "library-item",
            }))
            .sort(
              (a, b) => Number(a?.order ?? 0) - Number(b?.order ?? 0),
            ) as CommandItem[],
        ),
      ],
    },
    {
      id: "browse",
      value: "browse-label",
      slot: "browse" as const,
      items: browseItems,
    },

    {
      id: "help",
      value: "help-command",
      items: [
        {
          value: "help-label",
          label: "Help and Resources",
          slot: "label",
          ui: descriptionLabel,
          suffix:
            "Find answers, research external data, and customize your lolpocket, ",
        },
        ...pageItems.filter((r) =>
          ["/docs", "/settings"].includes(String(r.value)),
        ),
      ],
    },
  ])

  const resultGroups = computed<CommandGroup[]>(() => [
    {
      id: "results",
      label: "Search Results",
      items: [...pageItems, ...items],
    },
  ])

  return {
    defaultGroups,
    resultGroups,
  }
}

export function useCommandGroups(
  menuLevel: Ref<number>,
  selectedName?: Ref<string[]>,
) {
  return buildCommandGroups(menuLevel, selectedName)
}
