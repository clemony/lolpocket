import type { ButtonProps } from "@nuxt/ui"

export interface FolderExpose {
  toggleEdit: () => void
  setName: () => void
}

export type PocketPropsChildren =
  | PocketProps[]
  | ComputedRef<PocketProps[]>
  | Ref<PocketProps[]>

export interface PocketProps extends Omit<ButtonProps, "children" | "type"> {
  pocket?: Pocket
  getKey?: () => string
  slot?: string
  type?: "pocket"
  order?: number
}
