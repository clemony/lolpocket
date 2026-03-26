<script lang="ts" setup>
import type {
  ButtonProps,
  CheckboxGroupProps,
  RadioGroupProps
} from "@nuxt/ui"
import type { ToggleButtonProps } from "~~/layers/ui/app/variants/toggle"

defineOptions({
  inheritAttrs: false
})
const { items } = defineProps<{
  items: Record<string, CheckboxItem[]>
}>()
const { filters } = storeToRefs(is())
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

const groupUi = {
  fieldset: "space-y-0.5 py-1",
  item: "px-2 items-center flex hover:bg-p2/60! has-checked:bg-p2 rounded-md h-7.5",
  label: "group-hover/x:no-underline"
}

const checkboxProps = {
  indicator: "end",
  color: "default",
  variant: "select",
  icon: "i-tick",
  ui: {
    ...groupUi,
    icon: "**:stroke-[2.4]"
  }
} satisfies CheckboxGroupProps

const radioProps = {
  indicator: "end",
  color: "default",
  valueKey: "label",
  ui: groupUi
} satisfies RadioGroupProps<CheckboxItem[], "label">
</script>

<template>
  <!-- shop -->
  <span
    :data-tip="filters.purchasable ? 'Purchasable Items' : 'All Items'"
    class="tooltip tooltip-left">
    <Toggle
      v-model:model-value="filters.purchasable"
      tabindex="-1"
      size="lg"
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
        :items="items.stats"
        v-bind="checkboxProps"
        @entry-focus.prevent />
    </template>
  </SelectPopover>

  <!-- categories -->
  <SelectPopover
    :content="{ side: 'left', align: 'center' }"
    legend="Categories">
    <template #default="{ open }">
      <div
        data-tip="Item Categories"
        :class="cn(open ? '' : 'tooltip tooltip-left')">
        <UButton icon="i-tag" v-bind="btnProps" />
      </div>
    </template>
    <template #content>
      <URadioGroup
        v-model:model-value="filters.tags"
        :items="items.tags"
        v-bind="radioProps"
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
