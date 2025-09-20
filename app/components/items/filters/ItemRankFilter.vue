<script setup lang="ts">
import { itemRanks } from '~~/shared/appdata/filters/item-ranks'

const { class: className } = defineProps<{
  class?: HTMLAttributes['class']
}>()
// TODO fixthis
function handleReset() {
  // is().filters.rank = null
  // is().itemGridApi.refreshCells()
}
const route = useRoute()
function handleUpdate() {
  if (route.path === '/items/stats') {
    // is().itemGridApi.refreshCells()
  }
}
</script>

<template>
  <transition-slide
    group
    :class="cn('flex items-center w-full flex-wrap gap-3 relative', className)">
    <Button
      v-show="is().filters.rank"
      variant="btn"
      size="lg"
      class="*:opacity-50 hover:*:opacity-100"
      shape="square"
      @click="is().filters.rank = null">
      <icon name="x-sm" />
    </Button>

    <Label
      v-for="rank in itemRanks"
      :key="rank"
      size="lg"
      :variant="
        is().filters.rank === rank ? 'neutral'
        : is().filters.rank && is().filters.rank !== rank ? 'hidden'
          : 'btn'
      "
      class="!font-medium px-5 text-xs"
      @click="is().filters.rank === rank ? (is().filters.rank = null) : null">
      <input
        v-model="is().filters.rank"
        :disabled="is().filters.rank === rank"
        class="peer hidden absolute"
        type="radio"
        :value="rank"
        name="item-types" />
      {{ rank }}
    </Label>
  </transition-slide>
</template>

<style scoped></style>
