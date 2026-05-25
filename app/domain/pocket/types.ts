import type { ButtonProps } from "@nuxt/ui"
import type { SortableProps } from "~~/shared/types/types.sortable"

export interface FolderExpose {
  toggleEdit: () => void
  setName: () => void
}

export type SortablePocketChildren =
  | SortablePocket[]
  | ComputedRef<SortablePocket[]>
  | Ref<SortablePocket[]>
