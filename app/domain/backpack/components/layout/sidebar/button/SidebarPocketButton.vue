<script lang="ts" setup>
import { useSortable } from "@dnd-kit/vue/sortable"
import { namespacedDragGroup } from "~/domain/backpack/utils/dragData"
import type { EditableButtonInstance } from "~~/layers/ui/app/types"

const props = defineProps<{
  item: SortablePocket
  open?: ComputedRef<boolean>
  index?: number
}>()

const item = computed(() => props.item)
const contextOpen = shallowRef<boolean>(false)

const store = pocketStore()

const editing = shallowRef<boolean>(false)
const button = computed(() => item.value.button?.value)

function handleEdit(event: string) {
  store.updatePocketName(props.item.key, event)
  editing.value = false
}

function handleToggleEdit() {
  contextOpen.value = false
  nextTick(() => {
    editing.value = true
  })
}
</script>

<template>
  <!--

  -->
  <div class="w-full">
    <EditableButton
      v-if="editing"
      :model-value="item.label"
      :avatar="button?.avatar"
      :randomizable="true"
      autofocus
      required
      @update:model-value="handleEdit($event)" />
    <PocketContextMenu
      v-else
      v-model:open="contextOpen"
      :disabled="editing || !item"
      :pocket="item"
      as-child
      @toggle-edit="handleToggleEdit()">
      <slot name="button" :context-open="contextOpen" />
    </PocketContextMenu>
  </div>
</template>
