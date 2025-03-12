<script lang="ts" setup>
import { vDraggable } from 'vue-draggable-plus'

const props = defineProps<{
  tabs: string
}>()
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
}

function onDragEnd() {
  isDragging.value = false
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
  <div class="tab-content bg-b1 w-full rounded-bl-box border-b3 pb-6 h-full overflow-hidden h-90% relative  ">
    <transition-slide :offset="[-16, 0]" class="relative w-full  min-h-full">
      <div v-if="props.tabs == 'modules'" class="size-full overflow-y-auto ">
        <div class="flex w-full gap-2 p-3 items-center">
          <p class="capitalize grow font-medium">
            Board Modules
          </p>
          <button v-tippy="'Reset Modules +'" class="btn btn-sm btn-square" @click="resetModules()">
            <icon name="hugeicons:clean" class="size-5 shrink-0 dst " />
          </button>
        </div>
        <Separator class="!my-0 shadow-xxs" />

        <div class="relative size-full min-h-full">
          <transition-slide
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
            group

            ghost-class="module-ghost"
            drag-class="module-drag"
            class="top-0 left-0 h-fit grid  gap-11 self-start  items-start justify-center  w-full px-1 pt-6  pb-4  z-0 inset-0 absolute overflow-y-auto"
            @update="onUpdate"

            @start="onDragStart($event)"
            @remove="remove"
            @end="onDragEnd()"
          >
            <div
              v-for="module in allUserModules" :key="module.name" class="size-full max-w-81 max-h-44"
              :class="{ hidden: filter.includes(module.name) }"
              :data-name="module.name"
            >
              <component :is="ghostRegistry[module.name]" :data-name="module.name" :title="module.title" :queue="module.queue" />
            </div>
          </transition-slide>
        </div>
      </div>
    </transition-slide>
  </div>
</template>

<style scoped>

</style>