<script lang="ts" setup>
import { DragDropProvider, DragOverlay } from "@dnd-kit/vue"
import { useTableProvider } from "~/composables/ui/useTableProvider"
import { provideBackpack } from "~/domain/backpack/useBackpack"
import {
  useFolders,
  usePocketFolderProvider
} from "~/domain/pocket/folder/useFolder"

import { provideDragManager } from "~/composables/ui/useDragManager"
import { onSidebarDragEnd } from "~/domain/pocket/helpers/sidebarDrag"

usePocketFolderProvider()
useTableProvider()

definePageMeta({
  title: "Backpack",
  id: "backpack",
  icon: "i-folder",
  layout: false,
  iconKey: "folder",
  prefix: "Backpack",
  order: 1
})

const { routeFolder } = useFolders()
const store = pocketStore()
const { view } = provideBackpack()

const sidebarRef = useTemplateRef<{ sidebarRef: HTMLElement }>("sidebarRef")
const sidebar = computed(() => sidebarRef.value?.sidebarRef)
const provider = provideDragManager({ reference: sidebar })
</script>

<template>
  <Layout>
    <UDashboardGroup
      unit="rem"
      :ui="{
        base: 'max-h-[calc(100vh-var(--ui-header-height)] w-full flex-1 translate-y-(--ui-header-height) gap-4 overflow-hidden px-8 py-7'
      }">
      <DragDropProvider
        :manager="provider.manager"
        @drag-end="onSidebarDragEnd">
        <BackpackSidebar ref="sidebarRef" />
        <UDashboardPanel resizable>
          <NuxtPage :folder="routeFolder" :view />
        </UDashboardPanel>

        <DragOverlay
          tag="div"
          :drop-animation="null"
          class="pointer-events-none size-0 opacity-0" />
        <Teleport to="body">
          <SortableBackpackGhost />
        </Teleport>
      </DragDropProvider>
    </UDashboardGroup>
  </Layout>
</template>
