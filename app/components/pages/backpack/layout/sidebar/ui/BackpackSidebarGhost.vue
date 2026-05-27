<script lang="ts" setup>
import type { Data, DragDropManager, Draggable } from "@dnd-kit/abstract"
import {
  asSortableFolder,
  asSortablePocket
} from "~/domain/pocket/helpers/typeAssert"
const { source, manager } = defineProps<{
  source: Data | undefined
  manager?: DragDropManager<any, any>
}>()

const isButton = shallowRef<boolean>(false)

onMounted(() => {
  isButton.value = !!source?.data && source?.data?.listType === "sidebar"
})
</script>

<template>
  <SidebarTheme v-if="isButton">
    <UButton v-bind="source?.button">
      <UBadge v-if="source?.count" :label="source?.count" />
    </UButton>
  </SidebarTheme>
</template>
