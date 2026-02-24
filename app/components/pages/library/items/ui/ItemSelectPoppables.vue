<script lang="ts" setup>
import { statIndex } from "#shared/constants/common/stat-index"
import { itemTags } from "#shared/constants/items/itemTags"
import type { CheckboxGroupItem } from "@nuxt/ui"

const { collapsed } = defineProps<{
  collapsed?: boolean
}>()
const { filters } = storeToRefs(is())

const statItems = computed<CheckboxGroupItem[]>(() =>
  Object.values(statIndex)
    .filter((s) => s.group !== "champion")
    .map((s) => ({ id: s.id, name: s.name }))
)

const tagItems = computed<CheckboxGroupItem[]>(() =>
  itemTags.map((t) => ({ id: t.id, name: t.name }))
)
</script>

<template>
  <!-- stats -->
  <SidebarPoppableCollapse
    label="Statistics"
    :collapsed
    legend="Statistics"
    label-placement="end"
    :value="filters?.stats.length"
    icon="i-bar-chart">
    <template #content>
      <UCheckboxGroup
        v-model:model-value="filters.stats"
        :multiple="true"
        indicator="end"
        color="primary"
        variant="select"
        label-key="name"
        value-key="id"
        :items="statItems"
        @entry-focus.prevent />
    </template>
  </SidebarPoppableCollapse>

  <!-- categories -->
  <SidebarPoppableCollapse
    :collapsed
    label="Categories"
    legend="Categories"
    icon="i-tag"
    :value="filters?.tags.length">
    <template #content>
      <UCheckboxGroup
        v-model:model-value="filters.tags"
        :collapsed
        indicator="end"
        color="primary"
        variant="select"
        :multiple="true"
        label-key="name"
        icon="i-check"
        value-key="id"
        :items="tagItems"
        @entry-focus.prevent />
    </template>
  </SidebarPoppableCollapse>
</template>
