<script lang="ts" setup>
import { vDraggable } from 'vue-draggable-plus'
import { SplitterPanel as ResizablePanel } from 'radix-vue'

const ts = useTempStore()

function onUpdate() {
  console.log('update')
}
function addToList() {}
function onAdd(event: any) {
}
function remove() {
  console.log('remove')
}

const isDragging = ref(false)
function onDragStart() {
  isDragging.value = true
  console.log('💠 - onDragStart - ts.moduleDrawerTrigger:', ts.moduleDrawerTrigger)
  ts.moduleDrawerTrigger = false
  console.log('💠 - onDragStart - ts.moduleDrawerTrigger:', ts.moduleDrawerTrigger)
}

function onDragEnd() {
  isDragging.value = false
}
</script>

<template>
  <div class="drawer drawer-end">
    <input id="module-drawer" v-model="ts.moduleDrawerTrigger" type="checkbox" class="drawer-toggle" />
    <div class="drawer-content">
      <slot />
    </div>
    <div class="drawer-side size-screen isolate z-62">
      <ResizablePanelGroup direction="horizontal">
        <ResizablePanel :default-size="70">
          <div class="relative max-h-screen w-full h-screen">
            <label aria-label="close sidebar" class="drawer-overlay absolute inset-0 top-0 left-0" @click="ts.moduleDrawerTrigger = false"> </label>
          </div>
        </ResizablePanel>

        <ResizablePanel :default-size="30" :min-size="20" :max-size="70">
          <div class="relative max-h-screen w-full h-screen">
            <ResizableHandle with-plain-handle class="!absolute !top-[46.5%] left-13" />
            <div class="px-16  bg-b1 backdrop-blur-md  border-x-b2 shadow-smooth shadow-black/15  !pt-[5vh] absolute w-[calc(100%-20px)] right-0 h-screen rounded-l-2xl">
              <!-- Sidebar content here -->
              <div class="pb-4">
                <h1>Board Modules</h1>
                <p class="mt-2">
                  Grab your most important info to display on your board.
                </p>
              </div>
              <div
                v-draggable="[
                  markRaw(allUserModules),
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
                :class="cn('grid  gap-6  w-full   py-4  m-auto') "
                ghost-class="module-ghost"
                drag-class="module-drag"
                @update="onUpdate"
                @add="onAdd"
                @start="onDragStart()"
                @remove="remove"
                @end="onDragEnd()"
              >
                <div
                  v-for="(module, i) in allUserModules"
                  :key="module?.name ?? `module-${i}`"
                  class="  size-full max-w-120 "
                >
                  <component :is="markRaw(module.ghost)" :dragging="isDragging" :drawer="true" />
                </div>
              </div>
            </div>
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  </div>
</template>

<style scoped>

</style>