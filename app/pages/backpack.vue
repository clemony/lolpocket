<script lang="ts" setup>
import { DragDropManager, Feedback } from "@dnd-kit/dom"
import { DragDropProvider, DragOverlay } from "@dnd-kit/vue"
import { useTableProvider } from "~/composables/ui/useTableProvider"
import { provideBackpack } from "~/domain/backpack/composables/useBackpack"
import {
  useFolders,
  usePocketFolderProvider
} from "~/domain/backpack/composables/useFolder"
import { onDragEnd } from "~/domain/backpack/utils/dragEvents"

definePageMeta({
  title: "Backpack",
  id: "backpack",
  icon: "i-folder",
  layout: false,
  iconKey: "folder",
  prefix: "Backpack",
  order: 1
})

usePocketFolderProvider()
useTableProvider()
const { routeFolder } = useFolders()
const { view } = provideBackpack()

const manager = new DragDropManager({
  plugins: (defaults) => [
    ...defaults,
    Feedback.configure({ feedback: "default" })
  ]
})
</script>

<template>
  <Layout>
    <UDashboardGroup
      unit="rem"
      :ui="{
        base: 'max-h-[calc(100vh-var(--ui-header-height)] w-full flex-1 translate-y-(--ui-header-height) gap-4 overflow-hidden px-8 py-7'
      }">
      <DragDropProvider :manager="manager" @drag-end="onDragEnd($event)">
        <BackpackSidebar />
        <UDashboardPanel resizable>
          <NuxtPage :folder="routeFolder" :view />
        </UDashboardPanel>

        <DragOverlay tag="div" class="pointer-events-none absolute size-full">
          <SortableBackpackGhost />
        </DragOverlay>
      </DragDropProvider>
    </UDashboardGroup>
  </Layout>
</template>
