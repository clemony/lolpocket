<script lang="ts" setup>
import type { ButtonProps } from "@nuxt/ui"
const { nav } = defineProps<{
  nav: ButtonProps[]
}>()
const emit = defineEmits(["updateTab"])
const { filters } = storeToRefs(is())
</script>

<template>
  <Tooltip
    v-for="(link, i) in nav"
    :key="i"
    side="top"
    class="size-10"
    :label="link.label">
    <UButton
      square
      variant="ghost"
      :icon="link.icon"
      :to="link.to"
      :ui="{
        leadingIcon: cn('size-5', link?.ui?.leadingIcon),
      }" />
  </Tooltip>

  <span class="mx-1 h-6 w-1 border-l border-p0 bg-p4" />
  <!-- view -->
  <ItemViewToggle collapsed @update-tab="(e) => emit('updateTab', e)" />

  <!-- search -->
  <SidebarCollapseInput :store="is()" />

  <!-- select menus -->
  <ItemSelectPoppables collapsed />

  <!-- map -->
  <MapSelector collapsed />

  <!-- shop -->
  <Tooltip
    class="grid place-items-center"
    :trailing-icon="filters.purchasable ? '' : 'i-infinity'"
    :label="filters.purchasable ? 'Purchasable Items' : 'All Items'"
    side="top">
    <Toggle
      v-model:model-value="filters.purchasable"
      active-color="p2"
      active-variant="solid"
      :ui="{
        base: cn(
          filters.purchasable
            ? 'inset-shadow-xs border-p4/60'
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
      color="neutral"
      icon="i-reset"
      square
      @click="is().clearFilters()" />
  </Tooltip>
</template>
