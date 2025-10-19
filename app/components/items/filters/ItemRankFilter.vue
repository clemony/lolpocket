<script setup lang="ts">
import { itemRanks } from '~~/shared/appdata/filters/item-ranks'

const { class: className, hover = 'neutral', size = ['sq-lg', 'lg'], variant = 'btn' } = defineProps<{
  class?: HTMLAttributes['class']
  size?: ButtonVariants['size'][]
  variant?: ButtonVariants['variant']
  hover?: ButtonVariants['hover']
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
  <TransitionSlideLeft
    group
    :class="cn('flex items-center w-full z-1  flex-wrap gap-3 relative', className)">
    <h6 class="opacity-100  w-22  order-first font-semibold text-bc/90">
      Item Tier
    </h6>
    <Button
      v-if="is().filters.rank"
      :variant
      :hover

      :size="size[0]"
      class="order-first hover:*:opacity-100"
      @click="is().filters.rank = null">
      <icon
        name="x"
        class="size-4" />
    </Button>

    <Label
      v-for="rank in itemRanks"
      :key="rank.name"
      :size="size[1]"
      base="btn"
      :hover=" is().filters.rank === rank.name ? 'neutral' : hover"
      :variant="
        is().filters.rank === rank.name ? 'neutral' : variant
      "
      :class="cn('!font-medium px-5 text-2 order-2', { 'order-1 ': is().filters.rank === rank.name })"
      @click="is().filters.rank === rank.name ? (is().filters.rank = null) : null">
      <input
        v-model="is().filters.rank"
        class="peer hidden absolute"
        type="radio"
        :value="rank.name"
        name="item-types" />
      {{ rank.name }}
    </Label>
  </TransitionSlideLeft>
</template>

<style scoped></style>
