export interface ColumnHeaderOptions {
  draggable?: boolean
  tooltip?: string
  sortTip?: string
  sortable?: boolean
  sorted?: ComputedRef<false | SortDirection>
  toggleSort?: (desc?: boolean, isMulti?: boolean) => void
  clearSort?: () => void
}
