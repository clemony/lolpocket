<script lang="ts" setup>
import { DragDropProvider } from "@dnd-kit/vue"
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
const { sidebarFolderRefs, view } = provideBackpack()

onMounted(() => {
  sidebarFolderRefs.value = store.sidebarFolderRefs
})
onBeforeRouteLeave(() => {
  store.sidebarFolderRefs = sidebarFolderRefs.value
})

const manager = provideDragManager()

const inSidebar = shallowRef<boolean>(false)
</script>

<template>
  <Layout>
    <UDashboardGroup
      unit="rem"
      :ui="{
        base: 'max-h-[calc(100vh-var(--ui-header-height)] w-full flex-1 translate-y-(--ui-header-height) gap-4 overflow-hidden px-8 py-7'
      }">
      <DragDropProvider :manager @drag-end="onSidebarDragEnd">
        <BackpackSidebar
          ref="sidebar"
          @update:model-value="inSidebar = $event" />

        <UDashboardPanel resizable>
          <NuxtPage :folder="routeFolder" :view />
        </UDashboardPanel>
      </DragDropProvider>
    </UDashboardGroup>
  </Layout>
</template>
