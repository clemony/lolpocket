<script lang="ts" setup>
import type { ContextMenuItemProps } from "reka-ui"
import { randomizeHistoryName } from "~/domain/pocket/helpers/utils"
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

const input = useTemplateRef<EditInputExpose>("input")
const toggleEdit = () => input.value?.toggleEdit()
const focusInput = () => input.value?.focusInput()

const menuOpen = shallowRef<boolean>(false)

const store = pocketStore()

function handleEdit(event: string) {
  console.log("🥸 - handleEdit - event:", event)
  store.updatePocketName(String(props.item.pocket?.key), event)
}
</script>

<template>
  <PocketContextMenu
    v-model:open="menuOpen"
    :item="item.pocket"
    :ui="pocketSidebarContextUi"
    @toggle-edit="toggleEdit()">
    <EditableButton
      ref="input"
      :label="item?.label"
      :avatar="props.item.avatar"
      :ui="{ ...item?.ui, base: cn('pr-6', item?.ui?.base) }"
      :value="item?.label || ''"
      :active="menuOpen"
      @update:label="handleEdit($event)">
      <template #input-actions>
        <LazyUButton
          size="xs"
          icon="i-sparkle"
          :ui="{ base: 'max-size-6! size-6! max-w-6! min-w-6! rounded-sm' }"
          @pointerdown.prevent.stop
          @click.stop.prevent="
            randomizeHistoryName(input?.localLabel, focusInput)
          " />
      </template>
    </EditableButton>
  </PocketContextMenu>
</template>
