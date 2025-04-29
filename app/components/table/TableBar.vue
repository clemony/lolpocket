<script lang="ts" setup>
import ColumnDisplay from 'components/table/panels/ColumnDisplay.vue'
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
      <div
        class="btn hover:bg-b2/40 h-11  hover:border-b3/60 rounded-md flex gap-1 px-3.5 btn-thingy items-end"
      >
        <SheetTrigger class="hover-tabs" @click="component = ColumnDisplay">
          <icon name="search" class="size-4 mb-0.25" />
          Search
        </SheetTrigger>

        <SheetTrigger class="hover-tabs" :class="{ 'active-hover-tabs': component == TableTrash }" @click="component = TableTrash">
          <icon name="trash" class="size-4.5" />
          Trash
        </SheetTrigger>

        <SheetTrigger class="hover-tabs" @click="component = ColumnDisplay">
          <icon name="archive" class="size-3.75 overflow-hidden " />
          Archive
        </SheetTrigger>
        <SheetTrigger class="hover-tabs" :class="{ 'active-hover-tabs': component == ColumnDisplay }" @click="component = ColumnDisplay">
          <icon name="ph:text-columns-light" class="size-6 " />
          Columns
        </SheetTrigger>
      </div>
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
