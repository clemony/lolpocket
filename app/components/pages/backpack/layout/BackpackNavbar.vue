<script lang="ts" setup>
import type { DropdownMenuItem } from "@nuxt/ui"
import { useBackpack } from "~/domain/backpack/useBackpack"
import { useFolders } from "~/domain/pocket/folder/useFolder"
import { iconSets } from "~~/layers/ui/app/assets/icons/icon-sets"

const {
  sidebarCollapsed,
  view,
  folderId,
  tableApi,
  toggleSidebar,
  onFolderUpdate
} = useBackpack()

const viewModes = [
  {
    label: "Gallery",
    value: "gallery",
    icon: "i-gallery"
  },
  {
    label: "List",
    value: "table",
    icon: "i-square-list"
  },
  {
    label: " ",
    value: "empty",
    icon: "",
    ui: {
      trigger: "size-0 max-w-0 -mr-3"
    },
    disabled: true
  }
]

const sortItems = computed<DropdownMenuItem[]>(() => [
  {
    label: "Group by",
    type: "label",
    ui: {
      label: "pb-0.5!"
    }
  },
  {
    type: "separator"
  },
  {
    label: "Folder",
    icon: "i-folder",
    type: "checkbox",
    ui: {
      itemLeadingIcon: "**:stroke-[2.3]"
    }
  },
  {
    label: "Patch",
    icon: "i-lp-riot-circle",
    type: "checkbox",
    ui: {
      itemLeadingIcon: "scale-112"
    }
  }
])

const route = useRoute()

const selectedRows = computed(
  () => tableApi.value?.getSelectedRowModel().flatRows
)

watch(
  () => selectedRows.value,
  (v) => {
    console.log("💠 - watch - newVal:", v)
  }
)

const isTable = computed(() => /\/table/g.test(route.path))
watch(
  () => view.value,
  (v) => {
    if (v && v === "table" && !isTable.value) {
      navigateTo(`${route.path}/table`)
    } else if (v && v === "gallery" && isTable.value) {
      const path = route.path.replace("/table", "")
      navigateTo(path)
    }
  }
)
onMounted(() => {
  isTable.value ? (view.value = "table") : (view.value = "gallery")
})

const hasMany = computed(
  () => selectedRows.value && selectedRows.value?.length > 1
)

const tableUtils = [
  {
    label: `Move${hasMany.value ? " All" : ""} to...`,
    icon: "i-folder-to",
    onClick: () => {}
  },
  {
    label: `Archive${hasMany.value ? " All" : ""}`,
    icon: "i-archive-restore",
    onClick: () => {}
  },
  {
    label: `Delete${hasMany.value ? " All" : ""}`,
    icon: "i-trash",
    onClick: () => {}
  }
  /*   {
    label: "Share",
    icon: "i-share",
    type: "button",
    onClick: () => {}
  },
  {
    label: "Refresh",
    icon: "i-refresh",
    type: "button",
    onClick: () => {}
  },
  {
    label: "Download",
    icon: "i-download",
    type: "button",
    onClick: () => {}
  } */
]
</script>

<template>
  <div class="flex grow items-end justify-end self-end">
    <div class="flex items-center gap-2 rounded-xl px-3 py-1">
      <div class="flex items-center gap-2">
        <UButton
          v-for="item in tableUtils"
          :key="item.label"
          :disabled="!selectedRows?.length"
          :icon="item.icon"
          :ui="{
            base: 'w-16!',
            leadingIcon:
              'size-4.5 text-pc **:stroke-[2.26] group-disabled/btn:opacity-40 hover:text-nc'
          }"
          variant="ghost" />
      </div>

      <div>
        <UTabs
          v-model:model-value="view"
          :items="viewModes"
          variant="lift"
          color="neutral"
          size="md"
          :ui="{
            root: 'w-max self-end',
            list: 'shrink-0 self-end rounded-t-3xl px-0',
            label: 'hidden',
            trigger:
              'w-16 data-[state=active]:text-nc data-[state=active]:**:text-nc',
            indicator: 'h-10 rounded-t-3xl',
            leadingIcon: cn('size-4.5')
          }">
          <template #leading="{ item }">
            <Tooltip :label="item.label">
              <div class="anchor absolute inset-0 size-full">
                <Icon
                  :name="String(item.icon)"
                  :class="
                    cn('size-4.5', {
                      'z-2 text-nc! **:text-nc!': item.value === view
                    })
                  " />
              </div>
            </Tooltip>
          </template>
        </UTabs>
      </div>

      <UDropdownMenu
        :content="{
          onCloseAutoFocus: (event) => event.preventDefault()
        }"
        :items="sortItems">
        <Tooltip label="Sort">
          <UButton
            icon="i-swap-2"
            variant="ghost"
            :ui="{
              base: 'h-9 max-h-9 rounded-xl',
              leadingIcon: 'rotate-90 **:stroke-[2]'
            }" />
        </Tooltip>
      </UDropdownMenu>
    </div>
  </div>
</template>
