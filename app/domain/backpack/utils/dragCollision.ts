import type { CollisionDetector, Draggable, Droppable } from "@dnd-kit/abstract"
import { CollisionPriority, CollisionType } from "@dnd-kit/abstract"
import { isPocketDragData } from "~/domain/backpack/utils/dragData"

export const POCKET_CROSS_LIST_HYSTERESIS = {
  edgeInset: 28,
  delay: 140
} as const

let crossListCandidate:
  | {
      sourceId: string
      targetList: ListType
      lastSeen: number
      since: number
    }
  | undefined

function listTypeFromGroup(group: unknown): ListType | undefined {
  const value = String(group ?? "")

  if (value.startsWith("grid:")) return "grid"
  if (value.startsWith("sidebar:")) return "sidebar"
}

function draggableListType(source: Draggable | null): ListType | undefined {
  if (!source) return undefined
  if (isPocketDragData(source.data)) return source.data.listType

  return listTypeFromGroup(
    (source as { sortable?: { initialGroup?: unknown; group?: unknown } })
      .sortable?.initialGroup ??
      (source as { sortable?: { group?: unknown } }).sortable?.group
  )
}

function droppableListType(droppable: Droppable | null): ListType | undefined {
  if (!droppable) return undefined
  if (isPocketDragData(droppable.data)) return droppable.data.listType

  return listTypeFromGroup(
    (droppable as { sortable?: { group?: unknown } }).sortable?.group
  )
}

function resetCrossListCandidate() {
  crossListCandidate = undefined
}

function hasCrossListIntent(
  source: Draggable | null,
  targetList: ListType,
  droppable: Droppable,
  position: { x: number; y: number } | null | undefined
): boolean {
  if (!source || !position || !droppable.shape) {
    if (!source) resetCrossListCandidate()
    return false
  }

  const rect = droppable.shape.boundingRectangle
  const pastListEdge =
    targetList === "sidebar"
      ? position.x <= rect.right - POCKET_CROSS_LIST_HYSTERESIS.edgeInset
      : position.x >= rect.left + POCKET_CROSS_LIST_HYSTERESIS.edgeInset

  if (!pastListEdge) return false

  const sourceId = String(source.id)
  const now = Date.now()
  const expired =
    crossListCandidate &&
    now - crossListCandidate.lastSeen >
      Math.max(POCKET_CROSS_LIST_HYSTERESIS.delay * 2, 120)

  if (
    expired ||
    crossListCandidate?.sourceId !== sourceId ||
    crossListCandidate.targetList !== targetList
  ) {
    crossListCandidate = {
      sourceId,
      targetList,
      lastSeen: now,
      since: now
    }
    return false
  }

  crossListCandidate.lastSeen = now
  return now - crossListCandidate.since >= POCKET_CROSS_LIST_HYSTERESIS.delay
}

function detectPocketCollision({
  dragOperation,
  droppable
}: Parameters<CollisionDetector>[0]) {
  if (!droppable.shape) return null

  const position = dragOperation.position.current

  if (position && droppable.shape.containsPoint(position)) {
    const distance = Math.hypot(
      droppable.shape.center.x - position.x,
      droppable.shape.center.y - position.y
    )

    return {
      id: droppable.id,
      value: distance === 0 ? Number.MAX_SAFE_INTEGER : 1 / distance,
      type: CollisionType.PointerIntersection,
      priority: CollisionPriority.High
    }
  }

  const shape = dragOperation.shape?.current
  if (!shape) return null

  const intersectionArea = shape.intersectionArea(droppable.shape)
  if (!intersectionArea) return null

  const distance = position
    ? Math.hypot(
        droppable.shape.center.x - position.x,
        droppable.shape.center.y - position.y
      )
    : 1
  const intersectionRatio =
    intersectionArea / (shape.area + droppable.shape.area - intersectionArea)

  return {
    id: droppable.id,
    value: intersectionRatio / Math.max(distance, 1),
    type: CollisionType.ShapeIntersection,
    priority: CollisionPriority.Normal
  }
}

export const pocketCollisionDetector: CollisionDetector = ({
  dragOperation,
  droppable
}) => {
  const collision = detectPocketCollision({ dragOperation, droppable })
  const source = dragOperation.source

  if (!source) resetCrossListCandidate()
  if (!collision || !source) return collision

  const sourceList = draggableListType(source)
  const targetList = droppableListType(droppable)

  if (sourceList && targetList && sourceList !== targetList) {
    const hasIntent = hasCrossListIntent(
      source,
      targetList,
      droppable,
      dragOperation.position.current
    )

    if (!hasIntent) return null
  }

  return collision
}
