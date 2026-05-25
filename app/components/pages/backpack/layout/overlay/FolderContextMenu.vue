<script lang="ts" setup>
import type {
  ContextMenuEmits,
  ContextMenuItem,
  ContextMenuProps
} from "@nuxt/ui"
import { useForwardPropsEmits } from "reka-ui"
import { useBackpack } from "~/domain/backpack/useBackpack"
import {
  deleteFolder,
  deleteFolderWithConfirm
} from "~/domain/pocket/folder/deleteFolder"

import {
  collapseAllBtn,
  contextOpen,
  newPocketContext,
  pocketSidebarContextUi
} from "~/domain/pocket/menu/contextActions"
import { useSortMenu } from "~/domain/pocket/menu/sortMenu"
import { newPocket } from "~/domain/pocket/newPocket"
import { iconSets } from "~~/layers/ui/app/assets/icons/icon-sets"

const props = withDefaults(
  defineProps<
    ContextMenuProps & {
      folder: SortableFolder | undefined
      component?: "context" | "dropdown"
    }
  >(),
  {
    component: "context"
  }
)

const emit = defineEmits<
  ContextMenuEmits & {
    "update:icon-key": [iconKey: string]
    toggleEdit: [boolean]
  }
>()

const subopen = shallowRef<boolean>(false)
const delegated = reactiveOmit(props, "class", "folder")
const forwarded = useForwardPropsEmits(delegated, emit)
const routeId = useRouteParams("id")
const { collapseAllFolders } = useBackpack()
const sortMenu = useSortMenu()
const collapseAllItem = computed(() =>
  toMenuItem(collapseAllBtn(collapseAllFolders))
)

const iconList = computed(() =>
  Object.values(iconSets).filter((i) => !["archive", "trash"].includes(i.key))
)

function handleChange(iconKey: string) {
  emit("update:icon-key", iconKey)
}
const handleDelete = async () => {
  if (user().localSettings.confirm_folder_delete === false && props.folder)
    return deleteFolder(props.folder.id)
  else deleteFolderWithConfirm(props.folder?.id)
}
const folderActions = computed(() => {
  if (!props.folder || !props.folder.id) return []
  else if (props.folder.id === "folders")
    return [
      {
        ...contextOpen("Backpack"),
        onClick: () => navigateTo("/backpack/folders")
      },
      {
        type: "separator" as ContextMenuItem["type"]
      },
      {
        ...newPocketContext(String("Backpack")),
        onSelect: () => newPocket()
      } as ContextMenuItem,
      sortMenu.value
    ]
  else if (props.folder.id === "archive")
    return [
      {
        ...contextOpen("Archive"),
        onSelect() {
          navigateTo("/backpack/archive")
        }
      },
      sortMenu.value
    ]
  else if (props.folder.id === "trash")
    return [
      {
        ...contextOpen("Trash"),
        onSelect() {
          navigateTo("/backpack/trash")
        }
      },
      sortMenu.value,
      {
        type: "separator"
      },
      {
        label: "Empty Trash",
        icon: "i-trash"
      }
    ]
  return [
    {
      ...contextOpen(String(props.folder?.label ?? "")),
      onClick: () => (routeId.value = String(props.folder?.id))
    },
    {
      type: "separator"
    },

    {
      ...newPocketContext(String(props.folder.label ?? "")),
      onClick: () =>
        newPocket({
          location: props.folder?.location || String(props.folder?.id)
        })
    },
    {
      type: "separator"
    },

    {
      label: "Rename",
      icon: "i-text-input",
      ui: { leadingIcon: "**:stroke-[2.4]! " },
      onClick: () => emit("toggleEdit", true)
    },
    {
      label: "Edit Folder Icon",
      slot: "folder.icons" as const,
      icon: iconSets[String(props.folder?.iconKey ?? "folder")]?.closed,
      ui: {
        item: "relative"
      }
    },
    {
      type: "separator" as ContextMenuItem["type"]
    },
    collapseAllItem.value,
    {
      type: "separator"
    },
    sortMenu.value,
    {
      type: "separator"
    },
    {
      label: "Delete",
      onSelect() {
        handleDelete()
      },
      icon: "i-trash"
    }
  ].filter(Boolean) as ContextMenuItem[]
})
</script>

<template>
  <Menu
    v-if="folder"
    v-bind="forwarded"
    :component
    :items="folderActions"
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
    <template #default="{ open }">
      <slot :open />
    </template>
    <template #folder>
      <LazyUPopover
        v-model:open="subopen"
        mode="hover"
        :content="{ side: 'right', align: 'start', alignOffset: -10 }"
        :ui="{ content: 'pt-3' }">
        <button class="inset-0 flex size-full items-center justify-start gap-2">
          <Icon
            :name="String(folder.icons?.open)"
            :class="cn('size-4 **:stroke-[2.1]', folder.icons?.class)" />
          <span class="grow text-start">Edit Folder Icon...</span>
          <Icon name="i-right" class="size-4 opacity-60" />
        </button>

        <template #content>
          <div class="flex items-center justify-between gap-1.5 px-3">
            <div class="flex flex-col items-start">
              <p class="text-xs leading-none font-medium text-n5">Selected</p>
              <h6>{{ iconSets[folder?.iconKey ?? "folder"]?.label }}</h6>
            </div>
            <div class="flex items-center gap-2.5 pr-1">
              <Icon
                v-for="(ico, i) in [folder.icons?.closed, folder.icons?.open]"
                :key="i"
                :name="String(ico)"
                :class="cn('size-5.5 **:stroke-[1.7]')" />
            </div>
          </div>
          <USeparator class="mt-2" />
          <div
            class="grid max-h-60 grid-cols-4 gap-2 overflow-y-scroll px-3 py-2.5">
            <UButton
              v-for="set in iconSets"
              :key="set.key"
              :active="folder?.iconKey === set.key"
              active-color="neutral"
              active-variant="solid"
              :ui="{ base: 'anchor relative shadow-none' }"
              size="xl"
              variant="outline"
              square
              for="icon"
              @click="handleChange(set.key)">
              <template #leading>
                <span data-state="open" class="group/btn">
                  <Icon
                    :name="set.open"
                    :class="
                      cn(
                        'size-5 opacity-0 transition-opacity duration-200 ease-in-out group-hover/btn:opacity-100',
                        set?.class,
                        { 'text-nc': folder?.iconKey === set.key }
                      )
                    " />
                </span>
                <span data-state="closed" class="group/btn">
                  <Icon
                    :name="set.closed"
                    :class="
                      cn(
                        'size-5 transition-opacity duration-200 ease-in-out group-hover/btn:opacity-0',
                        set?.class,
                        {
                          'text-nc': folder?.iconKey === set.key
                        }
                      )
                    " />
                </span>
              </template>
            </UButton>
          </div>
        </template>
      </LazyUPopover>
    </template>
  </Menu>
</template>
