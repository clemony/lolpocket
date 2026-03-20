<script lang="ts" setup>
import type { ButtonProps, CheckboxGroupItem } from "@nuxt/ui"
import type { ToggleButtonProps } from "~~/layers/ui/app/variants/toggle"
import { statIndex } from "~~/shared/constants/common/stat-index"
import { itemTags } from "~~/shared/constants/items/itemTags"

const { filters } = storeToRefs(is())

const statItems = computed<CheckboxGroupItem[]>(() =>
  Object.values(statIndex)
    .filter((s) => s.group !== "champion")
    .map((s) => ({ value: s.id, label: s.name }))
)

const tagItems = computed<CheckboxGroupItem[]>(() =>
  itemTags.map((t) => ({ value: t.id, label: t.name }))
)

const btnProps: ButtonProps & ToggleButtonProps = {
  size: "xl",
  color: "p0",
  variant: "solid",
  square: true,
  activeColor: "neutral",
  ui: {
    base: "rounded-full"
  }
}
</script>

<template>
  <!-- shop -->
  <span
    :data-tip="filters.purchasable ? 'Purchasable Items' : 'All Items'"
    class="tooltip tooltip-left">
    <Toggle
      v-model:model-value="filters.purchasable"
      tabindex="-1"
      v-bind="btnProps"
      :active="filters.purchasable"
      :ui="{
        base: cn(
          'rounded-full',
          filters.purchasable
            ? ' hover:bg-neutral/90 text-nc  drop-shadow-md drop-shadow-md not-open:drop-shadow-black/4 open:drop-shadow-black/18 '
            : ''
        ),
        leadingIcon: cn(
          'size-4.5 -translate-y-px **:stroke-[1.4]',
          filters.purchasable ? 'text-nc size-5' : 'hover:text-pc'
        )
      }"
      :icon="
        filters.purchasable
          ? 'i-infinity'
          : 'i-streamline-shopping-store-signage-3-street-sandwich-shops-shop-stores-board-sign-store'
      " />
  </span>
  <!-- map -->
  <MapSelector size="xl" :ui="{ base: 'rounded-full' }" collapsed />

  <!-- tier -->
  <LibraryItemTierSelect collapsed />

  <!-- stats -->
  <SelectPopover
    label="Statistics"
    :content="{ side: 'left', align: 'center' }"
    legend="Statistics"
    :value="filters?.stats.length">
    <template #default="{ open }">
      <div
        data-tip="Item Stats"
        :class="cn(open ? '' : 'tooltip tooltip-left')">
        <UButton icon="i-bar-chart" v-bind="btnProps" />
      </div>
    </template>
    <template #content>
      <UCheckboxGroup
        v-model:model-value="filters.stats"
        :items="statItems"
        @entry-focus.prevent />
    </template>
  </SelectPopover>

  <!-- categories -->
  <SelectPopover
    :content="{ side: 'left', align: 'center' }"
    legend="Categories"
    :value="filters?.tags.length">
    <template #default="{ open }">
      <div
        data-tip="Item Categories"
        :class="cn(open ? '' : 'tooltip tooltip-left')">
        <UButton icon="i-tag" v-bind="btnProps" />
      </div>
    </template>
    <template #content>
      <UCheckboxGroup
        v-model:model-value="filters.tags"
        :items="tagItems"
        @entry-focus.prevent />
    </template>
  </SelectPopover>

  <!-- reset -->

  <div data-tip="Reset Filter" class="tooltip tooltip-left">
    <UButton
      size="xl"
      color="p0"
      icon="i-reset"
      :ui="{
        base: 'rounded-full'
      }"
      square
      @click="is().clearFilters()" />
  </div>
</template>
