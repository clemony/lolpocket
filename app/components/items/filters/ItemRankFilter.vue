<script setup lang="ts">
import { itemRanks } from '~/utils/filter/itemFilters'

const { class: className } = defineProps<{
  class?: HTMLAttributes['class']

}>()
// TODO fixthis
function handleReset() {
  // fi().filters.rank = null
  // is.itemGridApi.refreshCells()
}
const route = useRoute()
function handleUpdate() {
  if (route.path == '/items/stats') {
    // is.itemGridApi.refreshCells()
  }
}
</script>

<template>
  <transition-slide
    group
    :class="cn('flex items-center w-full flex-wrap gap-3 relative', className)">
    <Button
      v-show="fi().filters.rank"
      variant="btn"
      size="lg"
      class="*:opacity-50 hover:*:opacity-100"
      shape="square"
      @click="fi().filters.rank = null">
      <icon name="x-sm" />
    </Button>

    <Label
      v-for="rank in itemRanks"
      :key="rank"
      size="lg"
      :variant="fi().filters.rank == rank ? 'neutral' : fi().filters.rank && fi().filters.rank != rank ? 'hidden' : 'btn'"
      class="!font-medium px-5  text-2 "
      @click="fi().filters.rank == rank ? fi().filters.rank = null : null">

      <input
        v-model="fi().filters.rank"
        :disabled="fi().filters.rank == rank"
        class="peer hidden absolute"
        type="radio"
        :value="rank"
        name="item-types" />
      {{ rank }}
    </Label>
  </transition-slide>
</template>

<style scoped></style>
