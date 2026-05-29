import { parseAbsoluteToLocal } from "@internationalized/date"
import type { TableColumn } from "@nuxt/ui"
import {
  columnHeader,
  isBot,
  sorting
} from "~/domain/backpack/composables/helpers/columnHelpers"

export function useBackpackColumns() {
  const { getItemSet, getRuneSet, getSpellSet } = pocketStore()

  return computed<TableColumn<Pocket>[]>(() => {
    return [
      {
        accessorKey: "location",
        header: ({ column }) =>
          columnHeader("location", "", {
            sortTip: "by folder",
            draggable: false,
            ...sorting(column)
          }),
        meta: {
          class: {
            td: "w-16 max-w-16 min-w-16 px-1 z-5"
          }
        }
      },
      {
        accessorKey: "label",
        header: ({ column }) =>
          columnHeader("label", "Pocket", {
            sortTip: "pockets by name",
            draggable: false,
            ...sorting(column)
          }),
        meta: {
          class: {
            th: "text-left max-w-100! w-100 min-w-84 left-17  data-[pinned=left]:left-17!  pl-4",
            td: "max-w-100 w-100 min-w-84  left-17   overflow-hidden data-[pinned=left]:left-17! bg-p0 z-2 table-cell-hover"
          }
        }
      },
      {
        accessorKey: "champions",
        sortTip: "by main champ's name",
        header: ({ column }) =>
          columnHeader("champions", "Champions", sorting(column)),
        meta: {
          class: {
            td: "table-cell-hover"
          }
        }
      },
      {
        accessorKey: "runes",
        header: () => columnHeader("runes", "Runes", { sortable: false }),
        accessorFn: (row): RuneSet | undefined =>
          row?._runes ? getRuneSet(row.key, row._runes) : row?.runes?.[0],
        meta: {
          class: {
            td: "table-cell-hover"
          }
        }
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
          ).reverse(),
        meta: {
          class: {
            td: "table-cell-hover"
          }
        }
      },

      {
        accessorKey: "spells",
        header: () => columnHeader("spells", "Spells", { sortable: false }),
        accessorFn: (row) => {
          const set = row?._spells
            ? getSpellSet(String(row?.key), row?._spells)
            : row?.spells?.[0]
          return [set?.d, set?.f]
        },
        meta: {
          class: {
            td: "table-cell-hover"
          }
        }
      },
      {
        accessorKey: "position",
        header: ({ column }) =>
          columnHeader("position", "Position", {
            sortTip: "by position",
            ...sorting(column)
          }),
        accessorFn: (row) =>
          `${row?._position || row?.positions?.[0] || undefined}`,
        meta: {
          class: {
            td: "table-cell-hover"
          }
        }
      },
      {
        id: "map",
        accessorKey: "_map",
        header: ({ column }) =>
          columnHeader("_map", "Map", {
            sortTip: "by map",
            ...sorting(column)
          }),
        meta: {
          class: {
            td: "table-cell-hover"
          }
        }
      },
      {
        accessorKey: "tags",
        header: ({ column }) =>
          columnHeader("tags", "Tags", {
            tooltip: `Use to help when searching.\nAdd tags in row with + !`,
            sortable: false
          }),

        meta: {
          class: {
            th: "w-58",
            td: "relative p-0 min-w-50  w-58 "
          }
        }
      },
      {
        accessorKey: "updated",
        header: ({ column }) =>
          columnHeader("updated", "Updated", {
            sortTip: "by last update",
            ...sorting(column)
          }),
        accessorFn: (row): string => {
          const dateValue = parseAbsoluteToLocal(String(row?.updated))
          return getPatchForDate(dateValue) ?? ""
        },
        meta: {
          class: {
            td: "table-cell-hover"
          }
        }
      },
      {
        accessorKey: "public",
        header: ({ column }) =>
          columnHeader("public", "Public", sorting(column)),
        meta: {
          class: {
            td: "table-cell-hover"
          }
        }
      }
    ]
  })
}
