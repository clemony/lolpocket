<script setup lang="ts">
import { itemRankColor } from "#shared/constants/items/itemRankColor"
import type { ButtonProps } from "@nuxt/ui"

const {
  color = "primary",
  class: className,
  clear = true,

  size = ["sq-12", "12"]
} = defineProps<{
  class?: HTMLAttributes["class"]
  size?: ButtonProps["size"][]
  color?: ButtonProps["color"]

  clear?: boolean
}>()
// todo fixthis
function handleReset() {
  // is().filters.rank = null
  // is().itemGridApi.refreshCells()
}
const route = useRoute()
function handleUpdate() {
  if (route.path === "/items/stats") {
    // is().itemGridApi.refreshCells()
  }
}
</script>

<template>
  <TransitionSlide
    group
    :class="
      cn('relative z-1 flex w-full flex-wrap items-center gap-3', className)
    ">
    <UButton
      v-if="is().filters.rank && clear"
      class="order-first hover:*:opacity-100"
      :color
      size="sm"
      @click="is().filters.rank = ''">
      <icon class="size-4" name="x" />
    </UButton>

    <Label
      v-for="rank in Object.keys(itemRankColor)"
      :key="rank"
      size="sm"
      base="btn"
      :color="is().filters.rank === rank ? 'neutral' : color"
      :class="
        cn('order-2 px-5 text-sm font-medium! shadow-none hover:text-pc', {
          'order-1': is().filters.rank === rank
        })
      "
      @click="is().filters.rank === rank ? (is().filters.rank = '') : null">
      <input
        v-model="is().filters.rank"
        class="peer absolute hidden"
        type="radio"
        :value="rank"
        name="item-types" />
      {{ rank }}
    </Label>
  </TransitionSlide>
</template>
