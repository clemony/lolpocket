<script setup lang="ts">
import { itemRanks } from 'utils/filters/itemFilters'

const emit = defineEmits(['update:model'])

const is = useItemStore()

const route = useRoute()
function handleUpdate() {
  if (route.path == '/items/stats') {
    // is.itemGridApi.refreshCells()
  }
}
// TODO fixthis
function handleReset() {
  is.itemFilter.rank = null
  // is.itemGridApi.refreshCells()
}
</script>

<template>
  <div class="divider divider-start before:bg-b3/60 font-semibold  mb-8">
    Categories
  </div>

  <transition-slide group class="flex w-full flex-wrap gap-4 relative ">
    <input
      class="btn btn-sm   before:size-14 absolute  left-0 !text-5 font-normal "
      aria-label="All"
      type="reset"
      value="×"
      @click="handleReset()" />

    <label
      v-for="rank in itemRanks"
      :key="rank"
      class="!font-semibold   btn btn-sm  uppercase !text-0 group/filter  mr-0  " :class="{ '!bg-n1 !border-n1 text-nc !shadow-n1/20 shadow-sm order-first  ml-12': is.itemFilter.rank && is.itemFilter.rank.includes(rank), 'first-of-type:ml-12': !is.itemFilter.rank || is.itemFilter.rank == null }">

      <input
        v-model="is.itemFilter.rank" class="peer hidden absolute"
        type="radio"
        :value="rank"
        name="item-types"
        @change="handleUpdate()" />
      {{ rank }}
    </label>
  </transition-slide>
</template>

<style scoped></style>
