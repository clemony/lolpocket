<script setup lang="ts">
import type { SortableEvent } from 'vue-draggable-plus'
import { VueDraggable } from 'vue-draggable-plus'

const { pocketKeys } = defineProps<{
  pocketKeys: string[]
}>()

const as = useAccountStore()

const isDragging = ref(false)

function addPin(e: SortableEvent) {
  const movingKey = pocketKeys[e.oldDraggableIndex]

  // Add to pinned
  const newPinned = [...as.userAccount.pockets.pinned]
  newPinned.splice(e.newDraggableIndex, 0, movingKey)

  // Enforce max 5 rule
  if (newPinned.length > 6)
    newPinned.pop()

  as.userAccount.pockets.pinned = newPinned
}

function removePin(e: SortableEvent) {
  // Remove from pinned
  const newPinned = [...as.userAccount.pockets.pinned]
  newPinned.splice(e.oldDraggableIndex, 1)
  as.userAccount.pockets.pinned = newPinned
}
</script>

<template>
  <div
    class="w-full size-full relative grid grid-rows-[1fr_20px] max-h-100 col-start-2 pr-2 gap-1">
    <VueDraggable
      :model-value="as.userAccount.pockets.pinned"
      ghost-class=".peek-btn-ghost"
      drag-class=".peek-btn-drag"
      draggable=".draggable"
      group="keys"
      target=".target"
      chosen-class=""
      filter=".no-drag"
      class=" size-full "
      @add="addPin($event)"
      @remove="removePin($event)"
      @start="isDragging = true">
      <transition-slide
        as="div" group
        class=" grid-rows-3 grid-cols-2 grid scrollbar-hidden  max-h-92 gap-1 size-full  px-1  items-start justify-start  target">
        <PocketPeek v-for="pocketKey in as.userAccount.pockets.pinned" :key="pocketKey" :pocket-key="pocketKey" side="right" align="start" class="group/link size-full grid items-end rounded-field shadow-sm drop-shadow-sm overflow-hidden relative **:select-none select-none **:pointer-events-none" wrapper-class="group/link size-full grid items-end rounded-field shadow-sm drop-shadow-sm overflow-hidden relative **:select-none select-none **:pointer-events-none" @click="navigateTo(`/pocket/${pocketKey}`)">
          <LazyPocketPinButton :pocket-key="pocketKey" hydrate-on-visible />
        </PocketPeek>
      </transition-slide>
    </VueDraggable>

    <div class="grid items-end w-full px-3 gap-3  **:text-2">
      <p class="">
      </p>

      <Badge v-tippy="{ content: `pinned / limit` }" class="font-medium col-start-2  text-bc/80  justify-self-end">
        <icon name="pin-solid" class="size-4  mr-1.5 dst text-bc/70" />
        {{ computed (() => as.userAccount.pockets.pinned.length) }}
        /
        6
      </Badge>
    </div>
  </div>
</template>