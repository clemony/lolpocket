<script lang="ts" setup>
import { vDraggable } from 'vue-draggable-plus'

import type { HTMLAttributes } from 'vue'
import { toast } from 'vue-sonner'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()

definePageMeta({
  alias: '/summoner',
  path: '/summoner',
  name: 'Board',
})

const as = useAccountStore()
function onAdd(event: any) {
  console.log('💠 - onAdd - event:', event)

  if (as.userModuleCount == 9) {
    toast.error('No spaces left. Remove a module to add another.')
    return
  }
  const moduleName = event.item?.dataset?.name // Ensure the module name is retrieved

  const index = event.newIndex // Vue Draggable provides this

  if (!moduleName || index === undefined) {
    console.warn(`⚠️ Skipping empty module at index ${index}`)
    return
  }

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

const ts = useTempStore()
const user = ref(as.userAccount)

const summoner = computed (() => {
  const a = user.value.gameName != 'Summoner' ? user.value.gameName : user.value.name != 'Summoner' ? user.value.name : 'Summoner'

  return `${a}'s Board`
})
</script>

<template>
  <div class=" wrapper items-center justify-center gap-15 bg-gradient-to-b from-b1 to-b2/40 module-container">
    <PageHeader :title="summoner">
    </PageHeader>

    <div class="size-full">
      <div
        v-draggable="[
          as.userBoardModules,
          {
            group: {
              name: 'modules',
              pull: true,
              put: true,
            },
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
        :class="cn('grid grid-cols-[repeat(auto-fill,minmax(350px,1fr))] grid-rows-[repeat(auto-fill,minmax(280px,1fr))] gap-12 px-14 z-20 pointer-events-auto   auto-rows-min h-[84vh] max-h-[88vh] overflow-y-auto min-h-0 p-i-c cursor-move', props.class) "

        @add="onAdd"
      >
        <div v-for="(module, i) in as.userBoardModules" :key="`module-${i}`" class=" select-none size-full  relative grid p-i-c">
          <template v-if="module?.name">
            <component :is="moduleRegistry[module?.name]" :module-name="module?.name" />
          </template>
          <DefaultModule v-else :index="i" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
