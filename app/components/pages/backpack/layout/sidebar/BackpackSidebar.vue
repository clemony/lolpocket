<script lang="ts" setup>
import { useSortable } from "@dnd-kit/vue/sortable"
import { useBackpack } from "~/domain/backpack/useBackpack"
import { useFolders } from "~/domain/pocket/folder/useFolder"
import { clickFriendlySensors } from "~/domain/pocket/helpers/sortableSensors"
import type { PocketProps } from "~/domain/pocket/types"

const { sidebarCollapsed, search, searchVisible, folderId } = useBackpack()
const list = shallowRef<number[]>([])

const selected = shallowRef<PocketProps | undefined>()

const open = ref<boolean[]>([])
const { defaults } = useFolders()
const tabList = computed(() => [
  {
    label: " ",
    value: "folders",
    slot: "folders",
    icon: "i-folder"
  },
  {
    label: " ",
    value: "search",
    slot: "search",
    icon: "i-search"
  },
  {
    label: "Pocket",
    value: "pocket"
  },
  {
    label: "empty",
    value: "empty",
    ui: {
      trigger: "grow"
    }
  }
])

const section = ref("folders")

const element = useTemplateRef<HTMLElement>("element")
const handle = useTemplateRef<HTMLElement>("handle")
</script>

<template>
  <UDashboardSidebar
    v-model:collapsed="sidebarCollapsed"
    :collapsible="true"
    :resizable="true"
    :ui="{
      header: 'm-0! flex w-full items-end justify-start p-0!',
      root: 'group/sidebar h-unset! @container relative m-0! max-w-full gap-0! space-y-0! p-0! data-[dragging=false]:duration-200 data-[dragging=false]:ease-out',
      body: cn(
        'relative max-h-[90.4vh] w-full overflow-hidden p-0',

        sidebarCollapsed ? 'items-center max-h-min' : ' h-min  pt-0'
      )
    }"
    :sidebar-collapsed-size="3"
    :max-size="40"
    :default-collapsed="false"
    :default-size="26">
    <template #default>
      <div
        class="relative w-full overflow-hidden rounded-4xl border border-border pb-3">
        <div class="w-full">
          <BackpackSidebarHeader
            :sidebar-collapsed="computed(() => sidebarCollapsed)" />
        </div>
        <div
          :class="
            cn('@container/sidebar overflow-x-hidden overflow-y-auto', {
              'min-w-12 grow-0': sidebarCollapsed,
              'max-h-full w-full': !sidebarCollapsed
            })
          ">
          <ul
            v-if="!sidebarCollapsed && folderId !== 'search' && !searchVisible"
            ref="element"
            class="z-auto flex w-full flex-col items-center gap-1 overflow-x-hidden px-2">
            <template v-for="(item, index) in defaults" :key="item.id">
              <LazyDefaultPocketFolder
                v-if="item.id === 'folders'"
                :index
                :collapsed="sidebarCollapsed" />

              <LazyBackpackSidebarFolder
                v-else
                :index
                group="folders:default"
                :collapsed="sidebarCollapsed"
                :item="item" />
            </template>
          </ul>
          <BackpackSidebarSearchResults v-else-if="searchVisible" />
          <div
            v-else
            class="'z-auto overflow-x-hidden' flex h-fit flex-col items-center gap-1 pb-2">
            <template v-for="folder in defaults" :key="folder?.id">
              <LazyBackpackFolderPopover :item="folder" />
            </template>
          </div>
        </div>
      </div>
    </template>
  </UDashboardSidebar>
</template>
