<script setup lang="ts">
import { VueDraggable } from 'vue-draggable-plus'

const { pocketKeys } = defineProps<{
  pocketKeys: string[]
}>()

const ps = usePocketStore()
const as = useAccountStore()

const isDragging = ref(false)
</script>

<template>
  <div
    :class="cn('min-w-full max-w-full size-full relative flex flex-col  max-h-100 col-start-1')">
    <div class="w-full justify-between items-center rounded-t-field border-t border-x border-b3/60 overflow-hidden flex -z-1 no-drag absolute bg-b2/40 z-1 py-2 backdrop-blur-md top-0 left-0  px-6">
      <h4 class="text-4 ">
        All
      </h4>
    </div>

    <VueDraggable
      :model-value="pocketKeys"
      ghost-class=".peek-ghost"
      drag-class=".peek-drag"
      draggable=".draggable"
      group="keys"
      target=".target"
      chosen-class=""
      filter=".no-drag"
      :sortable="false"
      class="w-full z-0  h-full *:w-full inset-shadow-sm inset-shadow-black/3 field-box rounded-field border-b3 "
      @start="isDragging = true">
      <transition-slide
        as="div"
        group
        :class="cn('flex flex-col scrollbar-hidden  max-h-100 gap-1 w-full h-100 px-2 pb-2 pt-9.5 items-start justify-start  target overflow-y-auto')">
        <template
          v-for="pocketKey in pocketKeys"
          :key="pocketKey">
          <PocketPeek
            :pocket-key="pocketKey"
            side="bottom"
            align="end"
            class="btn btn-ghost data-[state=open]:btn-active flex justify-start h-12 cursor-context-menu w-full min-w-full gap-4 z-1   ">
            <PocketLabel :pocket-key="pocketKey" />
          </PocketPeek>
        </template>
      </transition-slide>
    </VueDraggable>
  </div>
</template>