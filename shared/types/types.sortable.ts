import type { UniqueIdentifier } from "@dnd-kit/abstract"
import type { UseDroppableInput } from "@dnd-kit/vue"
import type { UseSortableInput } from "@dnd-kit/vue/sortable"
import type { ButtonProps } from "@nuxt/ui"
import type {
  RouteLocationAsPathGeneric,
  RouteLocationAsRelativeGeneric
} from "vue-router"
import type { IconSet } from "~~/layers/ui/app/assets/icons/icon-sets"

export type SortableProps = Omit<UseSortableInput, "id"> & {
  id: MaybeRefOrGetter<UniqueIdentifier>
}

export interface FolderDragData {
  kind: "folder" | "subfolder"
  item: Folder
}

export interface PocketDragData {
  kind: "pocket"
  item: Pocket
  to?: string
  avatar: ButtonProps["avatar"]
}

export const backpackFolderKeys = [
  "archive",
  "trash",
  "pinned",
  "folders",
  "favorites"
] as const

export type BackpackFolderKey = (typeof backpackFolderKeys)[number]

export type FolderKey<T extends BackpackFolderKey | string = string> =
  | BackpackFolderKey
  | string

export interface Folder extends FolderSchema {
  open?: boolean
  icons?: IconSet
  to?:
    | string
    | RouteLocationAsRelativeGeneric
    | RouteLocationAsPathGeneric
    | undefined
  id: string
  children?: ComputedRef<SortablePocket[]>
  count?: number
}

export interface SortableFolder extends Folder {
  sortable: UseSortableInput
  droppable: UseDroppableInput
  subfolders?: ComputedRef<SortableFolder[]>
}

export interface SortablePocket extends Pocket {
  id: ComputedRef<string>
  sortable: UseSortableInput
}
