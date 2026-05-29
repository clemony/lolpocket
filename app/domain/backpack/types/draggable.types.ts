import type { Data } from "@dnd-kit/abstract"

export type ListType = "grid" | "sidebar"

export type BackpackGhostData = Data & {
  bounding?: DOMRect
  button?: MaybeRefOrGetter<Record<string, unknown> | undefined>
  item?: Folder | Pocket | SortableFolder | SortablePocket
  kind?: "folder" | "pocket" | "subfolder"
  listType?: ListType
}

export interface GhostState {
  active: boolean
  anchor: { x: number; y: number }
  current?: BackpackGhostData | null
  source?: BackpackGhostData | null
  target?: BackpackGhostData | null
}
