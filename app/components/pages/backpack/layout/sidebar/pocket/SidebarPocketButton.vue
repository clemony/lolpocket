<script lang="ts" setup>
import type { ContextMenuItemProps } from "reka-ui"
import { pocketSidebarContextUi } from "~/domain/pocket/menu/contextActions"
import type { PocketProps } from "~/domain/pocket/types"
import type { EditInputExpose } from "~~/layers/ui/app/types/types"

const props = withDefaults(
  defineProps<{
    item: PocketProps
    open?: boolean
  }>(),
  {
    open: false,
    type: "button"
  }
)

const emit = defineEmits<{
  "update:open": [value: boolean]
  "update:label": [value: string]
}>()

const contextOpen = shallowRef<boolean>(false)

const store = pocketStore()

const { editing, randomizeHistoryName, toggleEdit } =
  useEditableButtonProvider()
function handleEdit(event: string) {
  console.log("🥸 - handleEdit - event:", event)
  store.updatePocketName(String(props.item.pocket?.key), event)
}
</script>

<template>
  <PocketContextMenu
    v-model:open="contextOpen"
    :item="item.pocket"
    type="sidebar"
    :ui="pocketSidebarContextUi"
    @toggle-edit="toggleEdit()">
    <EditableButton
      ref="input"
      :label="item?.label"
      :avatar="props.item.avatar"
      :ui="{
        ...item?.ui,
        base: cn('pr-6', item?.ui?.base),
        label: 'align-baseline text-md! font-medium tracking-tight'
      }"
      :value="item?.label || ''"
      :variant="contextOpen ? 'soft' : 'ghost'"
      :color="contextOpen ? 'primary' : 'primary'"
      @update:label="handleEdit($event)">
      <template #input-actions>
        <LazyUButton
          size="xs"
          icon="i-sparkle"
          :ui="{ base: 'max-size-6! size-6! max-w-6! min-w-6! rounded-sm' }"
          @pointerdown.prevent.stop
          @click.stop.prevent="randomizeHistoryName()" />
      </template>
    </EditableButton>
  </PocketContextMenu>
</template>
