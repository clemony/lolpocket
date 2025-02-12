<script lang="ts" setup>
import { vDraggable } from 'vue-draggable-plus'
import { SplitterPanel as ResizablePanel } from 'radix-vue'

function onUpdate() {
  console.log('update')
}

function remove() {
  console.log('remove')
}

const ts = useTempStore()
const isDragging = ref(false)
function onDragStart(e) {
  console.log(e.item)
  isDragging.value = true
  ts.moduleDrawerTrigger = false
}

function onDragEnd() {
  isDragging.value = false
}

const as = useAccountStore()

console.log(as.userBoardModules)

const filter = computed (() => {
  const a = as.userBoardModules.filter((m) => m != null)
return a.map((m) => m.name)
})
console.log("💠 - filter - filter:", filter)

</script>

<template>
  <div class="drawer drawer-end">
    <input id="module-drawer" v-model="ts.moduleDrawerTrigger" type="checkbox" class="drawer-toggle" />
    <div id="drawer-content" class="drawer-content">
      <slot />
    </div>
    <div class="drawer-side size-screen isolate z-62">
      <ResizablePanelGroup direction="horizontal">
        <ResizablePanel :default-size="70">
          <div class="relative max-h-screen w-full h-screen">
            <label aria-label="close sidebar" class="drawer-overlay absolute inset-0 top-0 left-0" @click="ts.moduleDrawerTrigger = false"> </label>
          </div>
        </ResizablePanel>

        <ResizablePanel :collapsed-size="5" :default-size="30" :min-size="20" :max-size="70">
          <div class="relative max-h-screen w-full h-screen">
            <ResizableHandle with-plain-handle class="!absolute !top-[46.5%] left-13" />
            <div class="pl-19 pr-13 bg-b1/70 backdrop-blur-md  border-x-b2 shadow-smooth shadow-black/15  !pt-[5vh] absolute w-[calc(100%-20px)] right-0 h-screen rounded-l-2xl">
              <!-- Sidebar content here -->
              <div class="pb-4">
                <h1>Board Modules</h1>
                <p class="mt-2">
                  Grab your most important info to display on your board.
                </p>
              </div>
              <div
                v-draggable="[
                  allUserModules.map(m => m.name),
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
                :class="cn('grid  gap-11  w-full   py-4  m-auto') "
                ghost-class="module-ghost"
                drag-class="module-drag"
                @update="onUpdate"

                @start="onDragStart($event)"
                @remove="remove"
                @end="onDragEnd()"
              >
                <div v-for="module in allUserModules" :key="module.name" class="size-full max-w-120"
                :class="{hidden: filter.includes(module.name)}"
                 :data-name="module.name">
                  <component :is="ghostRegistry[module.name]" :data-name="module.name"  />
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