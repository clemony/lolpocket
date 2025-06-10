<script setup lang="ts">
import { hexoid } from 'hexoid'
import { vDraggable } from 'vue-draggable-plus'

const props = defineProps<{
  pocket?: Pocket
}>()

const is = useItemStore()
const { filtered } = useItemFilter(is.itemFilter)

const toID = hexoid()

const filteredIds = computed (() => {
  if (!filtered)
    return null
  return filtered
})
</script>

<template>
  <div class="overflow-y-auto size-full z-0 absolute inset-0">
    <div
      :key="props.pocket ? pocket.key : toID()"
      v-draggable="[
        filteredIds,
        {
          group: {
            name: 'items',
            put: false,
            pull: 'clone',
            revertClone: true,
          },
          sort: false,
          bubbleScroll: false,
          scroll: false,
          delay: 0,
          chosenClass: 'item-set-item-chosen',
          ghostClass: 'draggable-item-ghost',
          fallbackClass: 'draggable-item-fallback',

          forceFallback: true,
          fallbackTolerance: 0,
          fallbackOnBody: true,

        /*         'clone': (item) => ({
          ...item,
          cloneId: `${item}-${Date.now()}`,
        }),*/
        },
      ]"
      class="flex flex-wrap select-none  justify-self-center justify-start gap-4 px-10  pb-10 pt-30">
      <LazyPopoverItem v-for="item in filtered" :id="item" :key="item" hydrate-on-visible class="size-20 aspect-square shadow-sm drop-shadow-sm rounded-lg" />
    </div>
  </div>
</template>

<style></style>
