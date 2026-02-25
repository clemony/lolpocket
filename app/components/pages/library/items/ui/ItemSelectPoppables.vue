<script lang="ts" setup>
import { statIndex } from "#shared/constants/common/stat-index"
import { itemTags } from "#shared/constants/items/itemTags"
import type {
  ButtonProps,
  CheckboxGroupItem,
  CheckboxGroupProps,
} from "@nuxt/ui"

const props = withDefaults(
  defineProps<{
    collapsed?: boolean
    side?: Side
    size?: ButtonProps["size"]
    arrow?: boolean
    align?: Align
  }>(),
  {
    side: "left",
    align: "center",
    arrow: true,
  }
)
const { filters } = storeToRefs(is())

const statItems = computed<CheckboxGroupItem[]>(() =>
  Object.values(statIndex)
    .filter((s) => s.group !== "champion")
    .map((s) => ({ id: s.id, name: s.name }))
)

const tagItems = computed<CheckboxGroupItem[]>(() =>
  itemTags.map((t) => ({ id: t.id, name: t.name }))
)

const ui = props.collapsed ? { base: "rounded-full" } : {}

const shared = {
  indicator: "end",
  color: "primary",
  variant: "select",
  labelKey: "name",
  valueKey: "id" as CheckboxGroupProps["valueKey"],
} satisfies CheckboxGroupProps
</script>

<template>
  <!-- stats -->
  <SidebarPoppableCollapse
    label="Statistics"
    v-bind="props"
    :ui
    legend="Statistics"
    :value="filters?.stats.length"
    icon="i-bar-chart">
    <template #content>
      <UCheckboxGroup
        v-model:model-value="filters.stats"
        v-bind="shared"
        :items="statItems"
        @entry-focus.prevent />
    </template>
  </SidebarPoppableCollapse>

  <!-- categories -->
  <SidebarPoppableCollapse
    v-bind="props"
    label="Categories"
    :ui
    legend="Categories"
    icon="i-tag"
    :value="filters?.tags.length">
    <template #content>
      <UCheckboxGroup
        v-bind="shared"
        v-model:model-value="filters.tags"
        :items="tagItems"
        @entry-focus.prevent />
    </template>
  </SidebarPoppableCollapse>
</template>
