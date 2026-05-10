import type { ButtonProps } from "@nuxt/ui"
import type { ContextMenuItemProps } from "reka-ui"

export interface FolderExpose {
  toggleEdit: () => void
  setName: () => void
}

type OmitButton = Omit<ButtonProps, "children" | "type" | "label" | "ui">

export interface FolderButton extends OmitButton, Folder {
  id: string
  children?: ComputedRef<PocketButton[]>
  type?: "pocket" | "folder"
  getKey?: () => string
  contextItems?: ContextMenuItemProps[]
  slot?: string
}

export type PocketButtonChildren =
  | PocketButton[]
  | ComputedRef<PocketButton[]>
  | Ref<PocketButton[]>

export interface PocketButton extends Omit<ButtonProps, "children" | "type"> {
  pocket?: Pocket
  getKey?: () => string
  slot?: string
}
