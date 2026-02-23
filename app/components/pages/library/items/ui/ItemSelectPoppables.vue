<script lang="ts" setup>
const { collapsed } = defineProps<{
  collapsed?: boolean
}>()
const { filters } = storeToRefs(is())
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
        :items="Object.values(statIndex).filter((s) => s.group !== 'champion')"
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
        color="neutral"
        variant="select"
        :multiple="true"
        label-key="name"
        icon="i-check"
        value-key="id"
        :items="itemTags"
        @entry-focus.prevent />
    </template>
  </SidebarPoppableCollapse>
</template>
