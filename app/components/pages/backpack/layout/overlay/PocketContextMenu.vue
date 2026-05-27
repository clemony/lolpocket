<script lang="ts" setup>
import type {
  ContextMenuEmits,
  ContextMenuItem,
  ContextMenuProps
} from "@nuxt/ui"
import { useForwardPropsEmits } from "reka-ui"
import { useBackpack } from "~/domain/backpack/useBackpack"
import { deletePocket } from "~/domain/pocket/deletePocket"
import { deleteFolderWithConfirm } from "~/domain/pocket/folder/deleteFolder"
import { duplicatePocket } from "~/domain/pocket/manage/duplicate"
import {
  collapseAllBtn,
  contextOpen,
  pocketSidebarContextUi
} from "~/domain/pocket/menu/contextActions"
import { useSortMenu } from "~/domain/pocket/menu/sortMenu"

defineOptions({
  inheritAttrs: false
})

const props = defineProps<
  ContextMenuProps & {
    pocket: Pocket | undefined
    type?: "default" | "table" | "sidebar"
  }
>()

const emit = defineEmits<
  ContextMenuEmits & {
    toggleEdit: [boolean]
  }
>()
const item = computed(() => props.pocket)
const subopen = shallowRef<boolean>(false)
const delegated = reactiveOmit(props, "class", "pocket")
const forwarded = useForwardPropsEmits(delegated, emit)
const { collapseAllFolders } = useBackpack()
const sortMenu = useSortMenu()
const collapseAllItem = computed(() =>
  toMenuItem(collapseAllBtn(collapseAllFolders))
)

const handleDelete = async () => {
  if (!item.value) return

  if (user().localSettings.confirm_pocket_delete === false && item.value)
    return deletePocket(item.value.key)
  else deleteFolderWithConfirm(item.value?.key)
}

const { settings } = storeToRefs(user())
const pocketActions = computed<ContextMenuItem[] | null>(() => {
  if (!item.value) return null
  const p = item.value
  if (!p) return null

  const pinned = pocketStore().pinned.includes(p.key)

  if (p.location === "trash")
    return [
      {
        label: "Restore",
        icon: "i-ui-restore",

        ui: {
          itemLeadingIcon: "scale-120"
        },
        onSelect() {
          p.location = "folders"
          p.trashed_at = undefined
        }
      }
    ] as ContextMenuItem[]

  return [
    {
      label: pinned ? "Unpin" : "Pin",
      icon: pinned ? "i-unpin" : "i-pin",
      ui: {
        itemLeadingIcon: "**:stroke-[2.1] "
      }
    },

    {
      ...contextOpen(p.label ?? ""),
      onSelect() {
        navigateTo(`/backpack/${p.location || "folders"}/pocket/${p.key}`)
      }
    },
    {
      type: "separator" as ContextMenuItem["type"]
    },
    {
      label: "Rename",
      icon: "i-lucide-text-cursor-input",
      onSelect() {
        emit("toggleEdit", true)
      }
    },
    {
      label: "Duplicate",
      icon: "i-lucide-copy",
      onSelect() {
        duplicatePocket(p as Pocket)
      }
    },
    {
      type: "separator" as ContextMenuItem["type"]
    },
    ...computed(() =>
      props.type === "sidebar"
        ? [
            collapseAllItem.value,
            {
              type: "separator" as ContextMenuItem["type"]
            }
          ]
        : []
    ).value.filter(Boolean),
    settings.value
      ? {
          label: "Move to...",
          icon: "i-folder-to",
          children: settings.value.folders.map((f) => ({
            label: f.label,
            onSelect() {
              p.location = f.id
            }
          }))
        }
      : {},
    sortMenu.value,
    {
      type: "separator" as ContextMenuItem["type"]
    },
    {
      label: "Delete",
      icon: "i-trash",
      onSelect() {
        p.key && deletePocket(p.key)
      }
    }
  ].filter(Boolean)
})
</script>

<template>
  <ContextMenu
    v-slot="{ open }"
    v-bind="forwarded"
    :items="pocketActions ?? []"
    size="lg"
    :ui="pocketSidebarContextUi"
    :content="{
      ...props?.content,
      onCloseAutoFocus: (event: Event) => event.preventDefault()
    }"
    @update:open="
      (e: boolean) =>
        e === false && subopen === true ? () => {} : emit('update:open', e)
    ">
    <slot :open />
  </ContextMenu>
</template>
