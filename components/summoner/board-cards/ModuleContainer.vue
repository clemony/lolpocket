<script setup lang="ts">
import { vDraggable } from 'vue-draggable-plus'
import type { HTMLAttributes } from 'vue'
import { toast } from 'vue-sonner'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()

const ss = useSidebarStore()
const as = useAccountStore()
function onAdd(event: any) {
  console.log('💠 - onAdd - event:', event)

  if (as.userModuleCount == 9) {
    toast.error('No spaces left. Remove a module to add another.')
    return
  }
  const moduleName = event.item?.dataset?.name // Ensure the module name is retrieved

  const index = event.newIndex // Vue Draggable provides this

  console.log(`🟢 moduleName: ${moduleName}, index: ${index}`)
  if (!moduleName || index === undefined) {
    console.warn(`⚠️ Skipping empty module at index ${index}`)
    return
  }

  console.log(`✅ Adding module: ${moduleName} at index: ${index}`)
  as.userBoardModules[index] = { name: moduleName }

  const filter = computed (() => {
    const a = as.userBoardModules.filter(m => m != null)
    return a.map(m => m.name)
  })

  if (filter.value.includes(undefined)) {
    const a = as.userBoardModules.findIndex(m => m.name == undefined)
    if (a != -1) {
      as.userBoardModules.splice(a, 1)
    }
  }
}
</script>

<template>
  <div
    v-draggable="[
      as.userBoardModules,
      {
        group: {
          name: 'modules',
          pull: true,
          put: true,
          clone: 'modules',
        },
        bubbleScroll: true,
        scroll: true,
        delay: 0,
        animation: 150,
        forceFallback: true,
        fallbackTolerance: 0,
        fallbackOnBody: true,
        ghostClass: 'module-ghost',
        dragClass: 'module-drag',
      },
    ]"
    :class="cn('pt-6 grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] grid-rows-[repeat(auto-fill,minmax(180px,1fr))] gap-6 px-18 z-0   auto-rows-min absolute top-0 left-0 inset-0  overflow-auto  p-i-c cursor-move', { 'z-30': ss.isDragging }, props.class) "
    ghost-class="module-ghost"
    drag-class="module-drag"
    @add="onAdd">
    <div v-for="(module, i) in as.userBoardModules" :key="`module-${i}`" class=" select-none size-full  relative grid p-i-c">
      <template v-if="module?.name">
        <component :is="moduleRegistry[module?.name]" :module-name="module?.name" :index="i" :title="module.title" :queue="module.queue" />
      </template>
      <DefaultModule v-else :index="i" />
    </div>
  </div>
</template>

<style scoped>
</style>