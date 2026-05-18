<script lang="ts" setup>
import { useBackpack } from "~/domain/backpack/useBackpack"
import { useFolders } from "~/domain/pocket/folder/useFolder"
import type { PocketProps } from "~/domain/pocket/types"

const { sidebarCollapsed, search, searchVisible, folderId } = useBackpack()
const list = shallowRef<number[]>([])

const selected = shallowRef<PocketProps | undefined>()

const open = ref<boolean[]>([])
const { defaults } = useFolders()

watch(searchVisible, (v) => {
  console.log("💠 - watckhkhkhkhh - newVal:", v)
})
</script>

<template>
  <UDashboardSidebar
    v-model:collapsed="sidebarCollapsed"
    :collapsible="true"
    :resizable="true"
    :ui="{
      root: 'group/sidebar @container relative h-[89vh] max-h-[calc(100vh-var(--ui-header-height))] max-w-full gap-4 pb-2.5 data-[dragging=false]:duration-200 data-[dragging=false]:ease-out',
      header: cn(
        'z-1 flex h-auto w-full max-w-full flex-wrap gap-0 overflow-hidden bg-transparent px-0',
        sidebarCollapsed
          ? 'flex-col justify-center h-max! py-2 rounded-4xl border border-border'
          : 'items-center  border-none'
      ),
      body: cn(
        'w-full overflow-hidden rounded-4xl border border-border p-0!',

        sidebarCollapsed
          ? 'items-center max-h-min'
          : 'max-h-[88vh] h-[88vh] pt-0'
      )
    }"
    :sidebar-collapsed-size="3"
    :max-size="40"
    :default-collapsed="false"
    :default-size="26">
    <template #header>
      <BackpackSidebarHeader
        :sidebar-collapsed="computed(() => sidebarCollapsed)" />
    </template>

    <div
      :class="
        cn('@container/sidebar relative overflow-x-hidden overflow-y-auto', {
          'min-w-12 grow-0': sidebarCollapsed,
          'size-full max-h-full grow': !sidebarCollapsed
        })
      ">
      <div
        v-auto-animate
        :class="
          cn('flex flex-col items-center overflow-x-hidden overflow-y-auto', {
            'h-fit gap-1 py-2': sidebarCollapsed,
            'size-full px-2': !sidebarCollapsed
          })
        ">
        <template
          v-if="!sidebarCollapsed && folderId !== 'search' && !searchVisible">
          <LazyDefaultPocketFolder :sidebar-collapsed />

          <LazyBackpackSidebarFolder
            v-for="item in defaults.filter((f) => f.id !== 'all')"
            :key="item.id"
            :sidebar-collapsed
            :item="item" />
        </template>
        <BackpackSidebarSearchResults v-else-if="searchVisible" />
        <template v-else>
          <template v-for="folder in defaults" :key="folder?.id">
            <LazyBackpackFolderPopover :item="folder" />
          </template>
        </template>
      </div>
    </div>
  </UDashboardSidebar>
</template>
