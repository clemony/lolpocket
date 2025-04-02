<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { vDraggable } from 'vue-draggable-plus'
import type { DraggableEvent } from 'vue-draggable-plus'
import { hexoid } from 'hexoid'

const props = defineProps<{
  pocket?: pocket
  dragDisabled?: boolean
  class?: HTMLAttributes['class']

}>()
const is = useItemStore()
const list = computed(() => {
  return [...filterItems()]
})

function onStart(event: DraggableEvent) {
  console.log('start drag')
}

function onEnd(event: DraggableEvent) {
  // console.log("💠 - handleDragEnd - event:", event)
  // console.log('hi')
  const draggedItem = event.item
  // console.log(draggedItem)
  const targetSet = event.to
  // console.log("💠 - handleDragEnd - targetSet:", targetSet)

  /*  if (targetSet && targetSet.items) {
    const isDuplicate = targetSet.items.some(item => item.name === draggedItem.name)

    if (isDuplicate) {
      console.log('Duplicate item found. Item not added.')
      event.item.remove()
    }
    else {
      targetSet.items.push(draggedItem)
    }
  } */
}

function onClone(event: DraggableEvent) {
  console.log('💠 - onClone - event:', event.data)
  console.log('clone')
}

const toID = hexoid()
</script>

<template>
  <div
    :key="props.pocket ? pocket.key : toID()"
    v-draggable="[
      list,
      {
        'group': {
          name: 'items',
          put: false,
          pull: 'clone',
          revertClone: true,
        },
        'sort': false,
        'bubbleScroll': false,
        'scroll': false,
        'delay': 0,

        'force-fallback': true,
        'fallbackTolerance': 0,
        'fallbackOnBody': true,

        'clone': (item) => ({
          ...item,
          cloneId: `${item.id}-${Date.now()}`,
        }),
      },
    ]"
    group
    class=""
    :class="cn('overflow-y-auto  absolute inset-0 grid grid-flow-row auto-cols-auto select-none h-fit   grid-cols-[repeat(auto-fill,minmax(54px,1fr))] justify-center gap-4 px-7  pb-10 pt-30', props.class)"

    @end="onEnd"
    @clone="onClone"
    @start="onStart">
    <Popover v-for="item in list" :key="item.id">
      <PopoverTrigger class="size-full hover:ring-1  !cursor-pointer shadow-sm drop-shadow-sm hover:ring-neutral hover:ring-offset-2 hover:ring-offset-b1 data-[state=open]:ring-1 data-[state=open]:ring-offset-2 data-[state=open]:ring-neutral data-[state=open]:ring-offset-b1 rounded-lg">
    <LazyItem class="select-none size-full pointer-events-none"  :item="item" >
    </LazyItem>

      </PopoverTrigger>

        <LazyCustomPopoverContent class="!w-100 @container/item-data max-h-160">
          <CustomPopoverArrow  />
<LazyItemData :item="item"  />
        </LazyCustomPopoverContent>

    </Popover>
  </div>
</template>

<style></style>
