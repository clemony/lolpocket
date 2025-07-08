<script lang="ts" setup>
import { motion } from 'motion-v'

const is = useItemStore()

function onColHide(id) {
  is.itemGridApi!.applyColumnState({
    state: [
      { colId: id, hide: true },
    ],
  })
}
function onColShow(id) {
  is.itemGridApi!.applyColumnState({
    state: [
      { colId: id, hide: false },
    ],
  })
}
const hidden = ref(['gp10'])
watch(
  () => is.dbItemStatListKey,
  (newVal) => {
    console.log('💠 - newVal:', newVal)
    if (newVal)
      hidden.value = null
  },
)
const cols = computedAsync (() => is.itemGridApi.getAllGridColumns())
const filteredCols = computedAsync (() => cols.value.filter(c => c.getColDef().headerName != '' && c.getColDef().headerName != 'Item'))
</script>

<template>
  <DropdownMenu v-if="cols" :key="is.dbItemStatListKey" class="">
    <DropdownMenuTrigger class=" w-full h-10 rounded-lg shadow-sm drop-shadow-sm !bg-n1/85 inset-shadow-sm  items-center font-medium border-accent text-2 grow px-4  **:text-nc justify-start flex group/b">
      <span class="flex  !text-nc text-start justify-start grow">Hide Columns</span>

      <icon name="down-sm" class="group-data-[state=open]/b:rotate-180 tldr-20" />
    </DropdownMenuTrigger>

    <ContrastDropdownContent :side-offset="2" align="start" class="flex flex-col w-32 max-h-80 px-1 overflow-y-scroll">
      <ContrastDropdownItem
        v-for="col in filteredCols"
        :key="col.getColId()">
        <label v-if="col && col.isVisible()" :key="col.getColId() + col.isVisible() + 0" class="w-full  group/hide !pointer-events-auto   size-full  text-nowrap !text-2  font-medium px-1 relative  capitalize  flex gap-4 justify-start " @click="onColHide(col.getColId())">
          <input
            v-model="hidden"
            class=" hidden"
            :checked="!col.isVisible()"
            :style="{ '--noise': 0 }"
            :value="col.getColDef().hide"
            type="checkbox"
            name="stats" />

          {{ col.getColDef().headerName }}
          <Grow />

          <span v-tippy="'hidden'" class="size-1.5 grid place-items-center relative justify-self-end *:shrink-0 ">
            <icon v-if="col.isVisible() == false" name="tick-sm" class="size-6 tldr-30 opacity-70 peer-checked:opacity-70 absolute" />
          </span>
        </label>

        <label v-else :key="col.getColId() + col.isVisible()" class="   group/hide !pointer-events-auto px-1  flex-nowrap text-nowrap  !text-2 size-full font-medium  relative  capitalize  flex gap-4 justify-start " @click="onColShow(col.getColId())">
          <input
            v-model="hidden"
            class=" hidden"
            :checked="!col.isVisible()"
            :style="{ '--noise': 0 }"
            :value="col.getColDef().hide"
            type="checkbox"
            name="stats" />

          {{ col.getColDef().headerName }}
          <Grow />

          <span v-tippy="'hidden'" class="size-4.5  relative justify-self-end grid place-items-center *:shrink-0  ">
            <icon v-if="col.isVisible() == false" name="tick-sm" class="size-6  tldr-30 opacity-70 peer-checked:opacity-70 absolute" />
          </span>
        </label>
      </ContrastDropdownItem>
    </ContrastDropdownContent>
  </DropdownMenu>
</template>