export interface FolderExpose {
  toggleEdit: () => void
  setName: () => void
}

export type SortablePocketChildren =
  | SortablePocket[]
  | ComputedRef<SortablePocket[]>
  | Ref<SortablePocket[]>
