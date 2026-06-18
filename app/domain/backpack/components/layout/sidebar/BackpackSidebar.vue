<script lang="ts" setup>
import { useBackpack } from "~/domain/backpack/composables/useBackpack"
import { useFolders } from "~/domain/backpack/composables/useFolder"
const { sidebarCollapsed } = useBackpack()

const selected = shallowRef<SortablePocket | undefined>()

const open = ref<boolean[]>([])
const { defaults } = useFolders()
</script>

<template>
  <UDashboardSidebar
    v-model:collapsed="sidebarCollapsed"
    :collapsible="true"
    :resizable="true"
    :ui="{
      header: 'flex h-10! w-full items-end justify-start p-0!',
      root: 'group/sidebar h-unset! @container relative m-0! max-w-full gap-3.75 space-y-0! overflow-visible px-0! pt-10 data-[dragging=false]:duration-200 data-[dragging=false]:ease-out',
      body: cn(
        'relative max-h-[90.4vh] w-full overflow-hidden p-0',

        sidebarCollapsed ? 'items-center max-h-min' : ' h-min  pt-0.5'
      ),
    }"
    :sidebar-collapsed-size="3"
    :max-size="40"
    :default-collapsed="false"
    :default-size="26">
    <template #header>
      <BackpackSearchInput />
    </template>
    <template #default>
      <BackpackSidebarTheme>
        <UCard
          ref="sidebarRef"
          :ui="{
            root: cn(
              '@container/sidebar relative w-full overflow-hidden rounded-4xl py-3'
            ),
          }">
          <template v-if="!sidebarCollapsed">
            <div
              class="z-auto flex w-full flex-col items-center gap-0.5 overflow-x-hidden px-2">
              <template v-for="(item, index) in defaults" :key="item.id">
                <LazySidebarSortableFolder
                  :index
                  :collapsed="sidebarCollapsed"
                  :item="item" />
              </template>
              <BackpackPocketSidebar />
            </div>
          </template>

          <div
            v-else
            class="'z-auto flex h-fit min-w-12 grow-0 flex-col items-center gap-1 overflow-x-hidden pb-2">
            <template v-for="folder in defaults" :key="folder?.id">
              <LazyBackpackFolderPopover :item="folder" />
            </template>
          </div>
        </UCard>
      </BackpackSidebarTheme>
    </template>
    <template #footer>
      <Icon name="i-material-symbols-sticker-add-outline" class="" />
      <Icon name="i-material-symbols-new-window" class="" />
    </template>
  </UDashboardSidebar>
</template>
