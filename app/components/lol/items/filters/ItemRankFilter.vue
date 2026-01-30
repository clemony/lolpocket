<script setup lang="ts">
const {
  class: className,
  clear = true,
  hover = 'neutral',
  size = ['sq-12', '12'],
  variant = 'btn',
} = defineProps<{
  class?: HTMLAttributes['class']
  size?: ButtonVariants['size'][]
  variant?: ButtonVariants['variant']
  hover?: ButtonVariants['hover']
  clear?: boolean
}>()
// @todo fixthis
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
    :class="
      cn('relative z-1 flex w-full flex-wrap items-center gap-3', className)
    "
  >
    <Button
      v-if="is().filters.rank && clear"
      class="order-first hover:*:opacity-100"
      :variant
      :hover
      :size="size[0]"
      @click="is().filters.rank = null"
    >
      <icon class="size-4" name="x" />
    </Button>

    <Label
      v-for="rank in Object.keys(itemRankColor)"
      :key="rank"
      :size="size[1]"
      base="btn"
      :hover="is().filters.rank === rank ? 'btn' : hover"
      :variant="is().filters.rank === rank ? 'neutral' : variant"
      :class="
        cn('hover:text-bc order-2 px-5 text-sm font-medium! shadow-none', {
          'order-1': is().filters.rank === rank,
        })
      "
      @click="is().filters.rank === rank ? (is().filters.rank = null) : null"
    >
      <input
        v-model="is().filters.rank"
        class="peer absolute hidden"
        type="radio"
        :value="rank"
        name="item-types"
      >
      {{ rank }}
    </Label>
  </TransitionSlideLeft>
</template>

<style scoped></style>
