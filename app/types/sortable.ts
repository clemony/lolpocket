export interface SortableProps {
  id: ComputedRef<string> | string
  index: ComputedRef<number> | number
  group?: ComputedRef<string> | string
  type?: ComputedRef<string> | string
  accept?: ComputedRef<string> | string | ComputedRef<string[]> | string[]
}
