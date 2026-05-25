<script lang="ts" setup>
import { useDroppable } from "@dnd-kit/vue"
import type { ButtonProps } from "@nuxt/ui"
import { useBackpack } from "~/domain/backpack/useBackpack"
import { editFolderIcon } from "~/domain/pocket/folder/editFolder"

defineOptions({
  inheritAttrs: false
})

const props = defineProps<{
  folder: SortableFolder
  index: number
  open?: ComputedRef<boolean>
}>()

const { sidebarFolderRefs } = useBackpack()

const contextOpen = shallowRef<boolean>(false)
const item = computed(() => props.folder)

const userStore = user()

function handleEdit(event: string) {
  userStore.updateFolderName(item.value.id, event)
}

const { editing, toggleEdit } = useEditableButtonProvider()
const edit = computed(() =>
  item.value.sortable.type === "subfolder" ? useEditableButton() : undefined
)

function toggleFolder() {
  if (!item.value.id || !item.value.children?.value.length) return
  sidebarFolderRefs.value[item.value.id] =
    !sidebarFolderRefs.value[item.value.id]
}

const element = useTemplateRef<HTMLElement>("element")

const { isDropTarget: isCurrentDropTarget } = useDroppable({
  ...item.value.droppable,
  element
})

const isDropTarget = computed(() => isCurrentDropTarget.value)

const shared = computed(() => ({
  icon:
    props.folder.icons?.[props.open?.value ? "open" : "closed"] || undefined,
  label: props.folder?.label || " ",
  trailingIcon: props.folder?.count ? "i-up" : undefined
}))
</script>

<template>
  <UTheme
    :props="{ button: shared }"
    :ui="{
      button: {
        leadingIcon: props.folder?.icons?.class || undefined
      }
    }">
    <FolderContextMenu
      v-model:open="contextOpen"
      as-child
      :disabled="editing || !props.folder"
      :folder="props.folder"
      @toggle-edit="toggleEdit()"
      @update:icon-key="editFolderIcon(item, $event)">
      <Tooltip
        :disabled="!!props.folder.children?.value?.length"
        as-child
        label="Empty">
        <!--
          :data-dragging="isDragging" -->
        <div
          ref="element"
          :data-open="contextOpen"
          :data-active="$route.path === item.to"
          :data-targetted="isDropTarget"
          class="group/btn inset-x-0 flex h-10 max-h-10 w-full justify-start">
          <LazyEditableButton
            v-if="item.sortable.type === 'subfolder'"
            :value="item.label || ''"
            @click="toggleFolder()"
            @update:label="handleEdit($event)">
            <template #label>
              <span class="label">{{ item.label }}</span>
              <Grow />
              <UBadge v-if="item?.count" :label="item?.count || 0" />
            </template>
            <template #input-actions>
              <LazyUButton
                v-if="edit?.editing"
                size="xs"
                icon="i-sparkle"
                :ui="{
                  base: 'max-size-6! size-6! max-w-6! min-w-6! rounded-sm'
                }"
                @pointerdown.prevent.stop
                @click.stop.prevent="edit?.randomizeHistoryName()" />
            </template>
          </LazyEditableButton>

          <UButton v-else @click="toggleFolder()">
            <span class="label">{{ item.label }}</span>
            <Grow />
            <UBadge v-if="item?.count" :label="item?.count || 0" />
          </UButton>
        </div>
      </Tooltip>
    </FolderContextMenu>
  </UTheme>
</template>
