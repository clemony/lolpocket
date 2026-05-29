import type { Data, UniqueIdentifier } from "@dnd-kit/abstract"
import type {
  Draggable as _Draggable,
  Droppable as _Droppable,
  DragDropManager
} from "@dnd-kit/dom"

import type { UseDroppableInput } from "@dnd-kit/vue"
import type { UseSortableInput } from "@dnd-kit/vue/sortable"
import type { ButtonProps } from "@nuxt/ui"
import type {
  RouteLocationAsPathGeneric,
  RouteLocationAsRelativeGeneric
} from "vue-router"
import type { IconSet } from "~~/layers/ui/app/assets/icons/icon-sets"

export type Draggable = _Draggable<Data>
export type Droppable = _Droppable<Data>
export type Sortable = Draggable | Droppable

export type Manager = DragDropManager<Data, Draggable, Droppable>

export type ListType = "grid" | "sidebar"

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
  listType: ListType
  button?: ComputedRef<ButtonProps>
}

export const backpackFolderKeys = [
  "archive",
  "trash",
  "pinned",
  "folders",
  "favorites"
] as const

export type BackpackFolderKey = (typeof backpackFolderKeys)[number]

export type FolderKey<T extends string = string> = T | BackpackFolderKey

export interface Folder extends FolderSchema {
  open?: boolean
  icons?: IconSet
  to?: string | RouteLocationAsRelativeGeneric | RouteLocationAsPathGeneric
  id: string
  children?: ComputedRef<SortablePocket[]>
  count?: number
}

export interface SortableFolder extends Folder {
  sortable?: UseSortableInput
  droppable?: UseDroppableInput
  subfolders?: ComputedRef<SortableFolder[]>
  button?: ComputedRef<ButtonProps>
}

export interface SortablePocket extends Pocket {
  id: ComputedRef<string>
  sortable?: Omit<UseSortableInput, "index"> & { index?: ComputedRef<number> }
  button?: ComputedRef<ButtonProps>
}
