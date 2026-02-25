<script lang="ts" setup>
import type { ButtonProps } from "@nuxt/ui"
const { nav } = defineProps<{
  nav: ButtonProps[]
}>()
const { filters } = storeToRefs(is())
</script>

<template>
  <!-- select menus -->
  <ItemSelectPoppables collapsed size="lg" />

  <!-- map -->
  <MapSelector
    size="lg"
    :ui="{ base: 'rounded-full drop-shadow-black/4 drop-shadow-md ' }"
    collapsed />

  <!-- shop -->
  <Tooltip
    class="grid place-items-center"
    :trailing-icon="filters.purchasable ? '' : 'i-infinity'"
    :label="filters.purchasable ? 'Purchasable Items' : 'All Items'"
    side="top">
    <Toggle
      v-model:model-value="filters.purchasable"
      active-color="p1"
      size="lg"
      active-variant="solid"
      :ui="{
        base: cn(
          filters.purchasable
            ? 'inset-shadow-xs  rounded-full drop-shadow-md drop-shadow-black/4'
            : ''
        ),
        leadingIcon: 'size-4.5 -translate-y-px **:stroke-[1.4]',
      }"
      square
      leading-icon="i-streamline-shopping-store-signage-3-street-sandwich-shops-shop-stores-board-sign-store"
      :active="filters.purchasable"
      variant="ghost" />
  </Tooltip>

  <!-- reset -->
  <Tooltip label="Reset Filter" class="h-full">
    <UButton
      size="lg"
      color="neutral"
      icon="i-reset"
      :ui="{ base: 'rounded-full  drop-shadow-md ' }"
      square
      @click="is().clearFilters()" />
  </Tooltip>
</template>
