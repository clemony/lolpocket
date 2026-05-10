<script lang="ts" setup>
import type { CollapsibleProps } from "@nuxt/ui"
import { VueDraggable } from "vue-draggable-plus"
import type { Folder } from "#shared/schema"
import { editFolderIcon } from "~/domain/pocket/folder/editFolder"
import { useFolderChildren } from "~/domain/pocket/folder/useFolder"
import { useIconSet } from "~/domain/pocket/folder/useIconSet"
import { onAdd, onChange } from "~/domain/pocket/helpers/drag"
import { isDefault, randomizeHistoryName } from "~/domain/pocket/helpers/utils"
import type { EditInputExpose } from "~~/layers/ui/app/types/types"

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

const input = useTemplateRef<EditInputExpose>("input")
const editing = computed<boolean>(() => input.value?.editing.value || false)
const toggleEdit = () => input.value?.toggleEdit()
const focusInput = () => input.value?.focusInput()

function handleEdit(event: string) {
  console.log("🥸 - handleEdit - event:", event)
  user().updateFolderName(item.value.id, event)
}
const { children, childRefs, childKey } = useFolderChildren(item)
const delegated = reactiveOmit(props, "item")

const menuOpen = shallowRef<boolean>(false)
const store = pocketStore()

const open = shallowRef<boolean>(
  store.sidebarFolderRefs[item.value.id] || false
)

watch(
  () => open.value,
  (v) => {
    console.log("💠 - watch - newVal:", v)
  }
)
const isDefaultFolder = computed(() => item.value && isDefault(item.value))

const set = computed(() => useIconSet(props.item?.iconKey, open))

onBeforeRouteLeave(
  () => (store.sidebarFolderRefs[item.value.id] = open.value ?? false)
)
</script>

<template>
  <FolderContextMenu
    v-model:open="menuOpen"
    :disabled="editing || !item"
    :folder="item"
    @toggle-edit="toggleEdit()"
    @update:icon-key="editFolderIcon(item, $event)">
    <UCollapsible
      v-if="!collapsed && item?.id"
      v-bind="delegated"
      v-model:open="open"
      :disabled="editing"
      :ui="{
        root: 'group/collapse-child',
        content:
          'my-0! flex w-full max-w-full flex-col gap-0 overflow-hidden pl-5'
      }">
      <EditableButton
        v-if="!isDefaultFolder"
        ref="input"
        :label="item?.label"
        :icon="set.icon"
        trailing-icon="i-up"
        :ui="{ leadingIcon: set.class, trailingIcon: open ? 'rotate-180' : '' }"
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

      <UButton
        v-else
        :active="menuOpen"
        :icon="set.icon"
        variant="solid"
        color="transparent"
        :ui="{
          base: 'my-0! w-full grow hover:bg-p1',
          leadingIcon: cn('size-4.5', set.class),
          trailingIcon: cn('trailing-rotate', { '-rotate-180': open })
        }"
        :label="item.label"
        trailing-icon="i-up" />
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
                  <SidebarPocket
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
