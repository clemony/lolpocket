import type {
  ColumnPinningState,
  RowSelectionState,
  SortingState,
  Table,
  VisibilityState
} from "@tanstack/vue-table"
import type { InjectionKey, ShallowRef } from "vue"

export const TableKey = Symbol("TableKey") as InjectionKey<UseTableInject>

export interface UseTableInject<TData = any> {
  tableApi: ShallowRef<Table<TData> | null>
  rowSelection: ShallowRef<RowSelectionState>
  columnPinning: ShallowRef<ColumnPinningState>
  columnVisibility: ShallowRef<VisibilityState>
  sorting: ShallowRef<SortingState>
  isRowSelected: (rowId: string) => boolean
  setRowSelected: (rowId: string, selected: boolean) => void
}
export const useTableProvider = () => {
  const tableApi = shallowRef<Table<any> | null>(null)

  const rowSelection = shallowRef<RowSelectionState>({})

  const columnPinning = shallowRef<ColumnPinningState>({
    left: ["location", "label"],
    right: []
  })

  const columnVisibility = shallowRef<VisibilityState>({})

  const sorting = shallowRef<SortingState>([])

  function isRowSelected(rowId: string) {
    return Boolean(rowSelection.value[rowId])
  }

  function setRowSelected(rowId: string, selected: boolean) {
    const next = { ...rowSelection.value }

    if (selected) next[rowId] = true
    else delete next[rowId]

    rowSelection.value = next
  }

  const state = {
    tableApi,
    rowSelection,
    columnPinning,
    columnVisibility,
    sorting,
    isRowSelected,
    setRowSelected
  }

  provide(TableKey, state)
  return state
}

export function useTableInject<TData = any>() {
  const state = inject(TableKey) as UseTableInject<TData> | undefined
  if (!state) throw new Error("No backpack provider found")
  return state
}
