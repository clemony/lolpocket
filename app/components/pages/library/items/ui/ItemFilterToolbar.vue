<script lang="ts" setup>
import type { ButtonProps } from "@nuxt/ui"
const { nav } = defineProps<{
  nav: ButtonProps[]
}>()
const { filters } = storeToRefs(is())
</script>

<template>
  <!-- shop -->
  <Tooltip
    class="grid place-items-center"
    :trailing-icon="filters.purchasable ? '' : 'i-infinity'"
    :label="filters.purchasable ? 'Purchasable Items' : 'All Items'"
    side="top">
    <Toggle
      v-model:model-value="filters.purchasable"
      active-color="neutral"
      size="xl"
      active-variant="solid"
      :ui="{
        base: cn(
          filters.purchasable
            ? 'inset-shadow-xs  rounded-full drop-shadow-md drop-shadow-md not-open:drop-shadow-black/4 open:drop-shadow-black/18 '
            : ''
        ),
        leadingIcon:
          'size-4.5 -translate-y-px **:stroke-[1.4] group-on/btn:text-nc',
      }"
      square
      leading-icon="i-streamline-shopping-store-signage-3-street-sandwich-shops-shop-stores-board-sign-store"
      :active="filters.purchasable"
      variant="ghost" />
  </Tooltip>
  <!-- select menus -->
  <ItemSelectPoppables collapsed size="xl" />

  <!-- map -->
  <MapSelector
    size="xl"
    :ui="{ base: 'rounded-full drop-shadow-md drop-shadow-black/4' }"
    collapsed />

  <!-- reset -->
  <Tooltip label="Reset Filter" class="h-full">
    <UButton
      size="xl"
      color="neutral"
      icon="i-reset"
      :ui="{
        base: 'rounded-full drop-shadow-md not-open:drop-shadow-black/4 open:drop-shadow-black/18',
      }"
      square
      @click="is().clearFilters()" />
  </Tooltip>
</template>
