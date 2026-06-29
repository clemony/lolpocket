<script lang="ts" setup>
import type {
  ContextMenuEmits,
  ContextMenuItem,
  ContextMenuProps,
} from "@nuxt/ui"
import { useForwardPropsEmits } from "reka-ui"

import {
  collapseAllItem,
  deleteItem,
  openItem,
  separatorItem,
} from "~/domain/app/utils/menuItems"
import { useSortMenu } from "~/domain/backpack/utils/folder/sortMenu"
import { pocketSidebarContextUi } from "~/domain/backpack/utils/folder/ui"
import { duplicatePocket } from "~/domain/pocket/utils/manage/duplicate"

defineOptions({
  inheritAttrs: false,
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
const sortMenu = useSortMenu()

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
          itemLeadingIcon: "scale-120",
        },
        onSelect() {
          p.location = "folders"
          p.trashed_at = undefined
        },
      },
    ]

  return [
    {
      label: pinned ? "Unpin" : "Pin",
      icon: pinned ? "i-unpin" : "i-pin",
      ui: {
        itemLeadingIcon: "**:stroke-[2.1] ",
      },
    },

    openItem(p.label ?? "", p.key, "pocket"),
    separatorItem,
    {
      label: "Rename",
      icon: "i-lucide-text-cursor-input",
      onSelect() {
        emit("toggleEdit", true)
      },
    },
    {
      label: "Duplicate",
      icon: "i-lucide-copy",
      onSelect() {
        duplicatePocket(p as Pocket)
      },
    },
    separatorItem,
    ...computed(() =>
      props.type === "sidebar" ? [collapseAllItem, separatorItem] : []
    ).value.filter(Boolean),
    settings.value
      ? {
          label: "Move to...",
          icon: "i-folder-to",
          children: settings.value.folders.map((f: Folder) => ({
            label: f.label,
            onSelect() {
              p.location = f.id
            },
          })),
        }
      : {},
    sortMenu.value,
    separatorItem,
    deleteItem(p.key, "pocket"),
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
      onCloseAutoFocus: (event: Event) => event.preventDefault(),
    }"
    @update:open="
      (e: boolean) =>
        e === false && subopen === true ? () => {} : emit('update:open', e)
    ">
    <slot :open />
  </ContextMenu>
</template>
