<script lang="ts" setup>
import { Feedback } from "@dnd-kit/dom"
import { DragDropProvider, DragOverlay } from "@dnd-kit/vue"
import { useTableProvider } from "~/composables/ui/useTableProvider"
import { provideBackpack } from "~/domain/backpack/composables/useBackpack"
import {
  useFolders,
  usePocketFolderProvider
} from "~/domain/backpack/composables/useFolder"
import { onDragEnd } from "~/domain/backpack/utils/dragEvents"

usePocketFolderProvider()
useTableProvider()
const { routeFolder } = useFolders()
const { view } = provideBackpack()
</script>

<template>
  <Layout>
    <UDashboardGroup
      unit="rem"
      :ui="{
        base: 'max-h-[calc(100vh-var(--ui-header-height)] w-full flex-1 translate-y-(--ui-header-height) gap-4 overflow-hidden px-8 py-7'
      }">
      <DragDropProvider
        :plugins="
          (defaults) => [
            ...defaults,
            Feedback.configure({
              dropAnimation: {
                duration: 170,
                easing: 'cubic-bezier(0.2, 0, 0, 1)'
              }
            })
          ]
        "
        @drag-end="onDragEnd($event)">
        <BackpackSidebar />
        <slot name="folder" :folder="routeFolder" :view />

        <DragOverlay tag="div" class="pointer-events-none fixed size-full">
          <SortableBackpackGhost />
        </DragOverlay>
      </DragDropProvider>

      <slot />
    </UDashboardGroup>
  </Layout>
</template>
