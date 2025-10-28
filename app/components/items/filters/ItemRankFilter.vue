<script setup lang="ts">
import { itemRanks } from '~~/shared/appdata/filters/item-ranks'

const { class: className, clear = true, hover = 'neutral', size = ['sq-lg', 'lg'], variant = 'btn' } = defineProps<{
  class?: HTMLAttributes['class']
  size?: ButtonVariants['size'][]
  variant?: ButtonVariants['variant']
  hover?: ButtonVariants['hover']
  clear?: boolean
}>()
<<<<<<< HEAD
// @todo fixthis
=======
// TODO fixthis
>>>>>>> refs/remotes/origin/main
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
    <Button
      v-if="is().filters.rank && clear"
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
      :hover=" is().filters.rank === rank.name ? 'btn' : hover"
      :variant="
        is().filters.rank === rank.name ? 'neutral' : variant
      "
<<<<<<< HEAD
      :class="cn('!font-medium px-5 text-2 hover:text-bc order-2 shadow-none ', { 'order-1 ': is().filters.rank === rank.name })"
      @click="is().filters.rank === rank.name ? (is().filters.rank = null) : null">
      <input
        v-model="is().filters.rank"
        class="peer absolute hidden"
=======
      :class="cn('!font-medium px-5 text-2 hover:text-bc order-2 shadow-none border-b3/80', { 'order-1 ': is().filters.rank === rank.name })"
      @click="is().filters.rank === rank.name ? (is().filters.rank = null) : null">
      <input
        v-model="is().filters.rank"
        class="peer hidden absolute"
>>>>>>> refs/remotes/origin/main
        type="radio"
        :value="rank.name"
        name="item-types" />
      {{ rank.name }}
    </Label>
  </TransitionSlideLeft>
</template>

<style scoped></style>
