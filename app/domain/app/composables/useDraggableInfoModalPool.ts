import { shallowRef } from "vue"

import type { SidebarSearchEntry } from "~/domain/app/utils/searchEntries"

export interface DraggableInfoModalSlot {
  id: number
  item: SidebarSearchEntry
  open: boolean
  openedAt: number
  placementIndex: number
  zIndex: number
}

interface UseDraggableInfoModalPoolOptions {
  maxSlots?: number
}

export function useDraggableInfoModalPool(
  options: UseDraggableInfoModalPoolOptions = {}
) {
  const maxSlots = options.maxSlots ?? 8
  let nextSlotId = 0
  let nextOpenedAt = 0
  let nextPlacementIndex = 0
  let nextZIndex = 0
  const popoverSlots = shallowRef<DraggableInfoModalSlot[]>([])

  function getPopoverItemKey(item: SidebarSearchEntry) {
    return `${item.group}:${item.id}`
  }

  function setPopoverOpen(slotId: number, value: boolean) {
    popoverSlots.value = popoverSlots.value.map((slot) =>
      slot.id === slotId ? { ...slot, open: value } : slot
    )
  }

  function bringPopoverToFront(slotId: number) {
    popoverSlots.value = popoverSlots.value.map((slot) =>
      slot.id === slotId ? { ...slot, zIndex: ++nextZIndex } : slot
    )
  }

  function openPopover(item: SidebarSearchEntry) {
    const openedAt = ++nextOpenedAt
    const itemKey = getPopoverItemKey(item)
    const slots = popoverSlots.value
    const existingIndex = slots.findIndex(
      (slot) => getPopoverItemKey(slot.item) === itemKey
    )

    if (existingIndex >= 0) {
      popoverSlots.value = slots.map((slot, index) =>
        index === existingIndex
          ? {
              ...slot,
              item,
              open: true,
              openedAt,
              placementIndex: slot.open
                ? slot.placementIndex
                : nextPlacementIndex++,
              zIndex: ++nextZIndex,
            }
          : slot
      )
      return
    }

    const reusableIndex = slots.findIndex((slot) => !slot.open)
    if (reusableIndex >= 0) {
      popoverSlots.value = slots.map((slot, index) =>
        index === reusableIndex
          ? {
              ...slot,
              item,
              open: true,
              openedAt,
              placementIndex: nextPlacementIndex++,
              zIndex: ++nextZIndex,
            }
          : slot
      )
      return
    }

    if (slots.length < maxSlots) {
      popoverSlots.value = [
        ...slots,
        {
          id: nextSlotId++,
          item,
          open: true,
          openedAt,
          placementIndex: nextPlacementIndex++,
          zIndex: ++nextZIndex,
        },
      ]
      return
    }

    const oldestIndex = slots.reduce(
      (oldest, slot, index) =>
        slot.openedAt < slots[oldest]!.openedAt ? index : oldest,
      0
    )

    popoverSlots.value = slots.map((slot, index) =>
      index === oldestIndex
        ? {
            ...slot,
            item,
            open: true,
            openedAt,
            placementIndex: nextPlacementIndex++,
            zIndex: ++nextZIndex,
          }
        : slot
    )
  }

  return {
    bringPopoverToFront,
    openPopover,
    popoverSlots,
    setPopoverOpen,
  }
}
