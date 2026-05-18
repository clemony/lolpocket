<script lang="ts" setup>
import type { Folder } from "#shared/schema"
import type { CollapsibleProps } from "@nuxt/ui"
import { VueDraggable } from "vue-draggable-plus"
import { useBackpack } from "~/domain/backpack/useBackpack"
import { editFolderIcon } from "~/domain/pocket/folder/editFolder"
import { useFolderChildren } from "~/domain/pocket/folder/useFolder"
import { onAdd, onChange } from "~/domain/pocket/helpers/drag"

defineOptions({
  inheritAttrs: false
})
const props = defineProps<
  CollapsibleProps & {
    item: Folder | undefined
    collapsed?: boolean
  }
>()
const emit = defineEmits<{
  "update:open": [value: boolean]
}>()

const item = computed(() => safeObject(props.item))

const { children, childRefs, childKey } = useFolderChildren(item)
const delegated = reactiveOmit(props, "item")

const contextOpen = shallowRef<boolean>(false)

const { sidebarFolderRefs } = useBackpack()

const { editing, toggleEdit } = useEditableButtonProvider()
const disabled = shallowRef<boolean>(false)
</script>

<template>
  <FolderContextMenu
    v-model:open="contextOpen"
    :disabled="editing || !item || disabled"
    :folder="item"
    @toggle-edit="toggleEdit()"
    @keydown.meta="disabled = true"
    @update:icon-key="editFolderIcon(item, $event)">
    <UCollapsible
      v-if="!collapsed && item?.id"
      v-bind="delegated"
      v-model:open="sidebarFolderRefs[item.id]"
      :disabled="editing || !item.children?.value.length"
      :ui="{
        root: 'group/collapse-child',
        content:
          'my-0! flex w-full max-w-full flex-col gap-0 overflow-hidden pl-5'
      }">
      <SidebarFolderButton
        :open="sidebarFolderRefs[item.id]"
        :item
        :context-open
        @update:open="
          sidebarFolderRefs[item.id] = !sidebarFolderRefs[item.id]
        " />
      <template #content>
        <div
          class="relative z-0 w-full max-w-full overflow-hidden *:py-0! before:pointer-events-none before:absolute before:left-px before:h-full before:w-px before:border-l before:border-l-p4/80">
          <VueDraggable
            class="pocket-button grid w-full auto-rows-fr gap-y-0 overflow-hidden p-1"
            :model-value="children"
            easing="ease-in-out"
            filter=".not-draggable"
            :animation="150"
            :group="{ name: 'pocket' }"
            @add="onAdd($event, item?.id)"
            @change="onChange($event)">
            <template v-if="children.length">
              <template v-for="(child, i2) in children" :key="childKey(child)">
                <div class="h-10 max-h-10 w-full overflow-hidden pl-0.5">
                  <SidebarPocketButton
                    :ref="childRefs.set"
                    :item="child"
                    @dblclick.stop.prevent
                    @update:label="
                      (e: string) =>
                        pocketStore().updatePocketName(
                          String(child.pocket?.key),
                          e
                        )
                    " />
                </div>
              </template>
            </template>
            <div
              v-else
              class="not-draggable grid w-full auto-rows-fr items-center gap-y-0.5 py-3 pl-6">
              <span class="text-xs italic">Empty</span>
            </div>
          </VueDraggable>
        </div>
      </template>
    </UCollapsible>
  </FolderContextMenu>
</template>
