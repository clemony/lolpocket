import type { ButtonProps } from "@nuxt/ui"
import type { SortableProps } from "~/types/sortable"

export interface FolderExpose {
  toggleEdit: () => void
  setName: () => void
}

export type PocketPropsChildren =
  | PocketProps[]
  | ComputedRef<PocketProps[]>
  | Ref<PocketProps[]>

export interface PocketProps extends SortableProps, Pocket {
  key: string
  to?: string
  avatar: ButtonProps["avatar"]

  data: ComputedRef<Pocket>
}
