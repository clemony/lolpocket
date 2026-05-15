import { Checkbox, Icon, Tooltip, UUser } from "#components"
import { parseAbsoluteToLocal } from "@internationalized/date"
import type { TableColumn } from "@nuxt/ui"
import type { Column, SortDirection } from "@tanstack/vue-table"
import type { ComputedRef, VNode } from "vue"
import DraggableColumnHeader from "./DraggableColumnHeader.vue"
import { columnOrder } from "./drag"

interface ColumnHeaderOptions {
  draggable?: boolean
  tooltip?: string
  sortable?: boolean
  sorted?: ComputedRef<false | SortDirection>
  toggleSort?: (desc?: boolean, isMulti?: boolean) => void
  clearSort?: () => void
}

const isBot = (row: any) =>
  !!(
    (row.original?._position && row.original?._position === "bot") ||
    row.original?.positions?.[0] === "bot"
  )

const description = (row: any) => {
  const champion = champNameByKey(
    String((row.getValue("champions") as string[])?.[0])
  )

  const text =
    `${row.original?._role || undefined} ${row.original?._position || row.original?.positions?.[0] || undefined}`
      .replace(/all/g, "")
      .trim()

  if (champion?.length && text.length) return [champion, text].join(", ")
  else if (champion) return champion
  else if (text) return text.toString()
  return ""
}

function columnIndex(id: string) {
  const index = columnOrder.value.indexOf(id)

  return index === -1 ? columnOrder.value.length : index
}

function columnHeader(
  id: string,
  label: string,
  options?: ColumnHeaderOptions,
  children?: () => VNode
) {
  return h(
    DraggableColumnHeader,
    {
      id,
      index: columnIndex(id),
      label,
      options
    },
    children ? { default: children } : undefined
  )
}

const sorting = (column: Column<Pocket>) => {
  return {
    sorted: computed(() => column?.getIsSorted()),
    toggleSort: () => column.toggleSorting(),
    clearSort: () => column.clearSorting()
  }
}

export const columns = computed<TableColumn<Pocket>[]>(() => {
  const { getItemSet, getRuneSet, getSpellSet, togglePublic } = pocketStore()
  return [
    {
      accessorKey: "location",
      header: ({ column }) =>
        columnHeader("location", "", {
          tooltip: "by folder",
          draggable: false,
          ...sorting(column)
        }),
      meta: {
        class: {
          th: ""
        }
      }
    },
    {
      accessorKey: "label",
      header: ({ column }) =>
        columnHeader("label", "Pocket", {
          tooltip: "pockets by name",
          draggable: false,
          ...sorting(column)
        }),
      cell: ({ row }) =>
        h("div", [
          h(UUser, {
            name: row.original?.label,
            description: description(row),
            ui: {
              description: "capitalize",
              name: "truncate pr-6",
              root: "w-full",
              wrapper: "w-full"
            },
            avatar: {
              src: getSplashFromSkinKey(row.original?.skin, "tile"),
              ui: {
                image: "scale-180",
                root: "overflow-hidden shadow-sm drop-shadow-sm"
              },
              icon: "i-ui-none"
            },
            size: "lg"
          })
        ]),
      meta: {
        class: {
          th: "text-left data-[pinned=left]:left-18! pl-4",
          td: "max-w-100 data-[pinned=left]:left-18!"
        }
      }
    },
    {
      accessorKey: "champions",
      tooltip: "by main champ's name",
      header: ({ column }) =>
        columnHeader("champions", "Champions", sorting(column))
    },
    {
      accessorKey: "runes",
      header: () => columnHeader("runes", "Runes", { sortable: false }),
      accessorFn: (row): RuneSet | undefined =>
        row?._runes ? getRuneSet(row.key, row._runes) : row?.runes?.[0]
    },

    {
      accessorKey: "items",
      header: () => columnHeader("items", "Items", { sortable: false }),
      accessorFn: (row) =>
        (
          (row?._items
            ? getItemSet(row.key, row._items)?.items
            : row?.items?.[0]?.items
          )?.slice(0, isBot(row) ? 7 : 6) as ItemSet["items"]
        ).reverse()
    },

    {
      accessorKey: "spells",
      header: () => columnHeader("spells", "Spells", { sortable: false }),
      accessorFn: (row) => {
        const set = row?._spells
          ? getSpellSet(String(row?.key), row?._spells)
          : row?.spells?.[0]
        return [set?.d, set?.f]
      }
    },
    {
      accessorKey: "position",
      header: ({ column }) =>
        columnHeader("position", "Position", {
          tooltip: "by position",
          ...sorting(column)
        }),
      accessorFn: (row) =>
        `${row?._position || row?.positions?.[0] || undefined}`
    },
    {
      accessorKey: "_map",
      header: ({ column }) =>
        columnHeader("_map", "Map", {
          tooltip: "by map",
          ...sorting(column)
        })
    },
    {
      accessorKey: "updated",
      header: ({ column }) =>
        columnHeader("updated", "Updated", {
          tooltip: "by last update",
          ...sorting(column)
        }),
      accessorFn: (row): string => {
        const dateValue = parseAbsoluteToLocal(String(row?.updated))
        return getPatchForDate(dateValue) ?? ""
      }
    },
    {
      accessorKey: "public",
      header: ({ column }) => columnHeader("public", "Public", sorting(column)),
      cell: ({ row }) =>
        h(
          "label",
          {
            for: `row-public-${row.id}`,
            "data-tip": row.original?.public ? "Make private" : "Make public",
            class:
              "grid place-items-center size-full min-h-[65px] group/label  cursor-pointer tooltip tooltip-left before:translate-x-4",
            onclick: (e: MouseEvent) => {
              e.stopPropagation()
            }
          },
          [
            h(Checkbox, {
              id: `row-public-${row.id}`,
              class:
                "rounded-full checked:border-neutral  inset-shadow-xs group-hover/label:ring group-hover/label:ring-p4 hover:checked:ring-0! checked:inset-shadow-nc/40",
              modelValue: row.original?.public,
              "onUpdate:modelValue": (value: boolean) =>
                togglePublic(String(row.original?.key), value),
              "aria-label": "Make a pocket visible to the community."
            })
          ]
        )
    }
  ]
})
