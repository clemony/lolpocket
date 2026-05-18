import type {
  ColumnPinningState,
  RowSelectionState,
  SortingState,
  Table,
  VisibilityState
} from "@tanstack/vue-table"
import type { ShallowRef } from "vue"

export const TableKey = Symbol("TableKey")

export interface UseTableInject<TData = any> {
  tableApi: ShallowRef<Table<TData> | null>
  rowSelection: ShallowRef<RowSelectionState>
  columnPinning: ShallowRef<ColumnPinningState>
  columnVisibility: ShallowRef<VisibilityState>
  sorting: ShallowRef<SortingState>
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

  const state = {
    tableApi,
    rowSelection,
    columnPinning,
    columnVisibility,
    sorting
  }

  provide(TableKey, state)
  return state
}

export function useTableInject<TData = any>() {
  const state = inject<UseTableInject<TData> | undefined>(TableKey)
  if (!state) throw new Error("No backpack provider found")
  return state
}
