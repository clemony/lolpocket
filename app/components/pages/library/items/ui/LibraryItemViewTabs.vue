<script lang="ts" setup>
import { LibraryItemGrid, LibraryItemTable } from "#components"
const emit = defineEmits(["updateTab"])

const tabs = shallowRef<number>(0)

const tabData = [
  {
    value: 0,
    icon: "i-lucide-layout-grid",
    component: LibraryItemGrid,
  },
  {
    value: 1,
    icon: "i-lucide-table-2",
    component: LibraryItemTable,
  },
]
</script>

<template>
  <UTabs
    v-model:model-value="tabs"
    :ui="{ trigger: 'px-5 self-end ' }"
    :items="Object.values(tabData)"
    size="sm"
    color="neutral"
    :default-value="tabs"
    @update:model-value="emit('updateTab', tabData[tabs]?.component)" />
</template>
