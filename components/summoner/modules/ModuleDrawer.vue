<script lang="ts" setup>
import { vDraggable } from 'vue-draggable-plus'

function onUpdate() {
  console.log('update')
}

function remove() {
  console.log('remove')
}

const ss = useSidebarStore()

const ts = useTempStore()
const isDragging = ref(false)
function onDragStart(e) {
  console.log(e.item)
  ss.isDragging = true
  ss.isSidebarOpen = false
}

function onDragEnd(e) {
  console.log('💠 - onDragEnd - e:', e)
  ss.isDragging = false
}

const as = useAccountStore()

console.log(as.userBoardModules)

const filter = computed (() => {
  const a = as.userBoardModules.filter(m => m != null)
  return a.map(m => m.name)
})
console.log('💠 - filter - filter:', filter)
</script>

<template>
  <div class=" overflow-y-auto  size-full">
    <div class="pb-4">
      <h1>Board Modules</h1>
      <p class="mt-2">
        Grab your most important info to display on your board.
      </p>
    </div>
    <div
      v-draggable="[
        as.userBoardModules,
        {
          group: {
            name: 'modules',
            pull: 'clone',
            put: false,
          },
          bubbleScroll: false,
          scroll: false,
          delay: 0,
          animation: 150,
          forceFallback: true,
          fallbackTolerance: 0,
          fallbackOnBody: true,
        },
      ]"
      :class="cn('grid  gap-11  w-full   py-4  m-auto') "
      ghost-class="module-ghost"
      drag-class="module-drag"
      @update="onUpdate"

      @start="onDragStart($event)"
      @remove="remove"
      @end="onDragEnd($event)"
    >
      <div
        v-for="module in allUserModules" :key="module.name" class="size-full max-w-110 !pointer-events-auto  cursor-move"
        :class="{ hidden: filter.includes(module.name) }"
        :data-name="module.name"
        @click.prevent
      >
        <component :is="ghostRegistry[module.name]" :data-name="module.name" />
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>