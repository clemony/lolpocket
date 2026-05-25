<script lang="ts" setup>
import { useBackpack } from "~/domain/backpack/useBackpack"
import { useFolders } from "~/domain/pocket/folder/useFolder"

const { sidebarCollapsed, search, searchVisible, folderId, sidebarFolderRefs } =
  useBackpack()

const selected = shallowRef<SortablePocket | undefined>()

const open = ref<boolean[]>([])
const { defaults } = useFolders()
const tabList = computed(() => [
  {
    label: "Backpack",
    value: "backpack",
    slot: "backpack",
    icon: "i-backpack"
  },
  {
    label: "Search",
    value: "search",
    slot: "search",
    icon: "i-search"
  },
  {
    label: "Pocket",
    value: "pocket"
  }
])

const currentTab = shallowRef<string>("backpack")
const modelValue = defineModel<boolean>("modelValue", {
  default: false
})
</script>

<template>
  <UDashboardSidebar
    v-model:collapsed="sidebarCollapsed"
    :collapsible="true"
    :resizable="true"
    :ui="{
      header: 'm-0! flex h-fit! w-full items-end justify-start p-0!',
      root: 'group/sidebar h-unset! @container relative m-0! max-w-full gap-5 space-y-0! p-0! data-[dragging=false]:duration-200 data-[dragging=false]:ease-out',
      body: cn(
        'relative max-h-[90.4vh] w-full overflow-hidden p-0',

        sidebarCollapsed ? 'items-center max-h-min' : ' h-min  pt-0'
      )
    }"
    :sidebar-collapsed-size="3"
    :max-size="40"
    :default-collapsed="false"
    :default-size="26">
    <template #header>
      <div class="w-full">
        <BackpackSidebarHeader />
      </div>
    </template>
    <template #default>
      <SidebarTheme>
        <div
          ref="sidebarBody"
          class="@container/sidebar relative w-full overflow-hidden"
          @mouseenter="modelValue = true"
          @focusin="modelValue = true"
          @mouseleave="modelValue = false"
          @focusout="modelValue = false">
          <UTabs
            v-if="!sidebarCollapsed"
            v-model:model-value="currentTab"
            :items="tabList"
            variant="lift"
            :ui="{
              leadingIcon: 'hidden',
              list: 'h-11 pr-3',
              trigger: 'h-11',
              label:
                'group-active/trigger:border-b group-active/trigger:border-b-p0 group-active/trigger:font-semibold',
              indicator: 'rounded-t-2xl!',
              content: cn(
                'mt-0! max-h-full w-full overflow-x-hidden overflow-y-auto border-t bg-p0 py-4 drop-shadow-sm drop-shadow-black/6',
                currentTab === 'pocket' ? 'rounded-tr-none!' : ''
              )
            }">
            <template #list-trailing>
              <NewOptionsMenu
                icon="i-more"
                square
                :menu="{
                  content: {
                    align: 'end',
                    side: 'bottom'
                  }
                }"
                variant="ghost"
                size="sm"
                :ui="{
                  base: 'mb-0.5',
                  leadingIcon: cn('size-4.5 **:stroke-[10%]!')
                }" />
            </template>
            <template #backpack>
              <div
                ref="element"
                class="z-auto flex w-full flex-col items-center gap-0.5 overflow-x-hidden px-2">
                <template v-for="(item, index) in defaults" :key="item.id">
                  <LazySidebarSortableFolder
                    :index
                    :collapsed="sidebarCollapsed"
                    :item="item" />
                </template>
              </div>
            </template>
            <template #search>
              <BackpackSidebarSearchResults />
            </template>
          </UTabs>
          <div
            v-else
            class="'z-auto flex h-fit min-w-12 grow-0 flex-col items-center gap-1 overflow-x-hidden pb-2">
            <template v-for="folder in defaults" :key="folder?.id">
              <LazyBackpackFolderPopover :item="folder" />
            </template>
          </div>
        </div>
      </SidebarTheme>
    </template>
  </UDashboardSidebar>
</template>
