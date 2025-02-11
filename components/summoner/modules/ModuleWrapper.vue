<script setup lang="ts">
import { vDraggable } from 'vue-draggable-plus'
import type { HTMLAttributes } from 'vue'

const props = defineProps<{
  index: number
  class?: HTMLAttributes['class']
}>()

const as = useAccountStore()
</script>

<template>
  <div
    v-draggable="[
      markRaw(as.userBoardModules),
      {
        group: {
          name: 'modules',
          pull: true,
          put: 'modules',
        },
        bubbleScroll: false,
        scroll: false,
        delay: 0,
        animation: 150,
        forceFallback: true,
        fallbackTolerance: 0,
        fallbackOnBody: true,
        ghostClass: 'module-ghost',
        dragClass: 'module-drag',
      },
    ]"
    :class="cn('grid grid-cols-4 gap-6  w-full h-[84vh]  px-14   grid-rows-3  m-auto', props.class) "
    ghost-class="module-ghost"
    drag-class="module-drag"
  >
    <div v-for="(module, i) in as.userBoardModules" :key="`module-${i}`" class="size-full overflow-hidden select-none">
      <component :is="markRaw(module.component)" v-if="module.component" />
    </div>
  </div>
</template>

<style scoped>
</style>