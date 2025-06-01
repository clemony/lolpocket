<script lang="ts" setup>
import TableTrash from './TableTrash.vue'

const ps = usePocketStore()

const component = shallowRef(null)

const isOpen = ref(false)

function handleClick(comp) {
  component.value = comp
  isOpen.value = true
}

const target = ref(null)

onClickOutside(target, event => component.value = null)
</script>

<template>
  <Sheet id="sheet" v-model:open="isOpen" class=" flex transition-all duration-400 overflow-hidden ">
    <div class="outline-0 z-0 pointer-events-none flex ml-6  mt-7 gap-4 *:pointer-events-auto **:[&_svg]:shrink-0 **:[&_svg]:dst">
     
    
    </div>
    <BasicSheet ref="target" side="right" class=" border !mt-[1vh] !h-[98vh] border-b3 !z-60 rounded-l-xl">
      <div
        class="min-w-110 w-110 *:w-full relative h-full pl-2 pr-0 "
      >
        <component :is="component" grid="pocket" />
      </div>
    </BasicSheet>
  </Sheet>
</template>

<style scoped>

</style>
