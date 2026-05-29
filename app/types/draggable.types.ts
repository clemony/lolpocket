import type { Data } from "@dnd-kit/abstract"
import type {
  Draggable as _Draggable,
  Droppable as _Droppable,
  DragDropManager
} from "@dnd-kit/dom"

export type Draggable = _Draggable<Data>
export type Droppable = _Droppable<Data>
export type Sortable = Draggable | Droppable

export type Manager = DragDropManager<Data, Draggable, Droppable>
