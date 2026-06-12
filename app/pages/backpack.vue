<script lang="ts" setup>
import { Feedback } from "@dnd-kit/dom"
import { DragDropProvider, DragOverlay } from "@dnd-kit/vue"
import { useTableProvider } from "~/composables/ui/useTableProvider"
import { provideBackpack } from "~/domain/backpack/composables/useBackpack"
import { usePocketFolderProvider } from "~/domain/backpack/composables/useFolder"
import { onDragEnd } from "~/domain/backpack/utils/dragEvents"
usePocketFolderProvider()
useTableProvider()
provideBackpack()
definePageMeta({
  title: "Backpack",
  id: "backpack",
  icon: "i-folder",
  layout: false,
  props: true,
  iconKey: "folder",
  prefix: "Backpack",
  order: 1
})
</script>

<template>
  <Layout>
    <UDashboardGroup
      unit="rem"
      :ui="{
        base: 'size-full max-h-[calc(100vh-var(--ui-header-height)] flex-1 translate-y-(--ui-header-height) gap-4 overflow-hidden px-8 pt-0 pb-7'
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
        <NuxtPage
          v-if="
            ['backpack-id', 'backpack-id-table'].includes(String($route.name))
          " />

        <DragOverlay tag="div" class="pointer-events-none fixed size-full">
          <SortableBackpackGhost />
        </DragOverlay>
      </DragDropProvider>

      <NuxtPage
        v-if="
          !['backpack-id', 'backpack-id-table'].includes(String($route.name))
        " />
    </UDashboardGroup>
  </Layout>
</template>
