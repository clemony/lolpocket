import { DraggableColumnHeader } from "#components"
import type { Column } from "@tanstack/vue-table"
import type { ColumnHeaderOptions } from "~/domain/backpack/types"
import { columnOrder } from "~/domain/backpack/utils/dragTable"

export const isBot = (row: any) =>
  !!(
    (row.original?._position && row.original?._position === "bot") ||
    row.original?.positions?.[0] === "bot"
  )

export const description = (row: any) => {
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

export function columnIndex(id: string) {
  const index = columnOrder.value.indexOf(id)

  return index === -1 ? columnOrder.value.length : index
}

export function columnHeader(
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

export const sorting = (column: Column<Pocket>) => {
  return {
    sorted: computed(() => column?.getIsSorted()),
    toggleSort: () => column.toggleSorting(),
    clearSort: () => column.clearSorting()
  }
}
